<template>
	<view>
		<!-- 轮播图 -->
		<u-toast ref="uToast" />
		<view class="swiperContainer mb-2">
			<swiper @change="swiperChange" :autoplay="true" :interval="3000" :duration="1000" class=""
				style="width: 750rpx; height: 450rpx;">
				<swiper-item v-for="(item, index) in activityDetail.imgsList" :key="index">
					<image :src="getImgBase + item" mode="aspectFill" style="width: 750rpx; height: 1000rpx;">
					</image>
				</swiper-item>
			</swiper>
			<view class="imageCount flex align-center justify-center">{{current+1}}/{{activityDetail.imgsNum}}</view>
		</view>
		<!-- 头像 | 关注-->
		<view class="flex align-center justify-between p-3 pt-2">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="activityDetail.avatar" class="rounded-circle mr-2" @click="openSpace"
					style="width: 65rpx;height: 65rpx;" lazy-load>
				</image>
				<!-- 昵称 | 发布时间 -->
				<view class="flex flex-column">
					<view class="font" style="line-height: 1.5;">
						{{activityDetail.nickname}}
					</view>
					<text class="font-small text-light-muted" style="line-height: 1.5;">{{activityDetail.createTime}}</text>
				</view>
			</view>
		
		</view>
		<view class="flex align-center justify-between px-3 ">
			<view class="rounded-circle px-2 py-1"
				style="border: 1rpx solid #0E151D;">
				<!-- <text class="font iconfont icon-dizhi mr-1"></text> -->
				<text class="font">{{activityDetail.position}}</text>
			</view>
		</view>
		<view class="flex align-center justify-between px-3 ">
			<view class="rounded-circle px-2 py-1 animated faster bg-main" hover-class="bounceIn" @click="joinActivity">
				<text class="font-md text-white">{{isJoin ? '已报名' : '报名活动'}}</text>
			</view>
			<view class="">
				<u-circle-progress width=120 :percent="(activityDetail.perLimit/activityDetail.person)*100" :active-color="activeColor">
					<view class="">
						<text class='font-sm'>{{activityDetail.perLimit}}/{{activityDetail.person}}</text>
					</view>
				</u-circle-progress>
			</view>
		</view>
		<!-- 地点 | 举报 -->
		<view class="flex align-center justify-between px-3">

			<!-- <view class="mr-1 text-secondary">
				<text class="font iconfont icon-guanyuwomen mr-1"></text>
				<text class="font">举报</text>
			</view> -->
		</view>
		<!-- 内容区域 -->
		<view class="px-3 py-4">
			<text class="font text-muted" style="line-height: 1.8;">
				{{activityDetail.detail}}
			</text>
		</view>
		<!-- 发布时间 -->
		<view class="px-3 pb-3">
			<text class="font" style="color: #bdbfc2;">报名截止于{{activityDetail.time}}</text>
		</view>

		<view class="border-bottom mx-3" />
		<!-- 评论 -->
		<view class="p-3">
			<!-- 回复 -->
			<text class="font-lg">回复</text>
		</view>
		<view class="px-3 py-2 flex align-center ">
			<image src="../../static/default.jpg" mode="aspectFill" style="width: 70rpx; height: 70rpx;"
				class="rounded-circle"></image>
			<input type="text" placeholder="来说点什么吧~" disabled
				class="flex-1 ml-2 text-muted bg-light rounded-circle px-3 py-2" @click="toggle" />
		</view>
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
		<view class="flex align-center justify-between px-5 py-2 fixed-bottom shadow bg-white">
			<view class="flex">
				<view class="flex align-center animated faster px-5 border-right" hover-class="bounceIn"
					@click="toggle">
					<text class="iconfont icon-pinglun2 font-lg mr-1 mr-1"></text>
					<text class="font">{{activityDetail.comments}}</text>
				</view>
				<view class="flex align-center animated faster px-5" hover-class="bounceIn" @click="toLike">
					<text class="iconfont font-lg mr-1"
						:class="isLike ? 'icon-xihuan text-danger' : 'icon-xihuan1'"></text>
					<text class="font">{{activityDetail.likes}}</text>
				</view>
			</view>
			<!-- 分享 -->
			<button
				class="flex align-center justify-center ml-5 bg-main rounded-circle text-white font-md animated faster"
				style="width: 160rpx; height: 75rpx;" open-type="share" hover-class="bounceIn">分享</button>
			<!-- 底部弹窗 -->
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
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
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
				imageList: ['/static/bgimg/3.jpg', '/static/demo/datapic/16.jpg'],
				current: 0,
				percent: 0,
				activeColor: '#8aa167',
			}
		},
		components: {
			uniPopup
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onLoad(options) {
			this.id = options.id
			// this.id = '1426473061225357313'
			this.init()
		},
		methods: {
			init(data) {
				// 请求详情api
				this.$u.api.getActivityDetailById({
					id: this.id
				}).then(res => {
					this.activityDetail = res.data;
					this.activityDetail.imgsList = res.data.img.split(',')
					this.activityDetail.imgsNum = this.activityDetail.imgsList.length
					// 修改标题
					uni.setNavigationBarTitle({
						title: res.data.title
					})
				})

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
					this.isJoin = res.data.join
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
			// 报名
			joinActivity() {
				if (this.isJoin) {
					// 取消报名
					this.$u.api.joinToActive({
						aid: this.activityDetail.id
					}).then(res => {
						if (res.code === 200) {
							this.isJoin = false
							this.activityDetail.perLimit--
						}
					})
				} else {
					// 报名
					this.$u.api.joinToActive({
						aid: this.activityDetail.id
					}).then(res => {
						if (res.code === 200) {
							this.isJoin = true
							this.activityDetail.perLimit++
							this.$refs.uToast.show({
								type: 'success',
								title: '报名成功~'
							})
						}
					})
				}
			},
			// 写评论
			writeAComment() {
				if(!this.content){
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
				// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
				this.$refs.popup.open("bottom")
			},
			popupChange(e) {
				this.content = ''
			},
			//评论点赞
			commentAppreciate(e) {
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
				console.log("评论详情")
				uni.navigateTo({
					url: `comments?id=${this.id}`
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
		right: 20rpx;
		bottom: 30rpx;
	}
</style>
