<template>
	<view>
		<template v-if="cardList.length > 0">
		<u-toast ref="uToast" />
			<view class="m-2 p-2 flex bg-white rounded-1" :key="index" v-for="(item, index) in cardList">
				<view class="" @click="contentClick(item)">
					<image mode="aspectFill" class="rounded" style="height: 150rpx; width: 150rpx;" :src="getImgBase + item.imgs" />
				</view>
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="flex flex-column justify-between flex-1 ml-2">
					<view class="font-md" @click="contentClick(item)">
						<text class="">{{ item.title }}</text>
					</view>
					
					<view @click="contentClick(item)" class="mt-1 font text-muted font-weight-light" style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">
						<text class="">{{ item.detail }}</text>
					</view>
					<view class="mt-1 font flex justify-between">
						<view class="">
						</view>
						<view class="flex align-center">
							<view class="font-sm px-1 py-1 rounded btn-main" 
								@click="del(item)">
								删除
							</view>
						</view>
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
				cardList: [],
				disabled: false,
				btnWidth: 180,
				show: false,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
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
				this.$u.api.getCardByUid(this.queryParam).then(res => {
					this.cardList = res.data
				})
			},
			
			del(item){
				this.$u.api.deleteCard({
					id: item.id
				}).then(res => {
					if (res.code == 200) {
						this.init()
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
			},
			// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
			open(index) {
				// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
				// 原本为'false'，再次设置为'false'会无效
				this.cardList[index].show = true;
				this.cardList.map((val, idx) => {
					if (index != idx) this.cardList[idx].show = false;
				})
			},
			contentClick(e){
				uni.navigateTo({
					url: `../detail/detail?id=${e.id}`
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
