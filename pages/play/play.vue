<template>
	<view>
		<uni-nav-bar fixed="true">
			<view slot="left" class="flex align-center mt-4"><image src="/static/logo.png" lazy-load="true" mode="aspectFill" style="width: 120rpx; height: 120rpx;"></image></view>
		</uni-nav-bar>
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="topicSwiperList" height="300" @click="swiperClick"></u-swiper>
		</view>
		<view class="p-2">
			<view class="flex mb-1">
				<view class="mr-2 viewContainer" v-if="cover[0]" @click="goto(cover[0].type)">
					<image :src="getImgBase + cover[0].cover" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[0].typeName2}}</text>
					<text class="textTag2">{{cover[0].typeName1}}</text>
				</view>
				<view class="viewContainer" v-if="cover[1]"  @click="goto(cover[1].type)">
					<image :src="getImgBase + cover[1].cover" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
						<text class="textTag1">{{cover[1].typeName2}}</text>
						<text class="textTag2">{{cover[1].typeName1}}</text>
				</view>
			</view>
			<view class="flex">
				<view class="mr-2 viewContainer" v-if="cover[2]"  @click="goto(cover[2].type)">
					<image :src="getImgBase + cover[2].cover" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
					<text class="textTag1">{{cover[2].typeName2}}</text>
					<text class="textTag2">{{cover[2].typeName1}}</text>
				</view>
				<view class="viewContainer"  v-if="cover[3]" @click="goto(cover[3].type)">
					<image :src="getImgBase + cover[3].cover" lazy-load="true" class="rounded" mode="aspectFill"
						style="width: 345rpx; height: 345rpx;"></image>
						<text class="textTag1">{{cover[3].typeName2}}</text>
						<text class="textTag2">{{cover[3].typeName1}}</text>
				</view>
			</view>
		</view>
		<view class="fixed-bottom-right" @click="toAddPlay">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main" style="font-size: 80rpx;"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				cover:[],
				topicSwiperList: []
			}
		},
		onLoad() {
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			init(){
				this.$u.api.getCover().then(res => {
					this.cover = res.data
				})
				this.$u.api.getTopicSwiper().then(res => {
					this.topicSwiperList = res.data.map((item,index) => {
						item.image = this.getImgBase + item.image
						return item
					})
				})
			},
			goto(type) {
				uni.navigateTo({
					url: `../play-index/play-index?type=${type}`
				})
			},
			swiperClick(index){
				let id = this.topicSwiperList[index].id
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${id}`
				})
			},
			toAddPlay() {
				if (this.getNeedAuth) {
					this.authUserInfo()
					return
				}
				uni.navigateTo({
					url: `../add-play/add-play`
				})
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
