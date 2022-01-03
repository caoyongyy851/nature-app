<template>
	<view style="">
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.png" mode="aspectFill" style="width: 150rpx; height: 120rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="p-2">
			<u-swiper :list="topicSwiperList" height="530" @click="swiperClick"></u-swiper>
		</view>
		<view class="font-md font-weight-bold m-2 flex justify-center text-main">
			{{typeName}}
		</view>
		<view>
			<view class="flex align-center flex-wrap w-100 p-1">
				<view class="m-1 rounded shadow-sm position-relative" style="width: 47.26%; background-color: #ffffff;"
					v-for="(item, index) in topicList" :key="index">
					<view class="flex-1 flex-column flex justify-center viewContainer" @click="openDetail(item)">
						<image :src="getImgBase + item.cover" mode="aspectFill" style="width: 100%; height: 200rpx;"
							class="rounded-top">
						</image>

						<view class="flex avatar" @click="openSpace()">
							<!-- 头像 -->
							<image :src="item.avatar" class="rounded-circle mr-1"
								style="width: 55rpx;height: 55rpx;border: 1rpx solid #ffffff;" lazy-load>
							</image>

							<!-- 昵称 | 发布时间 -->
							<view class="flex flex-column">
								<text class="font-sm text-white"
									style="width:117rpx;text-overflow :ellipsis;white-space :nowrap;overflow : hidden;">
									发布者
								</text>
								<text class="font-sm text-muted">{{item.companyName ? item.companyName:item.nickname}}</text>
							</view>
						</view>
					</view>

					<view class="flex flex-column justify-start px-2 my-3">
						<view class="mt-2">
							<text class="font text-dark" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.title}}</text>
						</view>
						<view class="mt-1 font-sm text-muted font-weight-light"
							style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">
							{{item.detail}}
						</view>
					</view>
					<view v-if="item.sign == 1" class="bg-main rounded-circle shadow position-absolute" style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;"/>
				</view>
			</view>
		</view>
		<view class="fixed-bottom-right" @click="toAddPlay">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main" style="font-size: 80rpx;"></text>
		</view>
		<u-modal v-model="authModal.show" title=" " width="550" :show-confirm-button="false"
			:show-cancel-button="false">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.png" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
					</image>
				</view>
				<view class="flex align-center justify-center">
					<text class="font-md">还没有登录哦</text>
				</view>
				<view class="flex align-center justify-center mt-1">
					<text class="font">授权登录后 </text>
				</view>
				<view class="flex align-center justify-center">
					<text class="font">就能和大家一起分享啦~</text>
				</view>
				<view class="flex align-center justify-center mt-3">
					<view class="text-white rounded-circle"
						style="background: linear-gradient(90deg, #8afab2 0%, #5cbba5 100%); padding: 15rpx 100rpx 15rpx 100rpx;"
						@click="toAuth">
						去授权
					</view>
				</view>
				<view class="flex align-center justify-center m-1" style="color: #5cbba5;"
					@click="authModal.show = false">
					暂不登录
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				type: 0,
				topicList:[],
				typeName: '',
				queryParams: {
					pageNum: 1,
					pageSize: 6
				},
				scrollH: 0,
				topicSwiperList: [],
				isBottom: false,
				authModal: {
					show: false
				},
			}
		},
		onLoad(e) {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight
				}
			})
			this.type = e.type
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			init() {
				
				this.$u.api.getTopicName({
					type: this.type
				}).then(res => {
					this.typeName = res.data.tagEn + ' ' + res.data.tag
				})
				this.$u.api.getTopicList({
					type: this.type,
					pageNum: 1,
					pageSize: this.queryParams.pageSize
				}).then(res => {
					this.topicList = res.data
				})
				this.$u.api.getTopicSwiper().then(res => {
					this.topicSwiperList = res.data.map((item,index) => {
						item.image = this.getImgBase + item.image
						return item
					})
				})
			},
			clickLeft(){
				uni.navigateBack({
				    delta: 1
				});
			},
			toAddPlay() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.navigateTo({
					url: `../add-play/add-play?type=${this.type}`
				})
			},
			openDetail(item){
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${item.id}`
				})
			},
			swiperClick(index){
				let id = this.topicSwiperList[index].id
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${id}`
				})
			},
			toAuth() {
				if (this.getNeedAuth) {
					this.authUserInfo().then(res => {
						if (res == 'success') {
							this.$refs.uToast.show({
								type: 'success',
								title: '授权成功~'
							})
							this.authModal = false
						} else {
							this.$refs.uToast.show({
								type: 'error',
								title: '授权失败~'
							})
						}
					})
					return
				}
			},
			onReachBottom() {
				if(!this.isBottom){
					this.queryParams.pageNum ++
					let newList = []
					this.$u.api.getTopicList({
						type: this.type,
						pageNum: this.queryParams.pageNum,
						pageSize: this.queryParams.pageSize
					}).then(res => {
						if(res.data.length > 0){
							newList = res.data
							this.topicList = [...this.topicList, ...newList]
						}else{
							this.isBottom = true
						}
					})
				}
			}
		}
	}
</script>

<style>
	.viewContainer {
		position: relative;
	}

	.avatar {
		position: absolute;
		left: 20rpx;
		bottom: -32rpx;
	}
	page {
		background-color: #f7f7f7;
	}
</style>
