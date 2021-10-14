<template>
	<view>
		<uni-list-item title="账户安全">
		</uni-list-item>
		<uni-list-item title="编辑资料" @click="open('user-userinfo')">
		</uni-list-item>
		<uni-list-item title="清除缓存">
		</uni-list-item>
		<uni-list-item title="关于社区">
		</uni-list-item>
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			open(page) {
				uni.navigateTo({
					url: `../${page}/${page}`
				})
			}
		}
	}
</script>

<style>

</style>
