<template>
	<view class="">
		<view class="">
			<uni-nav-bar left-icon="back" @clickLeft="clickLeft" :fixed="true" title="选一个">
				<view slot="left" class="flex align-center mt-4">
					<image src="/static/logo.jpg" mode="aspectFill" style="width: 120rpx; height: 120rpx;"></image>
				</view>
			</uni-nav-bar>
		</view>
		<view class="m-3">
			<view class="font-md font-weight-bolder mb-2">
				热门
			</view>
			<view class="flex flex-column rounded-1 bg-white p-3">
				<view class="flex align-center justify-between" @click="selectedTopic(topicSelect.best[0])">
					<view class="flex align-center">
						<image src="/static/nature/huati.png" class="mr-2" mode="aspectFill"
							style="width: 50rpx; height: 50rpx;">
						</image>
						<view class="font">
							{{topicSelect.best[0].title}}
						</view>
					</view>
					<view class="font-sm text-muted">
						{{topicSelect.best[0].nickname}}
					</view>
				</view>
			</view>

			<view class="font font-weight-bolder my-4">
				所有活动、任务、知识、公益
			</view>
			<view class="flex flex-column rounded-1 bg-white">
				<view class="flex align-center justify-between p-3 border-bottom"
					v-for="(item, index) in topicSelect.select" :key="index" @click="selectedTopic(item)">
					<view class="flex align-center">
						<image src="/static/nature/huati.png" class="mr-2" mode="aspectFill"
							style="width: 50rpx; height: 50rpx;">
						</image>
						<view class="font">
							{{item.title}}
						</view>
					</view>
					<view class="font-sm text-muted">
						{{item.nickname}}
					</view>
				</view>

			</view>
		</view>
		<view class="fixed-bottom">
			<button @click="clear" class="font btn-main text-main textanimated faster" hover-class="bounceIn">
				清空选择</button>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				topicSelect: {}
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				this.$u.api.getTopicSelect().then(res => {
					this.topicSelect = res.data
				})
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			selectedTopic(item) {
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]
				let prevPage = pages[pages.length - 2]
				prevPage.$vm.selected = item
				uni.navigateBack({
					delta: 1
				})
			},
			clear(){
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]
				let prevPage = pages[pages.length - 2]
				prevPage.$vm.selected = null
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F5F5F5!important;
	}
</style>
