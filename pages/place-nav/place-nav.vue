<template>
	<view>
		<u-toast ref="uToast" />
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
						<view class="flex align-center flex-wrap w-100 px-2">
							<place-list :placeList="item.list"></place-list>
						</view>
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
	import placeList from '@/components/place/place-list.vue';
	import loadMore from '@/components/common/load-more.vue';
	export default {
		components: {
			placeList,
			loadMore
		},
		data() {
			return {
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
				activityList: [],
			}
		},
		// 监听原生导航栏按钮事件
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add-input/add-input'
			})
		},
		onLoad() {
			// this.$u.api.getActivityList(this.queryParams)
			// .then(res=>{
			// 	console.log(res)
			// })
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			})
			// 根据选项获取列表
			this.getData()
		},
		methods: {
			// 获取数据
			getData() {
				let arr = []
				for (let i = 0; i < this.tabBars.length; i++) {
					let obj
					if (i == 0) {
						obj = {
							loadmore: "上拉加载更多",
							list: [{
									id: 1,
									name: "上海湿地公园",
									label: "公园",
									price: "50",
									cover: "/static/demo/datapic/42.jpg",
								},
								{
									id: 2,
									name: "上海湿地公园",
									label: "公园",
									price: "50",
									cover: "/static/demo/datapic/42.jpg",
								},
								{
									id: 3,
									name: "上海湿地公园",
									label: "公园",
									price: "50",
									cover: "/static/demo/datapic/42.jpg",
								},
							]
						}
					} else {
						obj = {
							loadmore: "上拉加载更多",
							list: []
						}
					}

					arr.push(obj)
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
			doSupport(e) {
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶成功' : '踩成功'
				// 之前没有顶和踩
				if (item.support.type === '') {
					item.support[e.type + 'Count']++
				}
				// 之前顶过
				else if (item.support.type === 'support' && e.type === 'unsupport') {
					item.support.supportCount--
					item.support.unsupportCount++
				}
				// 之前踩过
				else if (item.support.type === 'unsupport' && e.type === 'support') {
					item.support.supportCount++
					item.support.unsupportCount--
				}
				item.support.type = e.type
				uni.showToast({
					title: msg
				});
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
			}

		}
	}
</script>

<style>


</style>
