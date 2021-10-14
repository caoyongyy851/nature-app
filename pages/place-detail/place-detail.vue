<template>
	<view class="">
		<u-toast ref="uToast" />
		<!-- 轮播图 -->
		<view class="swiperContainer">
			<swiper @change="swiperChange" :autoplay="true" :interval="3000" :duration="1000" class=""
				style="width: 750rpx; height: 750rpx;">

				<swiper-item v-for="(item, index) in placeDetail.imageList" :key="index">
					<image :src="getImgBase + item" mode="aspectFill" style="width: 750rpx; height: 750rpx;">
					</image>
				</swiper-item>
			</swiper>
			<view class="imageCount flex align-center justify-center">{{current+1}}/{{placeDetail.imageList.length}}
			</view>
		</view>
		<!-- 玩场名称 -->
		<view class="mx-3 py-2 flex flex-column text-main">
			<text class="font-lg font-weight-lighter">{{placeDetail.topicName}}</text>
			<text class="text-dark font-weight-lighter" style="font-size: 50rpx;">{{placeDetail.name}}</text>
		</view>
		<!-- 标签 -->
		<view class="tags mx-3">
			<view class="item mr-2 font-sm text-light-black border" v-for="(it,ind) in placeDetail.tags" :key="ind">
				{{it}}
			</view>
		</view>
		<view class="mx-1 pt-3">
			<uni-notice-bar :scrollable="true" :speed="30" :single="true" :backgroundColor="'#fff'" :color="'#A9A5A0'"
				:text="placeDetail.detail" />
		</view>
		<!-- 价格/售卖情况 -->
		<view class="mx-3 pb-2 flex align-center justify-between">
			<view class="">
				<text class="text-main">¥</text>
				<text class="font-weight-bolder text-main" style="font-size: 50rpx;">{{placeDetail.planPrice}}</text>
			</view>
			<view class="">
				<text class="font">{{placeDetail.bugs + placeDetail.views + placeDetail.collects}}人去过</text>
			</view>
		</view>
		<!-- <divider></divider> -->
		<!-- 地理位置 -->
		<view class="mx-3 py-2 border-top">
			<view class="flex align-center justify-between">
				<view style="width: 60%;">
					<text class="iconfont icon-dizhi font-md mr-1"></text>
					<text class="font-md font-weight-lighter">{{placeDetail.address}}</text>
				</view>
				<view class="bg-main py-1 px-2 rounded-circle animated faster" hover-class="bounceIn">
					<text class="iconfont icon-fabu font-sm mr-1 text-white"></text>
					<text class="font-sm font-weight-lighter text-white">导航</text>
				</view>
			</view>
		</view>
		<!-- 开发时间 -->
		<view class="mx-3 py-2 border-top">
			<view class="flex align-center justify-between">
				<view style="">
					<text class="iconfont icon-faxian font-md mr-1"></text>
					<text class="font-md font-weight-lighter">开发时间
						{{placeDetail.dayTypeStr}}（{{placeDetail.start}}~{{placeDetail.end}}）</text>
				</view>
				<view class="animated faster" hover-class="bounceIn">
					<text class="iconfont icon-jinru font-md"></text>
				</view>
			</view>
		</view>
		<!-- 请选择出行时间 -->
		<view class="mx-3 py-2 border-top animated faster" hover-class="bounceIn" @click="showCal">
			<view class="flex align-center justify-between" hover-class="bounceIn">
				<view style="">
					<text class="iconfont icon-bianji font-md mr-1"></text>
					<text class="font-md font-weight-lighter">选择出行日期</text>
				</view>
				<view class="">
					<text v-if="showCalendar" class="iconfont icon-xialazhankai font-md"></text>
					<text v-else class="iconfont icon-jinru font-md"></text>
				</view>
			</view>
		</view>
		<!-- 出行时间 -->
		<view class="m-3 flex flex-column" v-if="showCalendar">
			<uni-calendar :insert="scheInfo.insert" :startDate="scheInfo.startDate" :date="scheInfo.date"
				:selected="scheInfo.selected" :showMonth="false" change="change" @monthSwitch="monthSwitch">
			</uni-calendar>
		</view>
		<!-- 占位 -->
		<view class="" style="height: 55px;">

		</view>

		<!-- 预定栏 -->
		<view class="flex align-center justify-between px-5 py-3 fixed-bottom shadow bg-white">
			<view class="flex">
				<view class="iconfont icon-shoucang font-lg mr-3 animated faster"
					:class="isCollect ? 'text-danger':'text-dark'" hover-class="bounceIn" @click="toCollect"></view>
				<button class="empty iconfont icon-fenxiang font-lg animated faster" hover-class="bounceIn"
					open-type="share"></button>
			</view>
			<view class="bg-main px-5 py-1 rounded-circle text-white font-lg font-weight-lighter animated faster"
				hover-class="bounceIn">
				立即预定
			</view>
		</view>
		<divider></divider>
	</view>

</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import uniNoticeBar from '../../components/uni-ui/uni-notice-bar/uni-notice-bar.vue'
	import uniCalendar from '../../components/uni-ui/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniNoticeBar,
			uniCalendar
		},
		onReady() {

		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		data() {
			return {
				id: '',
				placeDetail: {},
				current: 0,
				showCalendar: false,
				isCollect: false,
				scheInfo: {
					startDate: "",
					date: "",
					lunar: false,
					range: true,
					insert: true,
					selected: []
				},
			}
		},
		onLoad(e) {
			this.id = e.id
			this.init()
			setTimeout(() => {
				// this.scheInfo.date = getDate(new Date(), 0).fullDate
				// this.scheInfo.startDate = getDate(new Date(), 0).fullDate
				// this.scheInfo.endDate = getDate(new Date(), 30).fullDate
				this.scheInfo.selected = []
				// 设置日期与价格
				for (var i = 0; i < this.placeDetail.sches.length; i++) {
					if (i === 0) {
						this.scheInfo.date = this.placeDetail.sches[i].ytd
					}
					this.scheInfo.selected.push({
						date: this.placeDetail.sches[i].ytd,
						info: '￥' + this.placeDetail.sches[i].price,
						surplus: this.placeDetail.sches[i].surplus
					})
				}
			}, 1000)
		},
		methods: {
			init() {
				this.$u.api.getPlaceDetailById({
					id: this.id
				}).then(res => {
					this.placeDetail = res.data
					uni.setNavigationBarTitle({
						title: this.placeDetail.name
					})
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
