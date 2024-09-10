<template>
	<view>
		<u-toast ref="uToast" />
		<uni-nav-bar fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.jpg" lazy-load="true" mode="aspectFill" style="width: 150rpx; height: 120rpx;">
				</image>
			</view>
		</uni-nav-bar>
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="topicSwiperList" height="530" @click="swiperClick"></u-swiper>
		</view>
		<view class="p-2">
			<view class="flex mb-1">
				<view class="mr-2 viewContainer position-relative" v-if="cover[0]" @click="goto(cover[0].topicType)">
					<image :src="getImgBase + cover[0].coverImg" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[0].tagEn}}</text>
					<text class="textTag2">{{cover[0].tag}}</text>
					<view v-if="cover[0].sign == 1" class="bg-main rounded-circle shadow position-absolute"
						style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
				</view>
				<view class="viewContainer position-relative" v-if="cover[1]" @click="goto(cover[1].topicType)">
					<image :src="getImgBase + cover[1].coverImg" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[1].tagEn}}</text>
					<text class="textTag2">{{cover[1].tag}}</text>
					<view v-if="cover[1].sign == 1" class="bg-main rounded-circle shadow position-absolute"
						style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
				</view>
			</view>
			<view class="flex">
				<view class="mr-2 viewContainer position-relative" v-if="cover[2]" @click="goto(cover[2].topicType)">
					<image :src="getImgBase + cover[2].coverImg" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[2].tagEn}}</text>
					<text class="textTag2">{{cover[2].tag}}</text>
					<view v-if="cover[2].sign == 1" class="bg-main rounded-circle shadow position-absolute"
						style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
				</view>
				<view class="viewContainer position-relative" v-if="cover[3]" @click="goto(cover[3].topicType)">
					<image :src="getImgBase + cover[3].coverImg" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[3].tagEn}}</text>
					<text class="textTag2">{{cover[3].tag}}</text>
					<view v-if="cover[3].sign == 1" class="bg-main rounded-circle shadow position-absolute"
						style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
				</view>
			</view>
		</view>
		<view class="fixed-bottom-right" @click="toAddPlay">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main"
				style="font-size: 80rpx;"></text>
		</view>
		<u-modal v-model="authModal.show" title=" " width="550" :show-confirm-button="false"
			:show-cancel-button="false">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
					</image>
				</view>
				<view class="flex align-center justify-center">
					<text class="font-md">授权登录后 </text>
				</view>
				<view class="flex align-center justify-center mt-1">
					<text class="font">做自然生活合伙人</text>
				</view>
				<view class="flex align-center justify-center">
					<text class="font">共创自然而然的生活</text>
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
		<u-modal v-model="advModal.show" :title="advModal.title" width="650" :show-confirm-button="true"
			:show-cancel-button="true" mask-close-able>
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
					</image>
				</view>
				<view class="flex align-center justify-center mt-1">
					<text class="font">{{advModal.remark}}</text>
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
				cover: [],
				topicSwiperList: [],
				authModal: {
					show: false
				},
				advModal: {
					show: false,
					title: '',
					remark: '',
				},
				loadShow: false
			}
		},
		onShareAppMessage: function() {

		},
		onPullDownRefresh: function() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		onLoad(option) {
			this.init()
			if (option.isshare == 1) {
				if (option.sharePage == 'detail') {
					setTimeout(function() {
						uni.navigateTo({
							url: `../detail/detail?id=${option.id}`
						})
					}, 2000)
				} else if (option.sharePage == 'playDetail') {
					setTimeout(function() {
						uni.navigateTo({
							url: `../play-detail/play-detail?id=${option.id}`
						})
					}, 2000)
				} else if (option.sharePage == 'activityDetail') {
					setTimeout(function() {
						uni.navigateTo({
							url: `../activity-detail/detail?id=${option.id}`
						})
					}, 2000)
				} else if (option.sharePage == 'placeDetail') {
					setTimeout(function() {
						uni.navigateTo({
							url: `../place-detail/place-detail?id=${option.id}`
						})
					}, 2000)
				}
			}
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			init() {
				this.login().then(res => {
					if (this.getNeedAuth) {
						this.authModal.show = true
					}
					this.$u.api.getTopicCover().then(res => {
						this.cover = res.data
					})
					this.$u.api.getTopicSwiper().then(res => {
						this.topicSwiperList = res.data.map((item, index) => {
							item.image = this.getImgBase + item.image
							return item
						})
					})
				})
			},
			goto(type) {
				uni.navigateTo({
					url: `../play-index/play-index?type=${type}`
				})
			},
			swiperClick(index) {
				if (this.topicSwiperList[index].topicType == 0) {
					uni.navigateTo({
						url: `../play-detail/play-detail?id=${this.topicSwiperList[index].topicId}`
					})
				}else if(this.topicSwiperList[index].topicType == 1){
					this.advModal = {
						show: true,
						title: this.topicSwiperList[index].title,
						remark: this.topicSwiperList[index].remark
					}
				}
			},
			toAddPlay() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.navigateTo({
					url: `../add-play/add-play`
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
		}
	}
</script>

<style>
	.viewContainer {
		position: relative;
	}

	.textTag1 {
		color: #fff;
		font-size: 35rpx;
		position: absolute;
		left: 20rpx;
		top: 130rpx;
		font-weight: 600;
	}

	.textTag2 {
		color: #fff;
		font-size: 35rpx;
		position: absolute;
		left: 150rpx;
		bottom: 120rpx;
		font-weight: 600;
	}
</style>
