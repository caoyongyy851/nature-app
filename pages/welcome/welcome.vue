<template>
	<view>
		<image src="/static/nature/welcome.jpg" mode="aspectFill" style="width: 750rpx;" :style="'height: ' + scrollH + 'px'"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollH: 0,
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight
				}
			})
			setTimeout(()=> {
				uni.reLaunch({
				    url: '../play/play'
				})
			}, 4000)
		},
		methods: {

		}
	}
</script>

<style>

</style>
