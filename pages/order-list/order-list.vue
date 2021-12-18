<template>
	<view>
		<u-toast ref="uToast" />
		<view class="flex flex-column mb-3 shadow" v-for="(item, index) in orderList" :key="index" >
			<view class="" @click="toOrderDetail(item)">
				<view class="p-3 flex align-center justify-between bg-white">
					<view class="text-muted">
						订单编号：{{item.orderNo}}
					</view>
				
					<view class="font" :style="'color: '+getStatusColor(item.status)">
						{{item.statusStr}}
					</view>
				</view>
				<view class="flex flex-column">
					<view class="p-3 font-md flex align-center justify-between">
						<view class="">
							{{item.placeName}}
						</view>
						<view class="font" v-if="item.status == 1">
							核销码：<text class="font-md font-weight-bold">{{item.code}}</text>
						</view>
					</view>
					<view class="px-3 pb-3 flex align-center justify-between">
						<view class="font">
							预约日期：{{item.planDate}}
						</view>
						<view class="font">
							<u-icon name="rmb"></u-icon>{{item.price}}
						</view>
					</view>
				</view>
			</view>
			<view class="p-3 flex align-center justify-between bg-white">
				<view class="font">
					<u-icon name="coupon-fill" color="#cccccc"></u-icon> <text class="ml-1">预约单</text>
				</view>
				<view class="flex align-center">
					<view class="font px-3 py-1 rounded btn-main mr-2" v-if="item.status == 0" @click="toCancel(item)">
						取消订单
					</view>
					<view class="font px-3 py-1 rounded btn-main" v-if="item.status == 0" @click="toOrderDetail(item)">
						去支付
					</view>
					
					<view class="font px-3 py-1 rounded btn-main" v-if="item.status == 1" @click="toOrderDetail(item)">
						详情
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [],
				queryParam: {
					pageNum: 1,
					pageSize: 6
				},
				isBottom: false
			}
		},
		computed:{
			getStatusColor(){
				return function(status){
					if(status == 0){
						return '#dc3545'
					}else if(status == 1){
						return '#28a745'
					}else if(status == 2 || status == 3){
						return '#17a2b8'
					}else if(status == 4){
						return '#6c757d'
					}else {
						return ''
					}
				}
			}
		},
		onLoad() {
			// this.init()
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				this.$u.api.getOrderByUid(this.queryParam).then(res => {
					this.orderList = res.data
				})
			},
			toOrderDetail(item){
				uni.navigateTo({
					url: `../order-detail/order-detail?id=${item.id}`
				})
			},
			
			toCancel(item){
				this.$u.api.closeOrder({orderNo: item.orderNo}).then(res => {
					if(res.code == 200){
						this.$refs.uToast.show({
							type: 'success',
							title: '订单取消成功'
						})
						this.init()
					}else{
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
					}
					console.log(res.data)
				})
			},
			
		},
		onReachBottom() {
			if(!this.isBottom){
				this.queryParam.pageNum ++
				let newList = []
				this.$u.api.getOrderByUid(this.queryParam).then(res => {
					if(res.data.length > 0){
						newList = res.data
						this.orderList = [...this.orderList, ...newList]
					}else{
						this.isBottom = true
					}
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
