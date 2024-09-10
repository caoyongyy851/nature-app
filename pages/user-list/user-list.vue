<template>
	<view class="">


		<template v-if="userList.length > 0">
			<view class="p-2 flex flex-wrap">
				<view class="flex flex-column align-center justify-center p-2" style="width: 177.5rpx;"
					v-for="(item,index) in userList" :key="index" @click="openSpace(item)">
					<view class="">
						<u-avatar :src="item.avatar" :size="100">
						</u-avatar>
					</view>
					<view class="" style="width: 120rpx;">
						<text class="font-md"
							style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.nickname ? item.nickname : '玩主'}}</text>
					</view>
					<view class="" style="width: 120rpx;">
						<text class="fon text-muted"
							style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.sign ? item.sign : '暂无简介'}}</text>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="flex align-center justify-center" style="margin-top: 400rpx;">
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				type: 0,
				userList: []
			}
		},
		onLoad(option) {
			this.id = option.id
			this.type = option.type
			if (this.type == 0) {
				uni.setNavigationBarTitle({
					title: '参与玩主'
				})
			} else if (this.type == 1) {
				uni.setNavigationBarTitle({
					title: '我的关注'
				})
			} else if (this.type == 2) {
				uni.setNavigationBarTitle({
					title: '我的粉丝'
				})
			} else if (this.type == 3) {
				uni.setNavigationBarTitle({
					title: '我的访客'
				})
			}
			this.init()
		},
		methods: {
			init() {
				if (this.type == 0) {
					this.$u.api.getTopicUserList({
						topicId: this.id
					}).then(res => {
						this.userList = res.data
					})
				} else if (this.type == 1) {
					this.$u.api.getFollower().then(res => {
						this.userList = res.data
					})
				} else if (this.type == 2) {
					this.$u.api.getFanser().then(res => {
						this.userList = res.data
					})
				} else if (this.type == 3) {
					this.$u.api.getCeller().then(res => {
						this.userList = res.data
					})
				}

			},
			openSpace(item) {
				uni.navigateTo({
					url: `../user-space/user-space?uid=${item.id}`
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}
</style>
