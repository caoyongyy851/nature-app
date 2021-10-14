<template>
	<view class="">


		<!-- 头部 -->
		<view class="flex align-center border-bottom p-3">
			<image src="/static/default.jpg" style="width: 180rpx; height: 180rpx;" class="rounded-circle"></image>
			<view class="pl-3 flex flex-column flex-1">
				<view class="flex align-center justify-center pb-1">
					<view class="flex flex-column align-center flex-1">
						<text class="font-md font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex flex-column align-center flex-1">
						<text class="font-md font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
					<view class="flex flex-column align-center flex-1">
						<text class="font-md font-weight-bold">1</text>
						<text class="font text-muted">粉丝</text>
					</view>
				</view>
				<view class="flex justify-center align-center">
					<button type="primary" size="mini" class="bg-main" style="width: 400rpx;">
						关注
					</button>
				</view>
			</view>
		</view>
		<!-- tab -->
		<view class="flex align-center" style="height: 100rpx;">
			<view class="flex-1 flex align-center justify-center" v-for="(item, index) in tabBars" :key="index"
			:class="index === tabIndex ? 'font-lg font-weight-bold text-main' : 'font-md'" @click="changeTab(index)">
				{{item.name}}
			</view>
		</view>
		<template v-if="tabIndex === 0">
			<view>主页</view>
		</template>
		<template v-else>
			<view class="px-3">
				<view class="flex py-3 border-bottom">
					<view class="pr-2">
						<image src="/static/demo/datapic/2.jpg" mode="aspectFill" class="rounded" style="width: 220rpx;height: 180rpx;"></image>
					</view>
					<view class="flex-1 flex flex-column justify-between">
						<view class="">
							<text class="font-lg text-dark">我是标题我是标题我是标题我是标题我是标题</text>
						</view>
						<view class="pb-1">
							<text class="font font-weight-lighter text-light-muted">发布于 2021-08-28</text>
						</view>
					</view>
				</view>
				
				<view class="flex py-3 border-bottom">
					<view class="pr-2">
						<image src="/static/demo/datapic/2.jpg" mode="aspectFill" class="rounded" style="width: 220rpx;height: 180rpx;"></image>
					</view>
					<view class="flex-1 flex flex-column justify-between">
						<view class="">
							<text class="font-lg text-dark">我是标题我是标题我是标题我是标题我是标题</text>
						</view>
						<view class="pb-1">
							<text class="font font-weight-lighter text-light-muted">发布于 2021-08-28</text>
						</view>
					</view>
				</view>
			</view>
			
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 1,
				tabBars: [
					{name: "主页"},
					{name: "动态"}
				]
			}
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
