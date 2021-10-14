<template>
	<view>
		<!-- 头像 简介 -->
		<view class="flex align-center p-2" hover-class="bg-light">
			<image src="/static/default.jpg" style="width: 100rpx; height: 100rpx;" class="rounded-circle">
			</image>
			<view class="flex flex-column flex-1 px-2">
				<view class="">
					<text class="font-lg font-weight-bold text-dark">昵称</text>
				</view>
				<view class="flex">
					<view class="mr-3">
						7<text class="text-muted ml-1">关注</text>
					</view>
					<view class="mr-3">
						2<text class="text-muted ml-1">粉丝</text>
					</view>
					<view class="mr-3">
						0<text class="text-muted ml-1">访客</text>
					</view>
				</view>
			</view>
			<view class="iconfont icon-jinru font-lg">
			</view>
		</view>
		<!-- 关注、粉丝、访客 -->

		<view class="font text-muted px-5 py-1">
			<text>我是自然玩主的开发者，目前小程序v1.0，正持续开发中~</text>
		</view>
		<!-- 选项栏 -->
		<view class="flex align-center px-7 py-2">
			<u-grid col="3" :border="border">
				<u-grid-item name="item1" :index="0" @click="cardClick">
					<u-badge count="9" :offset="[20, 30]"></u-badge>
					<u-icon name="tags" :size="46"></u-icon>
					<view class="grid-text">帖子</view>
				</u-grid-item>
				<u-grid-item :index="1">
					<u-icon name="clock" :size="46"></u-icon>
					<view class="grid-text">历史</view>
				</u-grid-item>
				<u-grid-item :index="1">
					<u-badge count="2" :offset="[20, 30]"></u-badge>
					<u-icon name="more-circle" :size="46"></u-icon>
					<view class="grid-text">评论</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 	广告位
		<view class="p-3">
			<image src="" mode="aspectFill" style="width: 100%; height: 170rpx;"
				class="rounded"></image>
		</view> -->
		<view class="flex align-center pb-4">
			<view class="flex-1 flex flex-column align-center justify-center">
				<text class="font-md font-weight-bold text-danger">120</text>
				<text class="font text-muted">实时积分</text>
			</view>
			<view class="flex-1 flex flex-column align-center justify-center">
				<text class="font-md font-weight-bold text-info">5%</text>
				<text class="font text-muted">季度比例</text>
			</view>
			<view class="flex-1 flex flex-column align-center justify-center">
				<text class="font-md font-weight-bold text-warning">100</text>
				<text class="font text-muted">现金账户</text>
			</view>
		</view>
		<uni-list-item title="我的订单" showExtraIcon @click="openHistory">
			<text slot="icon" class="iconfont icon-bianji1"></text>
		</uni-list-item>
		<uni-list-item title="个人主页" showExtraIcon>
			<text slot="icon" class="iconfont icon-huiyuanvip"></text>
		</uni-list-item>
		<uni-list-item title="登录授权" showExtraIcon @click="auth">
			<text slot="icon" class="iconfont icon-shuaxin"></text>
		</uni-list-item>
	</view>

</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniNavBar,
			uniListItem
		},
		computed: {
			...mapGetters(['getNeedAuth'])
		},
		onLoad() {
			this.init()
		},
		data() {
			return {
				border: false,
				myData: [{
						name: "帖子",
						num: 8
					},
					{
						name: "动态",
						num: 5
					},
					{
						name: "评论",
						num: 12
					},
					{
						name: "粉丝",
						num: 10
					}
				],
				extraIcon: {
					color: '#4cd964',
					size: '22',
					type: 'gear-filled'
				}
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../user-set/user-set'
			})
		},
		methods: {
			...mapActions(['login', 'authUserInfo']),
			async init() {
				await this.login()
			},
			async auth() {
				if (this.getNeedAuth) {
					await this.authUserInfo()
				}
				uni.switchTab({
					url: '../index/index'
				})
			},
			cardClick(e) {
				console.log("帖子")
				console.log(e)
			} // authFinsh(e) {
			// 	console.log('------', e)
			// }

		}
	}
</script>

<style>

</style>
