<template>
	<view>
		<u-toast ref="uToast" />
		<uni-nav-bar fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.png" mode="aspectFill" style="width: 120rpx; height: 120rpx;"></image>
			</view>
		</uni-nav-bar>
		<!-- 头像 简介 -->
		<view class="flex align-center p-2" hover-class="bg-light" @click="toSelf">
			<u-avatar v-if="!getNeedAuth" :src="getUserinfo.avatar" :size="100" :show-sex="true"
				:sexIcon="getUserinfo.sex==1?'man':'woman'">
			</u-avatar>
			<u-avatar v-else :size="100">
			</u-avatar>
			<view class="flex flex-column flex-1 px-2">
				<view class="">
					<text v-if="!getNeedAuth" class="font-lg text-dark">{{getUserinfo.nickname}}<text class="text-light-muted" v-if="getUserinfo.companyName">({{getUserinfo.companyName}})</text></text>
					<text v-else class="font-lg text-dark">点击授权~</text>
				</view>
				<view class="flex">
					<view class="mr-3">
						{{self.follows}}<text class="text-muted ml-1">关注</text>
					</view>
					<view class="mr-3">
						{{self.fans}}<text class="text-muted ml-1">粉丝</text>
					</view>
					<view class="mr-3">
						{{self.callers}}<text class="text-muted ml-1">访客</text>
					</view>
				</view>
			</view>
			<view class="iconfont icon-jinru font-lg">
			</view>
		</view>
		<!-- 关注、粉丝、访客 -->

		<view class="font text-muted px-5 py-1">
			<text v-if="getUserinfo.sign != null">{{getUserinfo.sign}}</text>
			<text v-else>还没有个人签名哦~</text>
		</view>
		<!-- 选项栏 -->
		<view class="flex align-center px-7 py-2">
			<u-grid col="4" :border="border" @click="gridClick">
				<u-grid-item name="item1" :index="0">
					<!-- <u-badge :count="self.cards" :offset="[20, 30]"></u-badge> -->
					<u-icon name="bookmark" :size="46"></u-icon>
					<view class="grid-text">帖子</view>
				</u-grid-item>
				<u-grid-item :index="1">
					<!-- <u-badge :count="self.topics" :offset="[20, 30]"></u-badge> -->
					<u-icon name="tags" :size="46"></u-icon>
					<view class="grid-text">话题</view>
				</u-grid-item>
				<u-grid-item :index="2">
					<!-- <u-badge :count="self.topics" :offset="[20, 30]"></u-badge> -->
					<u-icon name="order" :size="46"></u-icon>
					<view class="grid-text">活动</view>
				</u-grid-item>
				<u-grid-item :index="3">
					<u-badge :count="self.critics" :offset="[20, 30]"></u-badge>
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
				<text class="font-md font-weight-bold text-danger">{{self.points}}</text>
				<text class="font text-muted">自然种子</text>
			</view>
			<view class="flex-1 flex flex-column align-center justify-center">
				<text class="font-md font-weight-bold text-info">{{self.ratio}}%</text>
				<text class="font text-muted">权益比例</text>
			</view>
			<view class="flex-1 flex flex-column align-center justify-center">
				<text class="font-md font-weight-bold text-warning">{{self.cashs}}</text>
				<text class="font text-muted">现金账户</text>
			</view>
		</view>
		<uni-list-item title="我的订单" showExtraIcon @click="toOrderList">
			<text slot="icon" class="iconfont icon-bianji1"></text>
		</uni-list-item>
		<uni-list-item title="种子商城" showExtraIcon @click="toShop">
			<text slot="icon" class="iconfont icon-caidan"></text>
		</uni-list-item>
		<uni-list-item title="个人主页" showExtraIcon @click="openSpace(getUserinfo.id)">
			<text slot="icon" class="iconfont icon-huiyuanvip"></text>
		</uni-list-item>
		<uni-list-item title="申请公司/机构号" showExtraIcon @click="toCompany">
			<text slot="icon" class="iconfont icon-guanyuwomen "></text>
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
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onLoad() {},
		onShow() {
			this.init()
			this.getSelfDetail()
		},
		data() {
			return {
				border: false,
				self: {},
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
				// uni.switchTab({
				// 	url: '../index/index'
				// })
			},
			cardClick(e) {
				
			}, // authFinsh(e) {
			// 	console.log('------', e)
			// }
			//获取个人信息
			getSelfDetail() {
				this.$u.api.getSelfDetail({
					uid: this.getUserinfo.id
				}).then(res => {
					this.self = res.data
				})
			},
			//去编辑个人信息
			toSelf() {
				if (this.getNeedAuth) {
					this.auth()
					return
				}
				uni.navigateTo({
					url: '../user-userinfo/user-userinfo'
				})
			},
			toShop() {
				this.$refs.uToast.show({
					type: 'success',
					title: '敬请期待'
				})
			},
			toCompany(){
				if(this.getUserinfo.companyId){
					this.$refs.uToast.show({
						type: 'success',
						title: '您已经绑定公司/机构'
					})
					return
				}
				if (this.getNeedAuth) {
					this.auth()
					return
				}
				uni.navigateTo({
					url: '../company-apply/company-apply'
				})
			},
			toOrderList(){
				uni.navigateTo({
					url: '../order-list/order-list'
				})
			},
			gridClick(e){
				if(e == 0){
					uni.navigateTo({
						url: '../user-card/user-card'
					})
				}else if(e == 1){
					uni.navigateTo({
						url: '../user-topic/user-topic'
					})
				}else if(e == 2){
					uni.navigateTo({
						url: '../user-activity/user-activity'
					})
				}
				
			},
			// 到个人中心
			openSpace(uid) {
				uni.navigateTo({
					url: `../user-space/user-space?uid=${uid}`
				})
			},
		}
	}
</script>

<style>

</style>
