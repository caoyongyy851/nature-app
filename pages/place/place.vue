<template>
	<view class="">
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="imgList" height="300" @click="swiperClick"></u-swiper>
		</view>
		<!-- <divider></divider> -->
		<!-- 推荐玩场 -->
		<view class="px-2 pb-2 font-md">
			推荐活动
		</view>
		<view class="px-1">
			<scroll-view scroll-y="true" style="height: 500rpx;" @scrolltolower="nextPage()">
				<view class="item_wrap" v-for="(item,index) in activityList" :key="index">
					<view class="card" @click="activityClick(item.id)">
						<view class="top">
							<text>{{item.title}}</text>
						</view>
						<view class="middle">
							<view class="left">
								<image :src="getImgBase + item.img" mode="aspectFill"></image>
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
									<u-icon name="heart" color="#FF6666"></u-icon>
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
		<place-list :placeList="placeList"></place-list>
		
		<view class="fixed-bottom-right" @click="toAddActivity">
			<text class="text-white iconfont icon-zengjia rounded-circle bg-main" style="font-size: 80rpx;"></text>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import hotCate from '@/components/place/hot-cate.vue'
	import placeList from '@/components/place/place-list.vue'
	export default {
		components: {
			hotCate,
			placeList,

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
				placeList: []
			}
		},
		onLoad() {
			this.init()
		},
	
		methods: {
			init() {
				this.$u.api.getSwiperActivity().then(res => {
					this.imgList = res.data.map(item => {
						return {
							id: item.id,
							image: this.getImgBase + item.img.split(",")[0]
						}
					})
					console.log(JSON.stringify(this.imglist))
				});
				this.$u.api.getActivityList(this.queryParams).then(res => {
					this.activityList = res.data.map(item => {
						item.label = item.label.split(",")
						item.img = item.img.split(",")[0]
						return item
					});
				})
				this.$u.api.getReferPlaceList(this.placeQueryParams).then(res => {
					this.placeList = res.data
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
				uni.navigateTo({
					url:'../add-activity/add-activity'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.card {
		width: 700rpx;
		height: 220rpx;
		display: flex;
		flex-direction: column;
		margin: 20rpx auto;

		.top {
			text {
				font-size: 30rpx;
				font-weight: 300;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				margin: 10rpx 10rpx;
			}
		}

		.middle {
			display: flex;
			height: 120rpx;

			.left {
				image {
					width: 150rpx;
					height: 120rpx;
					margin: 0 20rpx 10rpx 10rpx;
					border-radius: 10rpx;

				}
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.content {
					text {
						font-weight: 300;
						font-size: 25rpx;
						color: #6c757d;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
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
