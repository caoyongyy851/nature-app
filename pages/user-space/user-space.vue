<template>
	<view >
		<!-- :style="'background-image: url('+ userInfo.avatar +')'" -->
		<u-toast ref="uToast" />
		<view class="p-3 flex flex-column" style="background-size: 750rpx; background-repeat:no-repeat; background-color: #d3d3d3;" >
			<view class="">
				<u-avatar :src="userInfo.avatar" :size="100" :show-sex="false"
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
			<view class="pt-2 flex align-center justify-between">
				<view class="">
					<text class="text-white mr-1">{{userInfo.createTime}}</text>
					<text class="text-white">加入WeEAST物与~</text>
				</view>
				<!-- 按钮 -->
				<view class="flex">
					<view @click="follow"
						class="px-3 py-1 mr-2 flex text-white align-center justify-center btn-main rounded-circle animated faster"
						hover-class="bounceIn">
						{{isFollow ? '已关注':'关注'}}
					</view>
					<view class="px-3 py-1 flex text-white align-center justify-center btn-main rounded-circle animated faster" @click="writeLetter">
						写私信
					</view>
				</view>
			</view>
		</view>
		<view class="mb-2">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#021d49"
				inactive-color="#dcdcdc" font-size="30"></u-tabs>
		</view>
		<view v-if="current == 0">
			<template v-if="topicList.length > 0">
				<view class="mb-5" v-for="(item, index) in topicList" :key="index">
					<view class="" @click="toTopic(item)">
						<view class="swiperContainer mb-2">
							<swiper :autoplay="false" :duration="1000" style="width: 750rpx; height: 650rpx;">
								<swiper-item>
									<image :src="getImgBase + item.cover" mode="aspectFill"
										style="width: 750rpx; height: 650rpx;">
									</image>
								</swiper-item>
							</swiper>
						</view>
					</view>

					<view class="px-3 pb-1">
						<text class="font-md">{{item.title}}</text>
					</view>
					<view class="px-3">
						<text class="fonte">{{item.detail}}</text>
					</view>
				</view>
				<view v-if="isBottom" class="mb-5">
					<u-loadmore :status="loadStatus" :load-text="loadText" />
				</view>
			</template>
			<template v-else>
				<view class="flex align-center justify-center" style="margin-top: 400rpx;">
					<u-empty text="数据为空" mode="list"></u-empty>
				</view>
			</template>

		</view>

		<view v-if="current == 1">
			<template v-if="activityList.length > 0">
				<view class="mb-5" v-for="(item, index) in activityList" :key="index">
					<view class="" @click="toActivity(item)">
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

					<view class="px-3 pb-1">
						<text class="font-md">{{item.title}}</text>
					</view>
					<view class="px-3">
						<text class="fonte">{{item.detail}}</text>
					</view>
				</view>
				<view v-if="isBottom" class="mb-5">
					<u-loadmore :status="loadStatus" :load-text="loadText" />
				</view>
			</template>
			<template v-else>
				<view class="flex align-center justify-center" style="margin-top: 400rpx;">
					<u-empty text="数据为空" mode="list"></u-empty>
				</view>
			</template>

		</view>


		<view v-if="current == 2">
			<template v-if="cardList.length > 0">
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
					<!-- <view class="px-3 flex flex-row-reverse">
						<text class="iconfont icon-xihuan1 font-lg"></text>
					</view> -->
					<view class="px-3 pb-1">
						<text class="font-md">{{item.title}}</text>
					</view>
					<view class="px-3">
						<text class="fonte">{{item.detail}}</text>
					</view>
				</view>
				<view v-if="isBottom" class="mb-5">
					<u-loadmore :status="loadStatus" :load-text="loadText" />
				</view>
			</template>
			<template v-else>
				<view class="flex align-center justify-center" style="margin-top: 400rpx;">
					<u-empty text="数据为空" mode="list"></u-empty>
				</view>
			</template>
		</view>
		<u-modal v-model="letterModal.show" title=" " width="550" show-cancel-button @confirm="letterConfirm" @cancel="letterCancel">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex align-center justify-center">
					<image src="../../static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
					</image>
				</view>

				<view class="p-2">
					<u-input v-model="letterModal.context" type="textarea" trim="true" placeholder="请输入私信内容~"
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
	export default {
		data() {
			return {
				uid: null,
				userInfo: {},
				cardList: [],
				topicList: [],
				activityList:[],
				queryParams: {
					pageNum: 1,
					pageSize: 99
				},
				tabsList: [{
					name: '帖子'
				}],
				current: 0,
				isBottom: false,
				loadText: {
					nomore: "没有更多了"
				},
				loadStatus: 'nomore',
				list: [{
					name: '话题'
				}, {
					name: '活动'
				},
				{
					name: '参与'
				}],
				letterModal: {
					show: false,
					context: '',
					toId: null
				},
				isFollow: false
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
				this.$u.api.getFollowStatus({
					fid: this.uid
				}).then(res => {
					this.isFollow = res.data
				})

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

				this.$u.api.getTopicListByUid({
					uid: this.uid,
					pageNum: this.queryParams.pageNum,
					pageSize: this.queryParams.pageSize
				}).then(res => {
					this.topicList = res.data
				})

				this.$u.api.getActivityListByUid({
					uid: this.uid,
					pageNum: this.queryParams.pageNum,
					pageSize: this.queryParams.pageSize
				}).then(res => {
					this.activityList = res.data
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
			},
			toTopic(item){
				uni.navigateTo({
					url:`../play-detail/play-detail?id=${item.id}`
				})
			},
			toActivity(item){
				uni.navigateTo({
					url:`../activity-detail/detail?id=${item.id}`
				})
			},
			change(index) {
				this.current = index;
			},
			writeLetter(){
				this.letterModal.show = true
			},
			letterConfirm(){
				if(!this.letterModal.context){
					this.$refs.uToast.show({
						type: 'warning',
						title: '请输入私信内容~'
					})
					return
				}
				this.$u.api.writeLetter({
					toId: this.userInfo.id,
					context: this.letterModal.context
				}).then(res => {
					if(res.code == 200){
						this.$refs.uToast.show({
							type: 'success',
							title: '发送成功~'
						})
					}else{
						this.$refs.uToast.show({
							type: 'warning',
							title: '发送失败~'
						})
					}
				})
			},
			letterCancel(){
				this.letterModal = {
					show: false,
					context: '',
					toId: null
				}
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
						followUid: this.userInfo.id
					}).then(res => {
						if (res.code === 200) {
							this.isFollow = false
						}
					})
				} else {
					// 关注
					this.$u.api.userToFollow({
						followUid: this.userInfo.id
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
