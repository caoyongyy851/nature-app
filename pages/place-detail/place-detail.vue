<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" :fixed="true" :title="placeDetail.name">
			<view slot="left" class="flex align-center mt-4" @click="toIndex">
				<image src="/static/logo.png" mode="aspectFill" style="width: 120rpx; height: 120rpx;" lazy-load="true"></image>
			</view>
		</uni-nav-bar>
		<u-toast ref="uToast" />
		<!-- 轮播图 -->
		<view class="swiperContainer">
			<swiper @change="swiperChange" :autoplay="false" :interval="2000" :duration="1000" class=""
				style="width: 750rpx; height: 750rpx;">
				<swiper-item v-if="placeDetail.videos">
					<video :src="getImgBase + placeDetail.videos" autoplay="true" loop="true"
						style="width: 750rpx; height: 750rpx;"></video>
				</swiper-item>
				<swiper-item v-for="(item, index) in placeDetail.imageList" :key="index">
					<image :src="getImgBase + item" mode="aspectFill" style="width: 750rpx; height: 750rpx;" lazy-load="true">
					</image>
				</swiper-item>

			</swiper>
			<view class="imageCount flex align-center justify-center">
				{{current+1}}/{{placeDetail.imageList.length + placeDetail.videosLength}}
			</view>
		</view>
		<!-- 玩场名称 -->
		<view class="mx-3 my-2 flex flex-column text-main">
			<text class="font-lg font-weight-bolder">{{placeDetail.name}}</text>
			<view class="animated faster" hover-class="bounceIn" v-if="placeDetail.address">
				<text class="font-sm  text-light-muted iconfont icon-dizhi mr-1"></text>
				<text class="font-sm text-light-muted">{{placeDetail.address}}</text>
			</view>
		</view>
		<!-- 标签 -->
		<view class="tags mx-3 mb-3">
			<view class="item mr-2 font-sm text-light-black border" v-for="(it,ind) in placeDetail.tags" :key="ind">
				{{it}}
			</view>
		</view>
		<view class="mx-3">
			<view class="font pt-1 font-weight-bolder">基本信息</view>
			<text class="font text-muted" style="line-height: 1.8;">
				{{placeDetail.detail}}
			</text>
		</view>
		<view class="mx-3 my-2">
			<u-line color="#cccccc"></u-line>
		</view>
		<view class="mx-3 font-sm text-main" @click="toDoc">
			遵守场地使用规则责任书*
		</view>

		<view class="m-3" v-if="placeDetail.useds.length > 0">
			<view class="font pb-2 font-weight-bolder">计划用途</view>
			<view class="flex flex-wrap align-center ">
				<view class="flex align-center justify-center font-sm rounded item mr-2 mb-1 "
					:class="item.selected ? 'bg-main text-white border-main':' text-muted border'"
					v-for="(item, index) in placeDetail.useds" :key="index" @click="usedClick(item)">
					{{item.used}}
				</view>
			</view>
		</view>

		<view class="mx-3 mt-2 flex align-center justify-between">
			<view class="font font-weight-bolder" style="width: 15%;">其他</view>
			<input v-model="order.remark" placeholder="请输入其他用途" type="text" class="flex-1" />
		</view>

		<view class="m-3 flex align-center justify-between">
			<view class="font font-weight-bolder">人数</view>
			<u-number-box :min="1" :max="500" v-model="order.person"></u-number-box>
		</view>
		<!-- 请选择出行时间 -->
		<view class="mx-3 py-2 animated faster" hover-class="bounceIn" @click="showCal">
			<view class="flex align-center justify-between" hover-class="bounceIn">
				<view style="">
					<text class="font font-weight-bolder">选择出行日期</text>
				</view>
				<view class="">
					<text v-if="showCalendar" class="iconfont icon-xialazhankai font"></text>
					<text v-else class="iconfont icon-jinru font"></text>
				</view>
			</view>
		</view>
		<!-- 出行时间 -->
		<view class="m-3 flex flex-column" v-if="showCalendar">
			<uni-calendar :insert="scheInfo.insert" :startDate="scheInfo.startDate" :date="scheInfo.date"
				:selected="scheInfo.selected" :showMonth="false" change="change" @monthSwitch="monthSwitch"
				@change="changeDate">
			</uni-calendar>
		</view>
		<!-- 占位 -->
		<view class="" style="height: 75px;">
		</view>
		<!-- 预约 -->
		<view class="fixed-bottom-right-1" @click="toCreateOrder">
			<text class="text-white iconfont icon-zengjia rounded-circle btn-main text-main"
				style="font-size: 80rpx;"></text>
		</view>
		<!-- 	<view class="fixed-bottom-right-1" v-else>
			<button class="text-white iconfont icon-zengjia rounded-circle btn-main text-main" style="font-size: 80rpx;"
				open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
		</view> -->

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


		<divider></divider>

		<u-popup width="700" height="1000" closeable v-model="docShow" mode="center" border-radius="14">
			<view class="">
				<view class="font font-weight-bolder flex align-center justify-center m-2">
					场地责任书
				</view>
				<view class="font text-muted p-2" style="line-height: 1.8;">
					{{document.detail}}
				</view>
				<view class="">
					<u-line color="#cccccc"></u-line>
				</view>
				<view class="flex align-center justify-around mb-2 p-2">
					<view class="font text-muted" @click="toCancel">
						取消
					</view>
					<view class="font text-primary" @click="toSource">
						同意
					</view>
				</view>
			</view>
		</u-popup>
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
	</view>

