<template>
	<view class="p-2 flex flex-column">
		<u-toast ref="uToast" />
		<view class="p-2 bg-white rounded-1"  v-for="(item,index) in userList" :key="index">
			<view class="flex align-center justify-between">
				<view class="mr-3"  @click="openSpace(item)">
					<u-avatar
						:src="item.avatar"
						:size="100">
					</u-avatar>
				</view>
				<view class="flex-1 flex justify-between">
					<view class="">
						<view class="">
							<text class="font-md"
								style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.nickname}}</text>
						</view>
						
						<view class="">
							<text class="font text-muted"
								style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.sign ? item.sign : '暂无简介'}}</text>
						</view>
					</view>
					<view class="">
						<view class="font-sm px-1 py-1 rounded btn-main"
							@click="confirmActOrder(item)" v-if="item.payType == 1 && item.status == 1">
							确认到场
						</view>
					</view>
					
				</view>
			</view>
			<view class="flex align-center justify-between">
				<view class="" style="margin-right: 130rpx;">
				</view>
				<view class="flex-1">
					<view class="my-2">
						<text class="font text-muted">联系方式：{{item.phone}}</text>
					</view>
					<view class="my-2">
						<text class="font text-muted">参与人数：{{item.person}}人</text>
					</view>
					<view class="my-2">
						<text class="font text-muted">玩主备注：{{item.remark}}</text>
					</view>
					<view class="my-2">
						<text class="font text-muted">报名时间：{{item.joinTime}}</text>
					</view>
					<view class="my-2" v-if="item.payType == 1">
						<text class="font text-muted">支付金额：<text class="text-danger font-weight-bold">{{item.price}}</text></text><u-icon name="rmb"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			id: 0,
			userList: []
			}
		},
		onLoad(option) {
			this.id = option.id
			this.init()
		},
		methods: {
			init(){
				this.$u.api.getActivityUserList({id: this.id}).then(res => {
					this.userList = res.data
				})
			},
			openSpace(item){
				uni.navigateTo({
					url: `../user-space/user-space?uid=${item.id}`
				})
			},
			confirmActOrder(item){
				this.$u.api.confirmActOrder({id: item.orderId}).then(res => {
					if(res.code == 200){
						this.$refs.uToast.show({
							type: 'success',
							title: res.msg
						})
						this.init()
					}else{
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}
</style>
