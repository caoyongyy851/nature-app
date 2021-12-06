<template>
	<view>
		<u-toast ref="uToast" />
		<!-- 轮播图 -->
		<view class="p-2">
			<u-swiper :list="imgList" height="300" @click="swiperClick"></u-swiper>
		</view>
		<scroll-view scroll-x :scroll-into-view="scrollInto" scroll-with-animation
			class="scroll-row border-bottom border-light-secondary" style="height: 100rpx;">
			<view class="scroll-row-item px-5 py-2 font-md" v-for="(item, index) in tabBars" :key="index"
				:id="'tab'+index" :class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''"
				@click="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height: ' + scrollH +'px'" @change="onChangeTab">
			<swiper-item v-for="(item, index) in newsList" :key="index">
				<scroll-view :style="'height: ' + scrollH +'px'" scroll-y="true" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<place-list :placeList="item.list"></place-list>
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					<template v-else>
						<no-thing></no-thing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import placeList from '@/components/place/place-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			placeList,
			loadMore
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		data() {
			return {
				imgList: [],
				scrollH: 600,
				scrollInto: "",
				tabIndex: 0,
				tabBars: [{
						name: "推荐"
					},
					{
						name: "关注"
					}
				],
				newsList: [],
				queryParams: {
					pageNum: 1,
					pageSize: 10
				},
			}
		},
		// 监听原生导航栏按钮事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add-input/add-input'
			})
		},
		onLoad() {
			this.$u.api.getSwiperActivity().then(res => {
				this.imgList = res.data.map(item => {
					return {
						id: item.id,
						image: this.getImgBase + item.img.split(",")[0]
					}
				})
			})
			this.$u.api.getPlaceCategoryList()
				.then(res => {
					this.tabBars = res.data
					console.log(JSON.stringify(res.data));
					this.getData()
				})
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
			// 根据选项获取列表

		},
		methods: {
			// 获取数据
			getData() {
				let arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj
					this.$u.api.getPlaceByCategoryId({
						categoryId: this.tabBars[i].id
					}).then(res => {
						arr.push({
							loadmore: "没有更多了...",
							list: res.data
						})
					})
				}
				this.newsList = arr
			},
			// 滑动监听
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 切换选项
			changeTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				this.tabIndex = index
				this.scrollInto = 'tab' + index
			},
			//关注
			follow(e) {
				this.list[e].isFollow = true
				uni.showToast({
					title: '关注成功'
				})
				// this.$refs.uToast.show({
				// 	type: 'success',
				// 	title: '关注成功'
				// })

			},
			// 上拉加载更多
			loadmore(index) {
				let item = this.newsList[index]
				if (item.loadmore === '没有更多了...') {
					return
				}
				item.loadmore = '加载中...'
				setTimeout(() => {
					item.list = [...item.list, ...item.list]
					item.loadmore = '上拉加载更多'
				}, 1000)
			},
			toPlaceDetal(item) {
				uni.navigateTo({
					url: `/pages/place-detail/place-detail?id=${item.id}`
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

		}
	}
</script>

<style>
	page {
		background-color: #F7F7F7;
	}
</style>