</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import Vue from 'vue'
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniNoticeBar from '../../components/uni-ui/uni-notice-bar/uni-notice-bar.vue'
	import uniCalendar from '../../components/uni-ui/uni-calendar/uni-calendar.vue'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNoticeBar,
			uniCalendar,
			uniNavBar,
			uniPopup
		},
		onReady() {

		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase', 'getIsAuthPhone'])
			// ...mapMutations(['setIsAuthPhone'])
		},
		data() {
			return {
				id: '',
				docShow: false,
				authPhoneShow: false,
				docSource: false,
				document: {},
				placeDetail: {},
				current: 0,
				showCalendar: false,
				isCollect: false,
				isLike: false,
				scheInfo: {
					startDate: "",
					date: "",
					lunar: false,
					range: true,
					insert: true,
					selected: []
				},
				order: {
					placeId: '',
					person: 0,
					price: 0,
					planDate: '',
					used: '',
					remark: '',
					surplus:0
				}
			}
		},
		onLoad(e) {
			this.id = e.id
			this.order.placeId = e.id
			this.init()
			
			setTimeout(() => {
				this.scheInfo.selected = []
				// 设置日期与价格
				for (var i = 0; i < this.placeDetail.sches.length; i++) {
					if (i === 0) {
						this.scheInfo.date = this.placeDetail.sches[i].ytd
					}
					this.scheInfo.selected.push({
						date: this.placeDetail.sches[i].ytd,
						price: this.placeDetail.sches[i].price,
						info: '￥' + this.placeDetail.sches[i].price,
						surplus: this.placeDetail.sches[i].surplus
					})
				}
			}, 1000)
		},
		methods: {
			...mapActions(['login', 'setPhone', 'authUserInfo']),
			init() {
				this.$u.api.getPlaceDetailById({
					id: this.id
				}).then(res => {
					this.placeDetail = res.data
					this.placeDetail.videosLength = this.placeDetail.videos ? 1 : 0
					this.order.price = this.placeDetail.sches[0].price 			
					this.order.planDate = this.placeDetail.sches[0].ytd
					this.order.surplus = this.placeDetail.sches[0].surplus
					uni.setNavigationBarTitle({
						title: this.placeDetail.name
					})
				})

				this.$u.api.getDoc({
					type: 1
				}).then(res => {
					this.document = res.data
				})
			},
			// 监听swiper变化
			swiperChange(e) {
				this.current = e.detail.current
			},
			monthSwitch(e) {
				console.log(e)
			},
			showCal() {
				this.showCalendar = this.showCalendar ? false : true
			},
			// 收藏
			toCollect() {
				if (this.isCollect) {
					// 取消收藏
					this.$u.api.placeToCollect({
						pid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isCollect = false
						}
					})
				} else {
					// 收藏
					this.$u.api.placeToCollect({
						pid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isCollect = true
							this.$refs.uToast.show({
								type: 'success',
								title: '收藏成功~'
							})
						}
					})
				}
			},
			toLike() {
				if (this.isLike) {
					// 取消喜欢
					this.$u.api.placeToLike({
						pid: this.id
					}).then(res => {
						if (res.code === 200) {
							this.isLike = false
							this.cardDetail.likes--
							this.cardDetail.avatarLikes.splice(this.cardDetail.avatarLikes.findIndex(item =>
								item === this.getUserinfo.avatar), 1)
						}
					})
				} else {
					// 喜欢
					this.$u.api.placeToLike({
						pid: this.id
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
			changeDate(e) {
				this.order.planDate = e.extraInfo.date
				this.order.price = e.extraInfo.price
				this.order.surplus = e.extraInfo.surplus
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
			// 创建订单
			toCreateOrder() {
				if (this.getNeedAuth) {
					this.authUserInfo()
					return
				}
				if (!this.getIsAuthPhone) {
					this.authPhoneShow = true
					return
				}
				//选择用途
				if (this.placeDetail.useds) {
					let usedList = []
					this.order.used = this.placeDetail.useds.map((item, index) => {
						if (item.selected) {
							usedList.push(item.used)
						}
					})
					this.order.used = usedList.join()
				}
				if(!this.order.placeId){
					this.$refs.uToast.show({
						type: 'warning',
						title: '玩场id为空~'
					})
					return
				}
				if(!this.order.used){
					this.$refs.uToast.show({
						type: 'warning',
						title: '请选择计划用途~'
					})
					return
				}
				if(!this.order.person){
					this.$refs.uToast.show({
						type: 'warning',
						title: '请选择人数~'
					})
					return
				}
				if(!this.order.planDate){
					this.$refs.uToast.show({
						type: 'warning',
						title: '请选择计划日期~'
					})
					return
				}
				if(!this.order.price){
					this.$refs.uToast.show({
						type: 'warning',
						title: '预约价格出错~'
					})
					return
				}
				if(!this.order.surplus){
					this.$refs.uToast.show({
						type: 'warning',
						title: '当日已约满~'
					})
					return
				}
				console.log(JSON.stringify(this.order))
				this.$u.api.createCOrder(this.order).then(res => {
					if(res.code == 200){
						this.$refs.uToast.show({
							type: 'success',
							title: '订单创建成功~'
						})
						uni.navigateTo({
							url: `../order-pay/order-pay?orderId=${res.data}`
						})
					}else{
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
					}
				})
			},
			usedClick(item) {
				item.selected = item.selected ? false : true
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			toIndex() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			toDoc() {
				this.docShow = true
			},
			toCancel() {
				this.docShow = false
			},
			toSource() {
				this.docShow = false
				this.docSource = true
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

	.tags {
		display: flex;
		white-space: nowrap;
		overflow: hidden;
	}

	.item {
		/* background-color: rgba(0, 0, 0, 0.05); */
		padding: 5rpx 10rpx;
		border-radius: 5rpx;

	}

	.border-main {
		border: 1rpx solid #fd5f40
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
