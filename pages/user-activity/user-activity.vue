<template>
	<view>
		<template v-if="activityList.length > 0">
			<u-toast ref="uToast" />
			<view class="m-2 p-2 flex bg-white rounded-1" :key="index" v-for="(item, index) in activityList">
				<view class="" @click="contentClick(item)">
					<image mode="aspectFill" class="rounded" style="height: 150rpx; width: 150rpx;"
						:src="getImgBase + item.img" />
				</view>
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="flex flex-column flex-1 ml-2">
					<view class="flex justify-between align-center font-md" @click="contentClick(item)">
						<text class="">{{ item.title }}</text>
						<view class="mt-1 font flex justify-between" v-if="item.activityStatus == 1">
							<text class="text-main">进行中</text>
						</view>
						<view class="mt-1 font flex justify-between" v-else>
							<text class="text-muted">已结束</text>
						</view>
					</view>
					<view class="mt-1 font text-muted "
						style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;" @click="contentClick(item)">
						<text class="">{{ item.detail }}</text>
					</view>
					<view class="mt-1 font flex justify-between" v-if="item.activityStatus == 1">
						<text class="text-muted">人数：{{item.perLimit}}/{{item.person}}</text>
						<view class="flex align-center">
							<view class="font-sm px-1 py-1 rounded btn-main mr-2" 
								@click="del(item)">
								删除
							</view>
							<view class="font-sm px-1 py-1 rounded btn-main mr-2"
								@click="modify(item)">
								修改
							</view>

							<view class="font-sm px-1 py-1 rounded btn-main"
								@click="join(item)">
								参与人员
							</view>
						</view>
					</view>
					<view class="mt-1 font flex justify-between" v-else>
						<text class="text-muted">人数：{{item.perLimit}}/{{item.person}}</text>
						<view class="flex align-center">
							<view class="font-sm px-1 py-1 rounded btn-main mr-2"
								@click="del(item)">
								删除
							</view>
							<view class="font-sm px-1 py-1 rounded btn-main mr-2"
								@click="modify(item)">
								修改
							</view>

							<view class="font-sm px-1 py-1 rounded btn-main"
								@click="join(item)">
								参与人员
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="flex align-center justify-center" style="margin-top: 400rpx;">
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				queryParam: {
					pageNum: 1,
					pageSize: 999
				},
				activityList: [],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [{
						text: '修改活动',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '参与玩主',
						style: {
							backgroundColor: '#8afab2'
						}
					},
					{
						text: '删除活动',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}
		},
		onLoad() {
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			init() {
				this.$u.api.getActivityByUid(this.queryParam).then(res => {
					this.activityList = res.data
				})
			},
			
			del(item){
				this.$u.api.deleteActivity({
					id: item.id
				}).then(res => {
					if (res.code == 200) {
						this.init()
						this.$refs.uToast.show({
							type: 'success',
							title: res.msg
						})
					} else {
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
					}
				})
			},
			modify(item){
				// 修改
				uni.navigateTo({
					url: `../modify-activity/modify-activity?id=${item.id}`
				})
			},
			join(item){
				uni.navigateTo({
					url: `../user-activity-list/user-activity-list?id=${item.id}`
				})
			},
			
			contentClick(e) {
				uni.navigateTo({
					url: `../activity-detail/detail?id=${e.id}`
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
