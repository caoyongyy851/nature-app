<template>
	<view class="px-2">
		<view class="mb-5" v-for="(item, index) in placeList" :key="index">
			<view class="" @click="toPlaceDetal(item)">
				<view class="swiperContainer mb-2">
					<swiper :autoplay="false" :duration="1000" style="width: 100%; height: 500rpx;">
						<swiper-item v-if="item.videoList.length > 0" v-for="(item1, index1) in item.videoList" :key="index1">
							<video :src="getImgBase + item1"
								autoplay="true" muted="true" loop="true" object-fit="fill"
								:show-play-btn="false" :show-fullscreen-btn="false"
								style="width: 100%; height: 500rpx;" class="rounded-top-1">
							</video>
						</swiper-item>
						<swiper-item v-for="(item1, index1) in item.imageList" :key="index1">
							<image :src="getImgBase + item1" mode="aspectFill"
								style="width: 100%; height: 500rpx;" class="rounded" lazy-load="true">
							</image>
						</swiper-item>
					</swiper>
					<view class="imageCount flex align-center justify-center">{{item.videoList?item.videoList.length : 0 + item.imageList.length}}图
					</view>
				</view>
			</view>
			<view class="pt-2">
				<text class="font-md text-muted">{{item.name}}</text>
			</view>
			<view class="pt-2 flex align-center justify-between">
				<view class="flex align-center">
					<view class=" font-sm  text-secondary mr-2 py-1 px-2 rounded-1" style="background-color: rgba(0, 0, 0, 0.05);" v-for="(item1, index1) in item.labelList" :key="index1">
						{{item1}}
					</view>
				</view>
				<view class="flex align-center" style="background-color: #f0fcff;">
					<view class=" px-2 py-1 rounded">
						<u-icon name="attach" color="#00c6ff" size="30"></u-icon>
						<text style="color: #00c6ff;">{{item.bugs}}人预定</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		props: {
			placeList: Array
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			open(item) {
				uni.navigateTo({
					url: `/pages/place-detail/place-detail?id=${item.id}`
				})
			},
			toPlaceDetal(item) {
				uni.navigateTo({
					url: `/pages/place-detail/place-detail?id=${item.id}`
				})
			}
		}
	}
</script>

<style>
	.swiperContainer {
		position: relative;
	}
	
	.imageCount {
		width: 120rpx;
		height: 60rpx;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 40rpx;
		color: #fff;
		font-size: 30rpx;
		position: absolute;
		/* right: 20rpx; */
		left: 20rpx;
		bottom: 30rpx;
	}
</style>
