<template>
	<view >
		<view class="p-3 flex flex-column" style="background-size: 750rpx; background-repeat:no-repeat; background-color: #f7f7f7;" :style="'background-image: url('+ userInfo.avatar +')'">
			<view class="">
				<u-avatar :src="userInfo.avatar" :size="100" :show-sex="true"
					:sexIcon="userInfo.sex == 1?'man':'woman'">
				</u-avatar>
			</view>
			<view class="pt-3">
				<text class="text-white font-lg">{{userInfo.nickname}}</text>
			</view>
			<view class="pt-2">
				<text class="text-white font-sm mr-2">{{userInfo.age}}岁</text>
				<text class="text-white font-sm">|</text>
				<text class="text-white font-sm ml-2">{{userInfo.city?userInfo.city:'城市未知'}}</text>
			</view>
			<view class="pt-2 flex align-center">
				<view class="mr-2 border p-1 rounded-circle flex align-center">
					<text class="text-white font-sm mr-1">{{userInfo.cards}}</text>
					<text class="text-white font-sm">帖子</text>
				</view>
				<view class="mr-2 border p-1 rounded-circle flex align-center">
					<text class="text-white font-sm mr-1">{{userInfo.follows}}</text>
					<text class="text-white font-sm">关注</text>
				</view>
				<view class="mr-2 border p-1 rounded-circle flex align-center">
					<text class="text-white font-sm mr-1">{{userInfo.fans}}</text>
					<text class="text-white font-sm">粉丝</text>
				</view>
			</view>
			<view class="pt-2">
				<text class="text-white font">{{userInfo.sign ? userInfo.sign : '玩主还没有填写个人简介哦~'}}</text>
			</view>
			<view class="pt-2">
				<text class="text-white mr-1">{{userInfo.createTime}}</text>
				<text class="text-white">加入自然玩主~</text>
			</view>
		</view>
		<view class="p-3">
			<u-section title="TA的帖子" :right="false" color="#8aa167" font-size="32"></u-section>
		</view>
		<view class="">
			<!-- <u-tabs active-color="#8aa167" :list="tabsList" :is-scroll="false" :current="current" tabsChange="change"></u-tabs> -->
			<view class="mb-5" v-for="(item, index) in cardList" :key="index">
				<view class="" @click="toCard(item)">
					<view class="swiperContainer mb-2">
						<swiper :autoplay="false" :duration="1000" style="width: 750rpx; height: 650rpx;">
							<swiper-item v-for="(item1, index1) in item.imgList" :key="index1">
								<image :src="getImgBase + item1" mode="aspectFill"
									style="width: 750rpx; height: 650rpx;">
								</image>
							</swiper-item>
						</swiper>
						<view class="imageCount flex align-center justify-center">{{item.imgList.length}} 图</view>
					</view>
				</view>
				<view class="px-3 flex flex-row-reverse">
					<text class="iconfont icon-xihuan1 font-lg"></text>
				</view>
				<view class="px-3 pb-1">
					<text class="font-md">{{item.title}}</text>
				</view>
				<view class="px-3">
					<text class="fonte">{{item.detail}}</text>
				</view>
			</view>
			<view v-if="isBottom">
				<u-loadmore :status="loadStatus" :load-text="loadText" />
			</view>
		</view>
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
				uid: null,
				userInfo: {},
				cardList: [],
				queryParams: {
					pageNum: 1,
					pageSize: 6
				},
				tabsList: [{
					name: '帖子'
				}],
				current: 0,
				isBottom: false,
				loadText: {
					nomore: "没有更多了"
				},
				loadStatus: 'nomore'
				
			}
		},
		onLoad(e) {
			this.uid = e.uid
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onReachBottom() {
			this.nextPage()
		},
		methods: {
			init() {
				this.$u.api.getUserSpace({
					uid: this.uid
				}).then(res => {
					this.userInfo = res.data
				})
				this.$u.api.getCardListByUid({
					uid: this.uid,
					pageNum: this.queryParams.pageNum,
					pageSize: this.queryParams.pageSize
				}).then(res => {
					this.cardList = res.data
				})
			},
			nextPage() {
				if (!this.isBottom) {
					this.queryParams.pageNum++;
					let newCardList;
					this.$u.api.getCardListByUid({
					uid: this.uid,
					pageNum: this.queryParams.pageNum,
					pageSize: this.queryParams.pageSize
				}).then(res => {
						if (res.data.length != 0) {
							newCardList = res.data;
							this.cardList = [...this.cardList, ...newCardList]
						} else {
							this.isBottom = true
						}
					})
				}
			},
			toCard(item){
				uni.navigateTo({
					url:`../detail/detail?id=${item.id}`
				})
			}
			// tabsChange(index) {
			// 	this.current = index;
			// }
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
