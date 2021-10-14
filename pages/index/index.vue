<template>
	<view>
		<u-toast ref="uToast" />
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation
			class="scroll-row border-bottom border-light-secondary" style="height: 100rpx;">
			<view class="scroll-row-item px-5 py-2 font-md" v-for="(item, index) in tabBars" :key="index"
				:id="'tab'+index" :class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''"
				@click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height: ' + scrollH +'px'" @change="onChangeTab">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view :style="'height: ' + scrollH +'px'" scroll-y="true" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<view class="flex align-center flex-wrap w-100 p-1" style="background-color: #f7f7f7;">
							<view class="m-1 rounded-1 shadow-sm" style="width: 47.26%; background-color: #ffffff;"
								v-for="(item2, index2) in item.list" :key="index2">
								<view class="swiperContainer flex-1 flex-column flex align-center justify-center"
									@click="openDetail(item2)">
									<image :src="getImgBase + item2.imgList[0]" mode="aspectFill"
										style="width: 100%; height: 420rpx;" class="rounded-top-1">
									</image>
									<view class="imageCount flex align-center justify-center">{{item2.imgsNum}}图</view>
								</view>

								<view class="flex flex-column justify-start px-2">
									<view class="mt-2">
										<text class="font-sm iconfont icon-dizhi mr-1"></text>
										<text class="font text-dark">{{item2.position}}</text>
									</view>
									<view class="mt-1 font-sm text-muted font-weight-light"
										style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
										{{item2.detail}}
									</view>

									<view class="mt-2 mb-4 flex align-center justify-between">
										<view class="flex align-center justify-center">
											<!-- 头像 -->
											<image :src="item2.avatar" class="rounded-circle mr-1" @click="openSpace"
												style="width: 55rpx;height: 55rpx;" lazy-load>
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
										<view class="animated faster" hover-class="bounceIn" @click="toLike(item2)">
											<text class="font iconfont icon-xihuan1 font-weight-bold"
												:class="item2.toLike ? 'text-danger' : 'text-dark'"></text>
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
			<text class="text-white iconfont icon-zengjia rounded-circle bg-main" style="font-size: 80rpx;"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			loadMore
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
				}
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
						await this.$u.api.getCardList(this.queryParams).then(res => {
							obj = {
								loadmore: "上拉加载更多",
								list: res.data
							}
						})
					} else if (i == 1) {
						// 关注
						await this.$u.api.getCardGuanzhuList(this.queryGzParams).then(res => {
							obj = {
								loadmore: "上拉加载更多",
								list: res.data
							}
						})
					}
					arr.push(obj)
				}
				this.newsList = arr
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
				uni.navigateTo({
					url:'../add-card/add-card'
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
