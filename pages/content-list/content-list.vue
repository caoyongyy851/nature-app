<template>
	<view>
		<template v-if="contentList.length > 0">
		<view class="m-2 p-2 bg-white rounded-1 flex flex-column" v-for="(item, index) in contentList" :key="index" @click="toDetail(item)">
			<view class="flex justify-between align-center">
				<view class="flex align-center">
					<view class="">
						<u-avatar :src="item.avatar" :size="70" :show-sex="false">
						</u-avatar>
					</view>
				
					<view class="flex-1 ml-2">
						<view class="">
							<text class="font">{{item.nickname}}</text>
						</view>
					</view>
				</view>
				<view class="" v-if="item.type == 0">
					<u-tag text="来自参与" shape="circleRight" size="mini" type="success"/>
				</view>
				<view class="" v-else>
					<u-tag text="来自活动" shape="circleRight" size="mini" type="warning"/>
				</view>
			</view>
			<view class="" style="margin-left: 90rpx;">
				<text class="font text-muted">{{item.content}}</text>
			</view>
			<view class="flex flex-row-reverse mt-2">
				<text class="font-sm">{{item.time}}</text>
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
					pageSize: 6
				},
				contentList: [],
				isBottom: false
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init(){
				this.$u.api.getContextByUser(this.queryParam).then(res => {
					this.contentList = res.data
				})
			},
			// 到个人中心
			openSpace(uid) {
				uni.navigateTo({
					url: `../user-space/user-space?uid=${uid}`
				})
			},
			toDetail(item){
				if(item.type == 0){
					uni.navigateTo({
						url: `../detail/detail?id=${item.tid}`
					})
				}else if(item.type == 1){
					uni.navigateTo({
						url: `../activity-detail/detail?id=${item.tid}`
					})
				}
			}
		},
		onReachBottom() {
			if(!this.isBottom){
				this.queryParam.pageNum ++
				let newList = []
				this.$u.api.getContextByUser(this.queryParam).then(res => {
					if(res.data.length > 0){
						newList = res.data
						this.contentList = [...this.contentList, ...newList]
					}else{
						this.isBottom = true
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7
	}
</style>
