<template>
	<view>
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" :fixed="true">
			<view slot="left" class="flex align-center mt-4" @click="toIndex">
				<image src="/static/logo.jpg" mode="aspectFill" style="width: 150rpx; height: 120rpx;"></image>
			</view>
		</uni-nav-bar>
		<u-toast ref="uToast" />
		<view style="background-size: 750rpx; background-repeat:no-repeat; background-color: #0E151D;"
			:style="'background-image: url('+ getImgBase + topic.cover +')'">
			<view class="flex flex-column align-center justify-center text-white pt-20">
				<view class="font-lg">
					{{topic.title}}
				</view>
				<view class="font-md px-3 py-1 rounded-circle my-5 btn-main text-main" @click="follow">
					{{isFollow ? '已关注':'关注'}}
				</view>
			</view>
			<view class="px-5 pt-5 flex align-center justify-between">
				<view class="flex align-center" @click="openSpace(topic.uid)">
					<u-avatar :src="topic.avatar" :size="50">
					</u-avatar>
					<view class="text-white ml-1 font-sm">
						发起人 | {{topic.companyName ? topic.companyName : topic.nickname}}
					</view>
				</view>
				<view class="font-sm text-white" @click="toUserList()">
					已有{{topic.joinNum}}人参与<text class="iconfont icon-jinru font-sm"></text>
				</view>
			</view>
			<view class="mx-4 mt-4 p-2 rounded-1 font bg-white text-muted">
				<u-read-more :toggle="true" show-height="400" color="#fd5f40">
					<view class="font-md font-weight-bolder text-main">
						{{topic.title}}
					</view>
					<rich-text selectable="true" preview="true">
						<view class="flex align-center justify-center" style="width: 520rpx;">
							<text class="font text-muted" space="nbsp" user-select="true" style="line-height: 1.8;">
								{{topic.detail}}
							</text>
						</view>
						<view class="flex align-center justify-center my-2" v-if="topic.imageList.length > 0"
							v-for="(item, index) in topic.imageList" :key="index">
							<image :src="getImgBase + item" mode="aspectFill" style="width: 500rpx; height: 400rpx;"
								lazy-load="true">
							</image>
						</view>
					</rich-text>
				</u-read-more>
			</view>
			<view class="mt-5 bg-white" style="padding-bottom: 70rpx;">
				<view class="mb-5">
					<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#021d49"
						inactive-color="#dcdcdc" font-size="30"></u-tabs>
				</view>
				<view v-if="current == 0" class="mb-5 px-5" v-for="(item, index) in hotCardList" :key="index">
					<view class="flex align-center justify-between pb-3 position-relative">
						<view class="flex align-center ">
							<view class="flex align-center mr-3" @click="openSpace(item.uid)">
								<u-avatar :src="item.avatar" :size="70">
								</u-avatar>
							</view>
							<view class="flex-1 flex flex-column">
								<view class="font" style="padding-bottom: 5rpx;">
									{{item.nickname}}
								</view>
								<view class="font-sm text-muted" v-if="item.sign">
									{{item.sign}}
								</view>
								<view class="font-sm text-muted" v-else>
									玩主还没填写个人简介~
								</view>
							</view>
						</view>
						<view v-if="item.sn == 1" class="bg-main rounded-circle shadow position-absolute"
							style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
					</view>
					<view class="" @click="toCard(item)">
						<view class="swiperContainer mb-2">
							<swiper :autoplay="false" :duration="1000" style="width: 100%; height: 400rpx;">
								<swiper-item v-if="item.vidList.length > 0" v-for="(item1, index1) in item.vidList"
									:key="index1">
									<video :src="getImgBase + item1" autoplay="true" muted="true" loop="true"
										object-fit="fill" :show-play-btn="false" :show-fullscreen-btn="false"
										style="width: 100%; height: 400rpx;" class="rounded-top-1">
									</video>
								</swiper-item>
								<swiper-item v-for="(item1, index1) in item.imgList" :key="index1">
									<image :src="getImgBase + item1" mode="aspectFill"
										style="width: 100%; height: 400rpx;" class="rounded" lazy-load="true">
									</image>
								</swiper-item>
							</swiper>
							<view class="imageCount flex align-center justify-center">{{item.imgsNum + item.vidsNum}}图
							</view>
						</view>
					</view>
					<view class="pt-2" @click="toCard(item)">
						<text class="font text-muted" space="nbsp"  style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;overflow: hidden;">{{item.detail}}</text>
					</view>
					<view class="pt-2 flex align-center justify-between">
						<view class="">
							<text class="iconfont icon-pinglun2 font mr-5">{{item.comments}}</text>
							<u-icon size="28" name="/static/nature/watered.png"></u-icon>{{item.likes}}
						</view>
						<view class="px-2 py-1 rounded" style="background-color: #f0fcff;">
							<text class="iconfont icon-huati pr-1 font" style="color: #00c6ff;"></text>
							<text style="color: #00c6ff;">{{item.topicTitle}}</text>
						</view>
					</view>
				</view>
				<view v-if="current == 1" class="mb-5 px-5" v-for="(item, index) in newCardList" :key="index">
					<view class="flex align-center justify-between pb-3 position-relative">
						<view class="flex align-center">
							<view class="flex align-center mr-3" @click="openSpace(item.uid)">
								<u-avatar :src="item.avatar" :size="70">
								</u-avatar>
							</view>
							<view class="flex-1 flex flex-column">
								<view class="font" style="padding-bottom: 5rpx;">
									{{item.nickname}}
								</view>
								<view class="font-sm text-muted" v-if="item.sign">
									{{item.sign}}
								</view>
								<view class="font-sm text-muted" v-else>
									玩主还没填写个人简介~
								</view>
							</view>
						</view>
						<view v-if="item.sn == 1" class="bg-main rounded-circle shadow position-absolute"
							style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
					</view>
					<view class="" @click="toCard(item)">
						<view class="swiperContainer mb-2">
							<swiper :autoplay="false" :duration="1000" style="width: 100%; height: 400rpx;">
								<swiper-item v-if="item.vidList.length > 0" v-for="(item1, index1) in item.vidList"
									:key="index1">
									<video :src="getImgBase + item1" autoplay="true" muted="true" loop="true"
										object-fit="fill" :show-play-btn="false" :show-fullscreen-btn="false"
										style="width: 100%; height: 400rpx;" class="rounded-top-1">
									</video>
								</swiper-item>
								<swiper-item v-for="(item1, index1) in item.imgList" :key="index1">
									<image :src="getImgBase + item1" mode="aspectFill"
										style="width: 100%; height: 400rpx;" class="rounded" lazy-load="true">
									</image>
								</swiper-item>
							</swiper>
							<view class="imageCount flex align-center justify-center">{{item.imgsNum + item.vidsNum}}图
							</view>
						</view>
					</view>
					<view class="pt-2" @click="toCard(item)">
						<text class="font text-muted" space="nbsp" style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;overflow: hidden;">{{item.detail}}</text>
					</view>
					<view class="pt-2 flex align-center justify-between">
						<view class="">
							<text class="iconfont icon-pinglun2 font mr-5">{{item.comments}}</text>
							<u-icon size="28" name="/static/nature/watered.png"></u-icon>{{item.likes}}
						</view>
						<view class="px-2 py-1 rounded" style="background-color: #f0fcff;">
							<text class="iconfont icon-huati pr-1 font" style="color: #00c6ff;"></text>
							<text style="color: #00c6ff;">{{item.topicTitle}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 预定栏 -->
			<view class="flex align-center justify-around px-5 py-3 fixed-bottom shadow bg-white">
				<view class="">
					<button class="empty iconfont icon-bianji font animated faster" hover-class="bounceIn"
						@click="toAddCard">参与</button>
				</view>
				<view class="">
					|
				</view>
				<view class="flex align-center">
					<button class="empty iconfont icon-fenxiang font animated faster" hover-class="bounceIn"
						open-type="share">分享</button>
				</view>
			</view>
		</view>
		<u-modal v-model="authModal.show" title=" " width="550" :show-confirm-button="false"
			:show-cancel-button="false">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
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
				id: '',
				topic: {},
				list: [{
					name: '热门'
				}, {
					name: '最新'
				}],
				current: 0,
				queryHotParams: {
					pageNum: 1,
					pageSize: 6,
					isBottom: false
				},
				queryNewParams: {
					pageNum: 1,
					pageSize: 6,
					isBottom: false
				},
				hotCardList: [],
				newCardList: [],
				isFollow: false,
				authModal: {
					show: false
				},
			}
		},
		onLoad(e) {
			this.id = e.id
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onShareAppMessage() {
			return {
				title: this.topic.title,
				path: `/pages/play/play?isshare=1&sharePage=playDetail&id=${this.id}`,
				success: function(res) {},
				fail: function(res) {}
			}
		},
		onShareTimeline(){

		},
		onPullDownRefresh: function() {
			this.init();
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			init() {
				this.$u.api.getTopicDetailById({
					id: this.id
				}).then(res => {
					this.topic = res.data
				})
				this.$u.api.getTopicUserStatus({
					id: this.id
				}).then(res => {
					this.isFollow = res.data.topicStatus.isFollow
				})
				this.$u.api.getHotCardByTopicId({
					id: this.id,
					pageNum: this.queryHotParams.pageNum,
					pageSize: this.queryNewParams.pageSize
				}).then(res => {
					this.hotCardList = res.data
				})
				this.$u.api.getNewCardByTopicId({
					id: this.id,
					pageNum: this.queryHotParams.pageNum,
					pageSize: this.queryNewParams.pageSize
				}).then(res => {
					this.newCardList = res.data
				})
				if (!this.getIsLogin) {
					this.login()
				}
			},
			change(index) {
				this.current = index;
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			toCard(item) {
				uni.navigateTo({
					url: `../detail/detail?id=${item.id}`
				})
			},
			nextPage() {
				//热门
				if (this.current == 0) {
					if (!this.queryHotParams.isBottom) {
						this.queryHotParams.pageNum++;
						let newHotCardList;
						this.$u.api.getHotCardByTopicId({
							id: this.id,
							pageNum: this.queryHotParams.pageNum,
							pageSize: this.queryHotParams.pageSize
						}).then(res => {
							if (res.data.length != 0) {
								newHotCardList = res.data;
								this.hotCardList = [...this.hotCardList, ...newHotCardList]
							} else {
								this.queryHotParams.isBottom = true
							}
						})
					}
				} else {
					if (!this.queryNewParams.isBottom) {
						this.queryNewParams.pageNum++;
						let newNewCardList;
						this.$u.api.getNewCardByTopicId({
							id: this.id,
							pageNum: this.queryNewParams.pageNum,
							pageSize: this.queryNewParams.pageSize
						}).then(res => {
							if (res.data.length != 0) {
								newNewCardList = res.data;
								this.newCardList = [...this.newCardList, ...newNewCardList]
							} else {
								this.queryNewParams.isBottom = true
							}
						})
					}
				}

			},
			toAddCard() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.navigateTo({
					url: `../add-card/add-card?topicId=${this.topic.id}&title=${this.topic.title}`
				})
			},
			follow() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (this.isFollow) {
					// 取消关注
					this.$u.api.topicToFollow({
						topicId: this.topic.id
					}).then(res => {
						if (res.code === 200) {
							this.isFollow = false
						}
					})
				} else {
					// 关注
					this.$u.api.topicToFollow({
						topicId: this.topic.id
					}).then(res => {
						if (res.code === 200) {
							this.isFollow = true
							this.$refs.uToast.show({
								type: 'success',
								title: '感谢你的关注~'
							})
						}
					})
				}
			},
			toIndex() {
				uni.switchTab({
					url: '../play/play'
				})
			},
			// 到个人中心
			openSpace(uid) {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.navigateTo({
					url: `../user-space/user-space?uid=${uid}`
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
			//跳转头像列表
			toUserList() {
				uni.navigateTo({
					url: `../user-list/user-list?id=${this.id}&type=0`
				})
			}
		},
		onReachBottom() {
			this.nextPage()
		},


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

	button.empty::after {
		border: none
	}

	.empty.plain {
		border: none;
		border-color: transparent;
	}

	.empty.button-hover {
		background-color: transparent;
	}

	button.empty {
		line-height: 47rpx;
		background-color: transparent;
		/* padding-bottom: 20rpx; */
	}
</style>
