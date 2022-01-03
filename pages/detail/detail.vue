<template>
	<view>
		<!-- 轮播图 -->
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" :title="cardDetail.title" fixed="true">
			<view slot="left" class="flex align-center mt-4" @click="toIndex">
				<image src="/static/logo.png" mode="aspectFill" style="width: 200rpx; height: 150rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="swiperContainer mb-2">
			<swiper @change="swiperChange" :autoplay="false" :interval="3000" :duration="1000" class=""
				style="width: 750rpx; height: 562rpx;">
				<swiper-item v-for="(item, index) in cardDetail.vidsList" :key="index">
					<video :src="getImgBase + item" autoplay="true" loop="true" show-fullscreen-btn="false"
						style="width: 750rpx; height: 562rpx;"></video>
				</swiper-item>
				<swiper-item v-for="(item, index) in cardDetail.imgsList" :key="index">
					<image :src="getImgBase + item" mode="aspectFill" style="width: 750rpx; height: 562rpx;"
						lazy-load="true">
					</image>
				</swiper-item>
			</swiper>
			<view class="imageCount flex align-center justify-center">
				{{current+1}}/{{cardDetail.imgsNum+cardDetail.vidsNum}}
			</view>
		</view>
		<!-- 头像 | 关注-->
		<view class="flex align-center justify-between p-3 pt-2">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="cardDetail.avatar" class="rounded-circle mr-2" @click="openSpace(cardDetail.uid)"
					style="width: 65rpx;height: 65rpx;" lazy-load>
				</image>
				<!-- 昵称 | 发布时间 -->
				<view class="flex flex-column">
					<view class="font" style="line-height: 1.5;">
						{{cardDetail.nickname}}
					</view>
					<text class="font-small text-light-muted" style="line-height: 1.5;">{{cardDetail.createTime}}</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view @click="follow" v-if="true"
				class="px-3 py-1 flex text-white align-center justify-center btn-main rounded-circle animated faster"
				hover-class="bounceIn">
				{{isFollow ? '已关注':'关注'}}
			</view>
		</view>
		<!-- 地点 | 举报 -->
		<view class="flex align-center px-3" v-if="cardDetail.topicId != null" @click="toTopic">
			<view class="rounded-circle px-2 py-1 animated faster text-main" style="background-color: #f3fbfd;"
				hover-class="bounceIn">
				<text class="font-sm iconfont icon-huati mr-1"></text>
				<text class="font-sm">{{cardDetail.topicTitle}}</text>
			</view>
		</view>

		<!-- 内容区域 -->
		<view class="px-3 py-4">
			<text class="font text-muted" space="nbsp" user-select="true" style="line-height: 1.8;">
				{{cardDetail.detail}}
			</text>
			<view class="pt-3 animated faster" hover-class="bounceIn" v-if="cardDetail.position">
				<text class="font-sm  text-light-muted iconfont icon-dizhi mr-1"></text>
				<text class="font-sm text-light-muted">{{cardDetail.position}}</text>
			</view>
		</view>
		<!-- 发布时间 -->
		<view class="px-3 pb-3">
			<text class="font" style="color: #bdbfc2;">拍摄于{{cardDetail.time}}</text>
		</view>
		<!-- 喜欢 -->
		<view class="flex align-center justify-between p-3">
			<view class="flex px-2 py-1 animated faster" hover-class="bounceIn" @click="toLike">
				<u-icon size="30" name="/static/nature/watered.png" v-if="isLike"></u-icon>
				<u-icon size="30" name="/static/nature/water.png" v-else></u-icon>
				<text class="font">{{cardDetail.likes}}</text>
			</view>

			<view class="flex align-center">
				<image v-for="(item, index) in cardDetail.avatarLikes" :key="index" :src="item" lazy-load="true"
					class="rounded-circle mr-1" mode="aspectFill" style="height: 55rpx; width: 55rpx;"></image>
			</view>

		</view>
		<view class="border-bottom mx-3" />
		<!-- 评论 -->
		<view class="p-3">
			<!-- 回复 -->
			<text class="font-lg">回复</text>
		</view>

		<!-- 评论区 -->
		<view class="mx-3 py-3 border-bottom" v-for="(item, index) in comments" :key="index">
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<image :src="item.avatar" mode="aspectFill" style="width: 70rpx; height: 70rpx;" lazy-load="true"
						class="rounded-circle"></image>
					<view class="ml-2">
						<text class="font">{{item.nickname}}</text>
					</view>
					<view class="ml-3">
						<text class="text-light-muted font-sm">{{item.createTime}}</text>
					</view>
				</view>
				<view class="flex align-center">
					<view class="animated faster" hover-class="bounceIn" @click="commentAppreciate(item)">
						<text class="iconfont font icon-dianzan2 mr-3"
							:class="item.isZan ? 'text-danger' : 'text-muted'"></text>
					</view>
					<view class="animated faster" hover-class="bounceIn">
						<text class="iconfont font icon-guanyuwomen mr-3"></text>
					</view>
				</view>
			</view>
			<view class="font text-muted" style="margin-left: 105rpx;">
				<text>{{item.content}}</text>
			</view>
		</view>
		<view class="p-3 flex align-center justify-center" @click="commentsDetail">
			<text class="font text-primary">查看全部{{cardDetail.comments}}条回复</text>
		</view>
		<divider></divider>
		<!-- 底部操作栏 -->
		<!-- 占位 -->
		<view class="" style="height: 40px;">
		</view>

		<view class="fixed-bottom shadow bg-white">
			<view class="flex align-center justify-around px-5 py-3">
				<view class="flex align-center">

					<button class="empty font animated faster" hover-class="bounceIn" @click="toLike">
						<u-icon size="28" name="/static/nature/watered.png" v-if="isLike"></u-icon>
						<u-icon size="28" name="/static/nature/water.png" v-else></u-icon>浇水
					</button>
				</view>
				<view class="">
					|
				</view>
				<view class="flex align-center">
					<button class="empty iconfont icon-bianji font animated faster" hover-class="bounceIn"
						@click="toggle">评论</button>
				</view>
				<view class="">
					|
				</view>
				<view class="flex align-center">
					<button class="empty iconfont icon-fenxiang font animated faster" hover-class="bounceIn"
						open-type="share">分享</button>
				</view>
			</view>
			<view>
				<uni-popup ref="popup" background-color="#fff" @change="popupChange">
					<view class="flex align-center justify-between px-2 py-3">
						<view class="flex-1">
							<input class="px-2 py-2 bg-light rounded-1" type="text" placeholder="快来写下你的评论吧"
								v-model="content" />
						</view>
						<view class="font-md text-primary px-3 animated faster" hover-class="bounceIn"
							@click="toComment">
							发送
						</view>
					</view>
				</uni-popup>
			</view>
		</view>
		<u-modal v-model="authModal.show" title=" " width="550" :show-confirm-button="false"
			:show-cancel-button="false">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.png" mode="aspectFill" style="width: 200rpx; height: 200rpx;">
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
		<!-- 底部操作栏 | 发表评论 -->
		<!-- <view class="flex align-center justify-between px-5 py-2 fixed-bottom shadow bg-white"> -->
		<!-- <view class="flex">
				<view class="flex align-center animated faster px-5 border-right" hover-class="bounceIn"
					@click="toggle">
					<text class="iconfont icon-pinglun2 font-lg mr-1 mr-1"></text>
					<text class="font">{{cardDetail.comments}}</text>
				</view>
				<view class="flex align-center animated faster px-5" hover-class="bounceIn" @click="toLike">
					<text class="iconfont font-lg mr-1"
						:class="isLike ? 'icon-xihuan text-danger' : 'icon-xihuan1'"></text>
					<text class="font">{{cardDetail.likes}}</text>
				</view>
			</view> -->
		<!-- 分享 -->
		<!-- <button
				class="flex align-center justify-center ml-5 bg-main rounded-circle text-white font-md animated faster"
				style="width: 160rpx; height: 75rpx;" open-type="share" hover-class="bounceIn">分享</button> -->
		<!-- 底部弹窗 -->
		<!-- <view>
				<uni-popup ref="popup" background-color="#fff" @change="popupChange">
					<view class="flex align-center justify-between px-2 py-3">
						<view class="flex-1">
							<input class="px-2 py-2 bg-light rounded-1" type="text" placeholder="快来写下你的评论吧"
								v-model="content" />
						</view>
						<view class="font-md text-primary px-3 animated faster" hover-class="bounceIn"
							@click="toComment">
							发送
						</view>
					</view>
				</uni-popup>
			</view> -->
	</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				id: '',
				cardDetail: {},
				comments: '',
				cardUserStatus: {},
				content: '',
				isLike: false,
				isFollow: false,
				imageList: ['/static/bgimg/3.jpg', '/static/demo/datapic/16.jpg'],
				current: 0,
				authModal: {
					show: false
				}
			}
		},
		components: {
			uniPopup,
			uniNavBar
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onLoad(options) {
			this.id = options.id
			this.init()
		},
	
		onShareAppMessage() {
			return {
				title: this.cardDetail.title,
				path: `/pages/play/play?isshare=1&sharePage=detail&id=${this.id}`,
				success: function(res) {
				},
				fail: function(res) {
				}
			}
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			init(data) {
				// 请求详情api
				this.$u.api.getCardDetailById({
					id: this.id
				}).then(res => {
					this.cardDetail = res.data;
					if (res.data.imgs) {
						this.cardDetail.imgsList = res.data.imgs.split(',')
					}
					if (res.data.vids) {
						this.cardDetail.vidsList = res.data.vids.split(',')
					}
				})
				//获取评论
				this.getComments()
				if (!this.getIsLogin) {
					this.login()
				}
			},
			//获取评论
			getComments() {
				//先获取用户的当前帖子状态
				this.$u.api.getCardUserStatus({
					id: this.id
				}).then(res => {
					this.cardUserStatus = res.data
					this.isFollow = res.data.cardStatus.isFollow
					this.isLike = res.data.cardStatus.isLike
					//获取评论
					this.$u.api.getCommentsByCid({
						cid: this.id
					}).then(res => {
						this.comments = res.data.map((item, index) => {
							item.isZan = this.cardUserStatus.commentStatus[index]
							return item
						})
					})
				})

			},
			// 监听swiper变化
			swiperChange(e) {
				this.current = e.detail.current
			},
			// 关注
			follow() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (this.isFollow) {
					// 取消关注
					this.$u.api.userToFollow({
						followUid: this.cardDetail.uid
					}).then(res => {
						if (res.code === 200) {
							this.isFollow = false
						}
					})
				} else {
					// 关注
					this.$u.api.userToFollow({
						followUid: this.cardDetail.uid
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
			// 写评论
			toComment() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (!this.content) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '评论不能为空哦~'
					})
					return
				}
				this.$u.api.toComment({
					cid: this.id,
					content: this.content
				}).then(res => {
					console.log("评论成功")
					if (res.msg == '评论成功') {
						this.content = ''
						this.cardDetail.comments++
						this.$refs.popup.close("bottom")
						this.getComments()
						this.$refs.uToast.show({
							type: 'success',
							title: '评论成功'
						})
					} else {
						this.$refs.uToast.show({
							type: 'error',
							title: '评论出错'
						})
					}
				})
			},
			toLike() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (this.isLike) {
					// 取消喜欢
					this.$u.api.cardToLike({
						cid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isLike = false
							this.cardDetail.likes--
							this.cardDetail.avatarLikes.splice(this.cardDetail.avatarLikes.findIndex(
								item =>
								item === this.getUserinfo.avatar), 1)
						}
					})
				} else {
					// 喜欢
					this.$u.api.cardToLike({
						cid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isLike = true
							this.cardDetail.likes++
							this.cardDetail.avatarLikes.push(this.getUserinfo.avatar)
							this.$refs.uToast.show({
								type: 'success',
								title: '谢谢你的喜欢~'
							})
						}
					})
				}
			},
			toggle() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open("bottom")
			},
			popupChange(e) {
				this.content = ''
			},
			//评论点赞
			commentAppreciate(e) {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (e.isZan) {
					// 取消点赞
					this.$u.api.commentAppreciateCancel({
						cid: e.id
					}).then(res => {
						if (res.code === 200) {
							e.isZan = false
						}
					})
				} else {
					// 点赞
					this.$u.api.commentAppreciate({
						cid: e.id
					}).then(res => {
						if (res.code === 200) {
							e.isZan = true
						}
					})
				}
			},
			//进入评论区
			commentsDetail() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				uni.navigateTo({
					url: `comments?id=${this.id}`
				})
			},
			toTopic() {
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${this.cardDetail.topicId}`
				})
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
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
		right: 20rpx;
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
