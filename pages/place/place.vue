<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.png" mode="aspectFill" style="width: 150rpx; height: 120rpx;" lazy-load="true">
				</image>
			</view>
		</uni-nav-bar>
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="imgList" height="530" @click="swiperClick"></u-swiper>
		</view>
		<!-- <divider></divider> -->
		<!-- 推荐玩场 -->
		<view class="px-2 pb-2 font-md">
			线下活动
		</view>
		<view class="px-1">
			<scroll-view scroll-y="true" style="height: 700rpx;" @scrolltolower="nextPage()">
				<view class="item_wrap" v-for="(item,index) in activityList" :key="index">
					<view class="card" @click="activityClick(item.id)">
						<view class="top">
							<text>{{item.title}}</text>
						</view>
						<view class="middle">
							<view class="left">
								<image :src="getImgBase + item.img" mode="aspectFill" lazy-load="true"></image>
							</view>
							<view class="right">
								<view class="content">
									<text>{{item.detail}}</text>
								</view>
								<view class="tags">
									<view v-for="(it,ind) in item.label" :key="ind">
										<view class="item">
											{{it}}
										</view>
									</view>
								</view>
							</view>
						</view>

						<view class="bottom">
							<view class="left">
								{{item.createTime}}
							</view>
							<view class="right">
								<view class="view">
									<u-icon name="eye" color="#99CCFF"></u-icon>
									<text>{{item.views}}</text>
								</view>
								<view class="zan">
									<u-icon size="25" name="/static/nature/watered.png"></u-icon>
									<text>{{item.likes}}</text>
								</view>
								<view class="comments">
									<u-icon name="more-circle" color="#99CC66"></u-icon>
									<text>{{item.comments}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<hot-cate></hot-cate>
		<!-- 玩场列表组件 -->
		<!-- <place-list :placeList="placeList"></place-list> -->
		<view class="px-2">
			<view class="mb-5" v-for="(item, index) in placeList" :key="index">
				<view class="" @click="toPlaceDetal(item)">
					<view class="swiperContainer mb-2">
						<swiper :autoplay="false" :duration="1000" style="width: 100%; height: 500rpx;">
							<swiper-item v-if="item.videoList.length > 0" v-for="(item1, index1) in item.videoList"
								:key="index1">
								<video :src="getImgBase + item1" autoplay="true" muted="true" loop="true"
									object-fit="fill" :show-play-btn="false" :show-fullscreen-btn="false"
									style="width: 100%; height: 500rpx;" class="rounded-top-1">
								</video>
							</swiper-item>
							<swiper-item v-for="(item1, index1) in item.imageList" :key="index1">
								<image :src="getImgBase + item1" mode="aspectFill" style="width: 100%; height: 500rpx;"
									class="rounded" lazy-load="true">
								</image>
							</swiper-item>
						</swiper>
						<!-- <view class="imageCount flex align-center justify-center">{{item.videoList?item.videoList.length : 0 + item.imageList.length}}图
						</view> -->
					</view>
				</view>
				<!-- <view class="pt-2">
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
				</view> -->
			</view>
		</view>
		<view class="fixed-bottom-right" @click="toAddActivity">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main"
				style="font-size: 80rpx;"></text>
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
	import hotCate from '@/components/place/hot-cate.vue'
	import placeList from '@/components/place/place-list.vue'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			hotCate,
			placeList,
			uniNavBar
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		data() {
			return {
				imgList: [],
				isBottom: false,
				queryParams: {
					pageNum: 1,
					pageSize: 10
				},
				placeQueryParams: {
					pageNum: 1,
					pageSize: 4
				},
				activityList: [],
				placeList: [],
				authModal: {
					show: false
				},
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			init() {
				this.$u.api.getSwiperActivity().then(res => {
					this.imgList = res.data.map(item => {
						return {
							id: item.id,
							image: this.getImgBase + item.img.split(",")[0]
						}
					})
				});
				this.$u.api.getActivityList({
					pageNum: 1,
					pageSize: 10
				}).then(res => {
					this.activityList = res.data.map(item => {
						item.label = item.label.split(",")
						item.img = item.img.split(",")[0]
						return item
					});
				})
				this.$u.api.getReferPlaceList(this.placeQueryParams).then(res => {
					this.placeList = res.data
				})
				this.login().then(res => {
					if (this.getNeedAuth) {
						this.authModal.show = true
					}
				})
			},
			nextPage() {
				if (!this.isBottom) {
					this.queryParams.pageNum++;
					let newActivityList;
					this.$u.api.getActivityList(this.queryParams).then(res => {
						if (res.data.length != 0) {
							newActivityList = res.data.map(item => {
								item.label = item.label.split(",")
								item.img = item.img.split(",")[0]
								return item
							})
							this.activityList = [...this.activityList, ...newActivityList]
						} else {
							this.isBottom = true
						}
					})
				}
			},
			activityClick(id) {
				console.log(id)
				uni.navigateTo({
					url: `../activity-detail/detail?id=${id}`
				})
			},
			//点击幻灯片
			swiperClick(e) {
				let selectId;
				selectId = this.imgList[e].id
				uni.navigateTo({
					url: `../activity-detail/detail?id=${selectId}`
				})
			},
			//创建活动
			toAddActivity() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.requestSubscribeMessage({
				  tmplIds: ['hH4D8B3ddf7b3d3o3VLHGCfwLdNajdiRNsN9NgACg0U'],
				  success (res) {
					  uni.navigateTo({
					  	url: '../add-activity/add-activity'
					  })
					  return
				  },
				  fail(res) {
					  return
				  }
				})
			},
			toPlaceDetal(item) {
				uni.navigateTo({
					url: `/pages/place-detail/place-detail?id=${item.id}`
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
			}
		}
	}
</script>

<style scoped lang="scss">
	// .swiperContainer {
	// 	position: relative;
	// }

	// .imageCount {
	// 	width: 120rpx;
	// 	height: 60rpx;
	// 	background-color: rgba(0, 0, 0, 0.3);
	// 	border-radius: 40rpx;
	// 	color: #fff;
	// 	font-size: 30rpx;
	// 	position: absolute;
	// 	/* right: 20rpx; */
	// 	left: 20rpx;
	// 	bottom: 30rpx;
	// }
	.card {
		width: 700rpx;
		height: 250rpx;
		display: flex;
		flex-direction: column;
		margin: 20rpx auto;

		.top {
			text {
				font-size: 32rpx;
				font-weight: 500;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				margin: 10rpx 10rpx;
			}
		}

		.middle {
			display: flex;
			height: 150rpx;

			.left {
				image {
					width: 150rpx;
					height: 150rpx;
					margin: 0 20rpx 10rpx 10rpx;
					border-radius: 8rpx;

				}
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.content {
					text {
						font-weight: 400;
						font-size: 25rpx;
						color: #6c757d;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
						overflow: hidden;
						line-height: 1.5;
					}
				}

				.tags {
					display: flex;
					width: 400rpx;
					white-space: nowrap;
					overflow: hidden;

					.item {
						margin-right: 20rpx;
						background-color: rgba($color: #000000, $alpha: 0.05);
						padding: 5rpx 10rpx;
						border-radius: 5rpx;
						font-size: 22rpx;

					}
				}
			}
		}

		.bottom {
			// flex: 1;
			display: flex;
			// background-color: rgba($color: #000000, $alpha: 0.5);
			height: 0rpx;
			align-items: center;
			justify-content: space-between;
			margin-top: 30rpx;

			.left {
				color: #6c757d;
				font-size: 25rpx;
				margin-left: 10rpx;
			}

			.right {
				flex: 1;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 0 40rpx;

				.view {
					text {
						font-size: 23rpx;
						margin-left: 8rpx;
					}
				}

				.zan {
					text {
						font-size: 23rpx;
						margin-left: 8rpx;
					}
				}

				.comments {
					text {
						font-size: 23rpx;
						margin-left: 8rpx;
					}
				}
			}
		}
	}
</style>
