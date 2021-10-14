<template>
	<view class="">
		<view class="mx-3 py-3 border-top" v-for="(item, index) in comments" :key="index">
			<view class="flex align-center justify-between">
				<view class="flex align-center">
					<image :src="item.avatar" mode="aspectFill" style="width: 70rpx; height: 70rpx;" class="rounded-circle">
					</image>
					<view class="ml-2">
						<text class="font">{{item.nickname}}</text>
					</view>
					<view class="ml-3">
						<text class="text-light-muted font-sm">{{item.createTime}}</text>
					</view>
				</view>
				<view class="flex align-center">
					<view class="animated faster" hover-class="bounceIn" @click="commentAppreciate(item)">
						<text class="font-sm text-muted mr-1">{{item.likes > 0 ? item.likes : ''}}</text>
						<text class="iconfont font icon-dianzan2 mr-3"
							:class="item.isZan ? 'text-danger' : 'text-muted'"></text>
					</view>
					<view class="animated faster" hover-class="bounceIn">
						<text class="iconfont font icon-guanyuwomen mr-3"></text>
					</view>
				</view>
			</view>
			<view class="font text-muted" style="margin-left: 105rpx;">
				<text>{{item.content}}</text>
			</view>
		</view>
		<!-- END -->
		<view class="flex align-center justify-center mt-5">
			<image src="/static/common/end.png" mode="aspectFill" style="width: 150rpx; height: 20rpx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				comments: [],
			}
		},
		onLoad(e) {
			this.id = e.id
			this.init()
		},
		methods: {
			init(){
				this.$u.api.getAllCommentsByCid({cid: this.id}).then(res => {
					this.comments = res.data
				})
			},
			//评论点赞
			commentAppreciate(e) {
				console.log(e)
				if (e.isZan) {
					// 取消点赞
					this.$u.api.commentAppreciateCancel({
						cid: e.id
					}).then(res => {
						if (res.code === 200) {
							e.isZan = false
							e.likes --
						}
					})
				} else {
					// 点赞
					this.$u.api.commentAppreciate({
						cid: e.id
					}).then(res => {
						if (res.code === 200) {
							e.isZan = true
							e.likes ++
						}
					})
				}
			}
		}
	}
</script>

<style>
</style>
