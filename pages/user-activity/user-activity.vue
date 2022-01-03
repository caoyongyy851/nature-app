<template>
	<view>
		<template v-if="activityList.length > 0">
		<u-toast ref="uToast" />
			<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in activityList" :key="item.id"
				@click="click" @open="open" :options="options" @content-click="contentClick">
				<view class="m-2 flex">
					<view class="">
						<image mode="aspectFill" class="rounded" style="height: 150rpx; width: 150rpx;"
							:src="getImgBase + item.img" />
					</view>
					<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
					<view class="flex-column flex-1 ml-2">
						<view class="font-md">
							<text class="">{{ item.title }}</text>
						</view>
						<view class="mt-1 font text-muted "
							style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
							<text class="">{{ item.detail }}</text>
						</view>
						<view class="mt-1 font flex justify-between" v-if="item.activityStatus == 1">
							<text class="text-muted">人数：{{item.perLimit}}/{{item.person}}</text>
							<text class="text-main">进行中</text>
						</view>
						<view class="mt-1 font flex justify-between" v-else>
							<text class="text-muted">人数：{{item.perLimit}}/{{item.person}}</text>
							<text class="text-muted">已结束</text>
						</view>
					</view>
				</view>
			</u-swipe-action>
		</template>
		<template v-else>
			<view class="flex align-center justify-center" style="margin-top: 400rpx;">
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
		</template>
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
				queryParam: {
					pageNum: 1,
					pageSize: 999
				},
				activityList: [],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [{
						text: '修改活动',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
							text: '参与玩主',
							style: {
								backgroundColor: '#8afab2'
							}
						},
					{
						text: '删除活动',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			}
		},
		onLoad() {
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			init() {
				this.$u.api.getActivityByUid(this.queryParam).then(res => {
					this.activityList = res.data
				})
			},
			click(index, index1) {
				if (index1 == 2) {
					this.$u.api.deleteActivity({
						id: this.activityList[index].id
					}).then(res => {
						if (res.code == 200) {
							this.activityList.splice(index, 1);
							this.$refs.uToast.show({
								type: 'success',
								title: res.msg
							})
						} else {
							this.$refs.uToast.show({
								type: 'warning',
								title: res.msg
							})
						}
					})
				}else if(index1 == 0){
					// 修改
					uni.navigateTo({
						url: `../modify-activity/modify-activity?id=${this.activityList[index].id}`
					})
				}else if(index1 == 1){
					// 详情
					uni.navigateTo({
						url: `../user-activity-list/user-activity-list?id=${this.activityList[index].id}`
					})
				}
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.activityList[index].show = true;
				this.activityList.map((val, idx) => {
					if (index != idx) this.activityList[idx].show = false;
				})
			},
			contentClick(e) {
				uni.navigateTo({
					url: `../activity-detail/detail?id=${this.activityList[e].id}`
				})
			}

		}
	}
</script>

<style>

</style>
