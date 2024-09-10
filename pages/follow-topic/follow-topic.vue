<template>
	<view>
		<view class="flex align-center flex-wrap w-100 p-1">
			<view class="m-1 rounded shadow-sm position-relative" style="width: 47.26%; background-color: #ffffff;"
				v-for="(item, index) in topicList" :key="index">
				<view class="flex-1 flex-column flex justify-center viewContainer" @click="openDetail(item)">
					<image :src="getImgBase + item.cover" mode="aspectFill" style="width: 100%; height: 200rpx;"
						class="rounded-top">
					</image>

					<view class="flex avatar">
						<!-- 头像 -->
						<image :src="item.avatar" class="rounded-circle mr-1"
							style="width: 55rpx;height: 55rpx;border: 1rpx solid #ffffff;" lazy-load>
						</image>

						<!-- 昵称 | 发布时间 -->
						<view class="flex flex-column">
							<text class="font-sm text-white"
								style="width:117rpx;text-overflow :ellipsis;white-space :nowrap;overflow : hidden;">
								发布者
							</text>
							<text
								class="font-sm text-muted">{{item.companyName ? item.companyName:item.nickname}}</text>
						</view>
					</view>
				</view>

				<view class="flex flex-column justify-start px-2 my-3">
					<view class="mt-2">
						<text class="font text-dark"
							style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.title}}</text>
					</view>
					<view class="mt-1 font-sm text-muted font-weight-light"
						style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">
						{{item.detail}}
					</view>
				</view>
				<view v-if="item.sign == 1" class="bg-main rounded-circle shadow position-absolute"
					style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				topicList: [],
				queryParam: {
					pageNum: 1,
					pageSize: 6
				}
			}
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				this.$u.api.getFollowTopicList(this.queryParam).then(res => {
					this.topicList = res.data
				})
			},
			openDetail(item) {
				uni.navigateTo({
					url: `../play-detail/play-detail?id=${item.id}`
				})
			}
		}
	}
</script>

<style>
	.viewContainer {
		position: relative;
	}

	.avatar {
		position: absolute;
		left: 20rpx;
		bottom: -32rpx;
	}

	page {
		background-color: #f7f7f7;
	}
</style>
