<template>
	<view>
		<u-toast ref="uToast" />
		<uni-nav-bar fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.jpg" mode="aspectFill" lazy-load="true" style="width: 120rpx; height: 120rpx;"></image>
			</view>
			<view slot="default" class="flex align-center mt-3" style="margin-left: 350rpx;">
				<uni-icons type="search" size="20"></uni-icons>
			</view>
		</uni-nav-bar>
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="topicSwiperList" height="300" @click="swiperClick"></u-swiper>
		</view>
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation
			class="scroll-row border-bottom border-light-secondary " style="height: 100rpx;">
			<view class="flex align-center justify-center">
				<view class="scroll-row-item px-5 py-2 font-md" lazy-load="true" v-for="(item, index) in tabBars" :key="index"
					:id="'tab'+index" :class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''"
					@click="changeTab(index)">
					{{item.name}}
				</view>
			</view>

		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height: ' + scrollH +'px'" @change="onChangeTab">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view :style="'height: ' + scrollH +'px'" scroll-y="true" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<view class="flex align-center flex-wrap w-100 p-1" style="">
							<view class="m-1 rounded-1 shadow-sm"
								style="width: 47.26%; height: 700rpx; background-color: #ffffff;"
								v-for="(item2, index2) in item.list" :key="index2">
								<view class="swiperContainer flex-1 flex-column flex align-center justify-center"
									@click="openDetail(item2)">
									<video v-if="item2.vidList.length > 0" :src="getImgBase + item2.vidList[0]"
										autoplay="true" muted="true" loop="true" object-fit="contain"
										:show-play-btn="false" :show-fullscreen-btn="false"
										style="width: 100%; height: 420rpx;" class="rounded-top-1">
									</video>
									<image v-else :src="getImgBase + item2.imgList[0]" mode="aspectFill"
										style="width: 100%; height: 420rpx;" class="rounded-top-1" lazy-load="true">
									</image>

									<view class="imageCount flex align-center justify-center">
										{{item2.imgsNum+item2.vidsNum}}图
									</view>
								</view>

								<view class="flex flex-column justify-start px-2">
									<view class="mt-2">
										<!-- <text class="font-sm iconfont icon-huati mr-1"></text> -->
										<text v-if="item2.topicTitle" class="font text-main"
											style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;"><text
												class="font iconfont icon-huati"></text>{{item2.topicTitle}}<text
												class="font iconfont icon-huati"></text> </text>
										<text v-else class="font text-dark"
											style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item2.title}}</text>
									</view>
									<view class="mt-1 font-sm text-muted font-weight-light"
										style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical; height: 100rpx;">
										{{item2.detail}}
									</view>

									<view class="mt-2 mb-4 flex align-center justify-between">
										<view class="flex align-center justify-center" @click="openSpace(item2.uid)">
											<!-- 头像 -->
											<image :src="item2.avatar" class="rounded-circle mr-1"
												style="width: 55rpx;height: 55rpx;" lazy-load="true">
											</image>

											<!-- 昵称 | 发布时间 -->
											<view class="flex flex-column">
												<text class="font-sm"
													style="width:117rpx;text-overflow :ellipsis;white-space :nowrap;overflow : hidden;">
													{{item2.nickname}}
												</text>
												<text class="font-small text-light-muted">{{item2.time}}</text>
											</view>
										</view>
										<!-- 喜欢 -->
										<view class="flex alianimated faster" hover-class="bounceIn">
											<u-icon size="30" name="/static/nature/watered.png"></u-icon>
											<text class="font">{{item2.likes}}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
		<view class="fixed-bottom-right" @click="toAddCard">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main"
				style="font-size: 80rpx;"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import loadMore from '@/components/common/load-more.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			loadMore,
			uniNavBar
		},
		data() {
			return {
				scrollH: 600,
				scrollInto: "",
				tabIndex: 0,
				tabBars: [{
						name: "推荐"
					},
					{
						name: "关注"
					}
				],
				newsList: [],
				queryParams: {
					pageNum: 1,
					pageSize: 6
				},
				queryGzParams: {
					pageNum: 1,
					pageSize: 6
				},
				topicSwiperList: []
			}
		},
		// 监听原生导航栏按钮事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add-input/add-input'
			})
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
			// 根据选项获取列表
			this.init()
		},
		onShow() {},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			// 获取数据
			async init() {
				await this.login()
				let arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj
					if (i == 0) {
						// 推荐
						await this.$u.api.getCardList({
							pageNum: 1,
							pageSize: 6
						}).then(res => {
							obj = {
								loadmore: "上拉加载更多",
								list: res.data
							}
						})
					} else if (i == 1) {
						// 关注
						await this.$u.api.getCardGuanzhuList({
							pageNum: 1,
							pageSize: 6
						}).then(res => {
							obj = {
								loadmore: "上拉加载更多",
								list: res.data
							}
						})
					}
					arr.push(obj)
				}
				this.newsList = arr

				this.$u.api.getTopicSwiper().then(res => {
					this.topicSwiperList = res.data.map((item, index) => {
						item.image = this.getImgBase + item.image
						return item
					})
				})
			},
			// 滑动监听
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 切换选项
			changeTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				this.scrollInto = 'tab' + index
			},

			// 打开详情
			openDetail(item) {
				uni.navigateTo({
					url: `../detail/detail?id=${item.id}`
				})
			},
			// 喜欢
			toLike(item) {
				if (this.getIsLogin) {
					if (item.toLike) {
						// 取消喜欢
						// 喜欢
						this.$u.api.cardToLike({
							cid: item.id
						}).then(res => {
							if (res.code === 200) {
								item.toLike = false
								item.likes--
							}
						})
					} else {
						// 喜欢
						this.$u.api.cardToLike({
							cid: item.id
						}).then(res => {
							if (res.code === 200) {
								item.toLike = true
								item.likes++
							}
						})
					}
				}
			},
			// 上拉加载更多
			loadmore(index) {
				let item = this.newsList[index]
				if (item.loadmore === '没有更多了...') {
					return
				}
				item.loadmore = '加载中...'
				//请求帖子api
				if (index === 0) {
					//推荐
					this.queryParams.pageNum++
					this.$u.api.getCardList(this.queryParams).then(res => {
						if (res.data.length != 0) {
							item.list = [...item.list, ...res.data]
							item.loadmore = '上拉加载更多'
						} else {
							item.loadmore = '没有更多了...'
						}
					})
				} else {
					//关注
					this.queryGzParams.pageNum++
					this.$u.api.getCardGuanzhuList(this.queryGzParams).then(res => {
						if (res.data.length != 0) {
							item.list = [...item.list, ...res.data]
							item.loadmore = '上拉加载更多'
						} else {
							item.loadmore = '没有更多了...'
						}
					})
				}

				// setTimeout(() => {

				// 	item.list = [...item.list, ...item.list]
				// 	item.loadmore = '上拉加载更多'
				// }, 1000)
			},
			//写贴子
			toAddCard() {
				if (this.getNeedAuth) {
					this.authUserInfo()
					return
				}
				uni.navigateTo({
					url: '../add-card/add-card'
				})
			},
			// 到个人中心
			openSpace(uid) {
				uni.navigateTo({
					url: `../user-space/user-space?uid=${uid}`
				})
			},
			swiperClick(index) {
				let id = this.topicSwiperList[index].id
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${id}`
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}

	.swiperContainer {
		position: relative;
	}

	.imageCount {
		width: 70rpx;
		height: 40rpx;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 40rpx;
		color: #fff;
		font-size: 25rpx;
		position: absolute;
		right: 10rpx;
		bottom: 10rpx;
	}
</style>
