<template>
	<view class="flex align-center flex-wrap w-100 px-2">
		<view class="mb-3" v-for="(item, index) in placeList" :key="index" style="width: 50%;" @click="open(item)">
			<view class="" class="flex-1 flex-column flex align-center justify-center">
				<image :src="getImgBase + item.images" mode="aspectFill" class="rounded" style="width: 320rpx; height: 320rpx;">
				</image>
			</view>

			<view class="flex flex-column justify-start" style="padding-left: 15rpx;">
				<view class="flex">
					<view class="mt-2 font-sm text-secondary mr-2" v-for="(item1, index1) in item.labelList">
						{{item1}}
					</view>
				</view>
				<view class="mt-2 font">
					{{item.name}}
				</view>
				<view class="mt-4">
					<text class="font">预约价：</text>
					<text class="font-sm text-main">¥</text>
					<text class="font-md text-main">{{item.planPrice}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		props: {
			placeList: Array
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			open(item) {
				uni.navigateTo({
					url: `/pages/place-detail/place-detail?id=${item.id}`
				})
			}
		}
	}
</script>

<style>
</style>
