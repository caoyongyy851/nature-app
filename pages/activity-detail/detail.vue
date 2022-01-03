<template>
	<view>
		<uni-nav-bar left-icon="back" :title="activityDetail.title" @clickLeft="clickLeft" :fixed="true">
			<view slot="left" class="flex align-center mt-4" @click="toIndex">
				<image src="/static/logo.png" mode="aspectFill" style="width: 150rpx; height: 120rpx;" lazy-load="true">
				</image>
			</view>
		</uni-nav-bar>
		<view class="mt-4"></view>
		<u-notice-bar mode="horizontal" :list="narList"></u-notice-bar>
		<!-- 轮播图 -->
		<u-toast ref="uToast" />
		<view class="swiperContainer mb-2">
			<swiper @change="swiperChange" :autoplay="false" :interval="3000" :duration="1000" class=""
				style="width: 750rpx; height: 750rpx;">
				<swiper-item v-for="(item, index) in activityDetail.imgsList" :key="index">
					<image :src="getImgBase + item" mode="aspectFill" style="width: 750rpx; height: 750rpx;"
						lazy-load="true">
					</image>
				</swiper-item>
			</swiper>
			<view class="imageCount flex align-center justify-center">{{current+1}}/{{activityDetail.imgsNum}}</view>
		</view>
		<!-- 头像 | 关注-->
		<view class="flex align-center justify-between p-3 pt-2">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="activityDetail.avatar" class="rounded-circle mr-2" @click="openSpace(activityDetail.pbid)"
					style="width: 65rpx;height: 65rpx;" lazy-load="true">
				</image>
				<!-- 昵称 | 发布时间 -->
				<view class="flex flex-column">
					<view class="font" style="line-height: 1.5;">
						{{activityDetail.companyName ? activityDetail.companyName :activityDetail.nickname}}
					</view>
					<text class="font-small text-light-muted"
						style="line-height: 1.5;">{{activityDetail.createTime}}</text>
				</view>
			</view>

		</view>
		<view class="px-3 py-2">
			<view class="text-main font-md font-weight-bold mb-1">
				{{activityDetail.title}}
			</view>
			<view class="">
				<text class="font text-muted" space="nbsp" user-select="true" style="line-height: 1.8;">
					{{activityDetail.detail}}
				</text>

			</view>
			<view class="pt-3 animated faster" hover-class="bounceIn" v-if="activityDetail.position">
				<text class="font-sm  text-light-muted iconfont icon-dizhi mr-1"></text>
				<text class="font-sm text-light-muted">{{activityDetail.position}}</text>
			</view>
		</view>
		<!-- <view class="flex align-center justify-between px-3 ">
			<view class="rounded-circle px-2 py-1"
				style="border: 1rpx solid #0E151D;">
				<text class="font iconfont icon-dizhi mr-1"></text>
				<text class="font">{{activityDetail.position}}</text>
			</view>
		</view> -->
		<!-- 地点 | 举报 -->
		<view class="flex align-center justify-between px-3">
			<!-- <view class="mr-1 text-secondary">
				<text class="font iconfont icon-guanyuwomen mr-1"></text>
				<text class="font">举报</text>
			</view> -->
		</view>
		<!-- 内容区域 -->
		<!-- 发布时间 -->
		<view class="px-3 pb-3">
			<text class="font" style="color: #bdbfc2;">报名截止于{{activityDetail.time}}</text>
		</view>
		<!-- 二维码 -->
		<view class="flex align-center justify-center px-3" v-if="activityDetail.qrcodeUrl">
			<image :src="getImgBase + activityDetail.qrcodeUrl" mode="aspectFit" show-menu-by-longpress="true"
				style="width: 500rpx; height: 500rpx;"></image>
		</view>
		<view class="flex align-center justify-between px-3">
			<view class="rounded-circle px-2 py-1 animated faster border btn-main" hover-class="bounceIn" @click="joinActivity" v-if="getFinish">
				<text v-if="activityDetail.perLimit != activityDetail.person"
					class="font-md text-main ">{{isJoin ? '已报名' : '报名活动'}}</text>
				<text v-else class="font-md text-main">名额已满</text>
			</view>
			<view class="rounded-circle px-2 py-1" style="background-color: #cccccc;" v-else>
				<text class="font-md text-white">已结束</text>
			</view>
			<view class="" v-if="!joinModal.show">
				<u-circle-progress width=120 :percent="(activityDetail.perLimit/activityDetail.person)*100"
					:active-color="activeColor">
					<view class="">
						<text class='font-sm'>{{activityDetail.perLimit}}/{{activityDetail.person}}</text>
					</view>
				</u-circle-progress>
			</view>
			<view v-else>
				<view class="m-4">
					<text class='font-sm'>{{activityDetail.perLimit}}/{{activityDetail.person}}</text>
				</view>
			</view>
		</view>
		<view class="border-bottom mx-3" />
		<!-- 评论 -->
		<view class="p-3">
			<!-- 回复 -->
			<text class="font-lg">回复</text>
		</view>
		<!-- 	<view class="px-3 py-2 flex align-center ">
			<image src="../../static/default.jpg" mode="aspectFill" style="width: 70rpx; height: 70rpx;"
				class="rounded-circle"></image>
			<input type="text" placeholder="来说点什么吧~" disabled
				class="flex-1 ml-2 text-muted bg-light rounded-circle px-3 py-2" />
		</view> -->
		<!-- 评论区 -->
		<view class="mx-3 py-3 border-bottom" v-for="(item, index) in comments" :key="index">
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<image :src="item.avatar" mode="aspectFill" style="width: 70rpx; height: 70rpx;"
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
			<text class="font text-primary">查看全部{{activityDetail.comments}}条回复</text>
		</view>
		<divider></divider>
		<!-- 底部操作栏 -->
		<!-- 占位 -->
		<view class="" style="height: 55px;">
		</view>

		<!-- 底部操作栏 | 发表评论 -->


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
						@click="toggle">咨询</button>
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
							@click="writeAComment">
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
			<u-popup v-model="authPhoneShow" mode="center" border-radius="16" width="580rpx" :mask-close-able="false">
			<view class="">
				<view class="flex align-center justify-center mt-5">
					<image src="../../static/nature/tixing.png" mode="aspectFill" style="width: 80rpx; height: 80rpx;" lazy-load="true">
					</image>
				</view>
				<view class="flex align-center justify-center font mt-3">
					授权手机号
				</view>
				<view class="flex align-center justify-center text-primary" style="margin: 0 80rpx 0 80rpx;">
					您还未授权手机号，请先授权~
				</view>
				<view class="my-2">
					<u-line color="#CCCCCC" />
				</view>

				<view class="flex align-center justify-between mx-3 mb-1">
					<view class="font" @click="authPhoneShow = false">
						取消
					</view>
					<view class="">
						<button class="empty font text-primary" open-type="getPhoneNumber"
							@getphonenumber="getPhoneNumber">授权</button>
					</view>
				</view>


			</view>
		</u-popup>
		<u-modal v-model="joinModal.show" title=" " width="550" show-cancel-button @confirm="joinConfirm" @cancel="joinCancel">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.png" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
					</image>
				</view>
				<view class="p-2 flex align-center justify-between">
					<text class="font text-light-muted">参与人数</text>
					<u-number-box v-model="joinModal.person" :min="1" :max="activityDetail.person"></u-number-box>
				</view>
				<view class="p-2">
					<u-input v-model="joinModal.remark" type="textarea" trim="true" placeholder="请输入备注~"
						maxlength="1000" />
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
	import Vue from 'vue'
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data() {
			return {
				id: '',
				activityDetail: {},
				comments: '',
				activityUserStatus: {},
				content: '',
				isLike: false,
				isJoin: false,
				join: {},
				imageList: ['/static/bgimg/3.jpg', '/static/demo/datapic/16.jpg'],
				current: 0,
				percent: 0,
				activeColor: '#fd5f40',
				authPhoneShow: false,
				authModal: {
					show: false
				},
				joinModal: {
					show: false,
					person: 0,
					remark: ''
				},
				narList: ['自然玩主作为平台，只提供活动信息发布功能，活动的一切法律风险，由活动发起方负责，活动过程中的一切纠纷，与自然玩主平台无关。']
			}
		},
		components: {
			uniPopup,
			uniNavBar
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase', 'getIsAuthPhone']),
			getFinish(){
				if(new Date().getTime() > (new Date(this.activityDetail.time).getTime() + 86400000 - 1)){
					return false
				}else{
					return true
				}
			}
		},
		onLoad(options) {
			this.id = options.id
			// this.id = '1426473061225357313'
			this.init()
		},
		onShareAppMessage() {
			return {
				title: this.activityDetail.title,
				path: `/pages/play/play?isshare=1&sharePage=activityDetail&id=${this.id}`,
				success: function(res) {},
				fail: function(res) {}
			}
		},
		methods: {
			...mapActions(['login', 'authUserInfo','setPhone']),
			init(data) {
				// 请求详情api
				this.$u.api.getActivityDetailById({
					id: this.id
				}).then(res => {
					this.activityDetail = res.data;
					this.activityDetail.imgsList = res.data.img.split(',')
					this.activityDetail.imgsNum = this.activityDetail.imgsList.length

				})
				if (!this.getIsLogin) {
					this.login()
				}
				//获取评论
				this.getComments()
			},
			//获取评论
			getComments() {
				//先获取用户的当前帖子状态
				this.$u.api.getActivityUserStatus({
					aid: this.id
				}).then(res => {
					this.activityUserStatus = res.data
					this.isJoin = res.data.join ? true : false
					this.join = res.data.join
					this.isLike = res.data.appreciate
					//获取评论
					this.$u.api.getCommentsByAid({
						aid: this.id
					}).then(res => {
						this.comments = res.data.map((item, index) => {
							item.isZan = this.activityUserStatus.commentAppreciate[index]
							return item
						})
					})
				})

			},
			// 监听swiper变化
			swiperChange(e) {
				this.current = e.detail.current
			},
			getPhoneNumber(e) {
				if (e.detail.errMsg == 'getPhoneNumber:ok') {
					uni.login({
						provider: 'weixin',
						success: response => {
							this.$u.api.phone({
								encryptedData: e.detail.encryptedData,
								iv: e.detail.iv,
								appid: Vue.prototype.appid,
								code: response.code
							}).then(res => {
								if (res.code == 200) {
									this.setPhone(res.data.phoneNumber)
									this.authPhoneShow = false
								} else {
									this.$refs.uToast.show({
										type: 'warning',
										title: '授权失败，请再试试~'
									})
									this.authPhoneShow = false
								}
							})
						},
						fail: res => {
							this.authPhoneShow = false
							Vue.prototype.$u.toast("获取code失败");
						}
					})
				} else {
					this.$refs.uToast.show({
						type: 'warning',
						title: '授权失败~'
					})
					this.authPhoneShow = false
				}
			},
			// 报名
			joinActivity() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (this.isJoin) {
					// 取消报名
					this.$u.api.joinToActive({
						aid: this.activityDetail.id,
						person: this.join.person
					}).then(res => {
						if (res.code === 200) {
							this.isJoin = false
							this.activityDetail.perLimit = this.activityDetail.perLimit - this.join.person
						}
					})
				} else {
					if (!this.getIsAuthPhone) {
						this.authPhoneShow = true
						return
					}
					this.joinModal.show = true
					return
				}
			},
			// 写评论
			writeAComment() {
				if (this.getNeedAuth) {
					this.authModal.show = true
					return
				}
				if (this.getNeedAuth) {
					this.authUserInfo()
					return
				}
				if (!this.content) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '评论不能为空哦~'
					})
					return
				}
				this.$u.api.writeAComment({
					aid: this.id,
					content: this.content
				}).then(res => {
					console.log("评论成功")
					if (res.msg == '评论成功') {
						this.content = ''
						this.activityDetail.comments++
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
					this.$u.api.activityAppreciateCancel({
						aid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isLike = false
							this.activityDetail.likes--
							// this.activityDetail.avatarLikes.splice(this.activityDetail.avatarLikes.findIndex(item =>
							// 	item === this.getUserinfo.avatar), 1)
						}
					})
				} else {
					// 喜欢
					this.$u.api.activityAppreciate({
						aid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isLike = true
							this.activityDetail.likes++
							// this.activityDetail.avatarLikes.push(this.getUserinfo.avatar)
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
					this.$u.api.acommentAppreciateCancel({
						cid: e.id
					}).then(res => {
						if (res.code === 200) {
							e.isZan = false
						}
					})
				} else {
					// 点赞
					this.$u.api.acommentAppreciate({
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
				console.log("评论详情")
				uni.navigateTo({
					url: `comments?id=${this.id}`
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
			},
			joinConfirm(){
				if (!this.isJoin) {
					// 取消报名
					if(this.joinModal.person <= 0){
						this.$refs.uToast.show({
							type: 'warning',
							title: '请输入参与人数~'
						})
						return
					}
					this.$u.api.joinToActive({
						aid: this.activityDetail.id,
						person: this.joinModal.person,
						remark: this.joinModal.remark
					}).then(res => {
						if (res.code === 200) {
							this.isJoin = true
							this.activityDetail.perLimit = this.activityDetail.perLimit + this.joinModal.person
							this.join = {
								person: this.joinModal.person
							}
							this.joinModal.show = false
							this.joinModal = {
								show: false,
								person: 0,
								remark: ''
							}
						}else{
							this.$refs.uToast.show({
								type: 'warning',
								title: res.msg
							})
						}
					})
				}
			},
			joinCancel(){
				this.joinModal = {
					show: false,
					person: 0,
					remark: ''
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
