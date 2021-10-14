<template>
	<view class="p-2">
		<!-- 头像昵称 | 关注 -->
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<!-- 头像 -->
				<image :src="item.avatar" class="rounded-circle mr-2" @click="openSpace"
					style="width: 65rpx;height: 65rpx;" lazy-load>
				</image>
				<!-- 昵称 | 发布时间 -->
				<view class="flex flex-column">
					<view class="font" style="line-height: 1.5;">
						{{item.nickname}}
					</view>
					<text class="font-small text-light-muted" style="line-height: 1.5;">{{item.newstime}}</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view @click="follow" v-if="!item.isFollow" 
				class="flex align-center justify-center rounded bg-main text-white animated faster"
				style="width: 90rpx; height: 50rpx;" hover-class="pulse">
				关注
			</view>
		</view>
		<!-- 标题 -->
		<view class="my-1 font-md" @click="openDetail">
			{{item.title}}
		</view>
		<!-- 图片 -->
		<image  @click="openDetail" v-if="item.titlepic" :src="item.titlepic" class="rounded w-100" mode="widthFix"></image>
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<view @click="doSupport('support')" class="flex align-center justify-center flex-1 animated faster" hover-class="pulse text-main"
			:class="item.support.type === 'support' ? 'support-active' : ''">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.supportCount > 0 ? item.support.supportCount:'顶'}}</text>
			</view>
			<view @click="doSupport('unsupport')" class="flex align-center justify-center flex-1 animated faster" hover-class="pulse text-main"
			:class="item.support.type === 'unsupport' ? 'support-active' : ''">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupportCount > 0 ? item.support.unsupportCount:'踩'}}</text>
			</view>
			<view @click="openDetail" class="flex align-center justify-center flex-1 animated faster" hover-class="pulse text-main">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.commentCount > 0 ? item.commentCount : '评论'}}</text>
			</view>
			<view @click="openDetail" class="flex align-center justify-center flex-1 animated faster" hover-class="pulse text-main">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.shareNum > 0 ? item.shareNum : '分享'}}</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods:{
			openSpace(){
				uni.navigateTo({
					url: '/pages/user-space/user-space'
				})
			},
			follow(){
				//通知父组件
				this.$emit('follow', this.index)
			},
			openDetail () {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${this.item.id}`
				})
			},
			doSupport(type) {
				this.$emit('doSupport', {
					index: this.index,
					type: type
				})
			}
		}
		
	}
</script>

<style>
	.support-active{
		color: #8aa167;
	}
</style>
