<template>
	<view>
		<view class="flex flex-row-reverse align-center px-4 py-2">
			<view @click="openMore" class="flex align-center font text-secondary animated faster" hover-class="bounceIn">
				更多<text class="iconfont icon-jinru"></text>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		props: {
			hotCate: Array
		},
		methods: {
			// 更多
			openMore () {
				uni.navigateTo({
					url: '../../pages/place-nav/place-nav'
				})
			},
			// 分类
			openDetail(e) {
				
			}
		}
	}
</script>

<style>
</style>
