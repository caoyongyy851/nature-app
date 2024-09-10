<template>
	<view>
		<u-toast ref="uToast" />
		<template v-if="orderList.length > 0 || joinList.length > 0">
			<view class="">
				<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#021d49"
					inactive-color="#dcdcdc" font-size="30"></u-tabs>
			</view>
			<view class="" v-if="current == 0">
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
			<view class="" v-if="current == 1">
				<view class="p-2 mb-3 bg-white rounded-1"  v-for="(item,index) in joinList" :key="index">
					<view class="flex align-center justify-between">
						<view class="mr-3">
							<u-avatar
								:src="item.avatar"
								:size="100">
							</u-avatar>
						</view>
						<view class="flex-1 flex justify-between">
							<view class="flex-1">
								<view class="">
									<text class="font-md"
										style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.nickname}}</text>
								</view>
								
								<view class="">
									<text class="fon text-muted"
										style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.sign ? item.sign : '暂无简介'}}</text>
								</view>
							</view>
							<view class="">
								<view class="font" :style="'color: ' + getStatusColor(item.status)">
									{{item.statusStr}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex align-center justify-between"  @click="toDetail(item)">
						<view class="" style="margin-right: 130rpx;">
						</view>
						<view class="flex-1">
							<view class="my-2">
								<text class="font text-muted">活动名称：{{item.title}}</text>
							</view>
							<view class="my-2">
								<text class="font text-muted">联系方式：{{item.phone}}</text>
							</view>
							<view class="my-2">
								<text class="font text-muted">参与人数：{{item.person}}人</text>
							</view>
							<view class="my-2">
								<text class="font text-muted">玩主备注：{{item.remark}}</text>
							</view>
							<view class="my-2">
								<text class="font text-muted">报名时间：{{item.joinTime}}</text>
							</view>
							<view class="my-2" v-if="item.payType == 1">
								<text class="font text-muted">报名金额：<text class="text-danger font-weight-bold">{{item.price}}</text></text><u-icon name="rmb"></u-icon>
							</view>
						</view>
					</view>
					
					<view class="p-3 flex align-center justify-between bg-white">
						<view class="font">
							<u-icon name="coupon-fill" color="#cccccc"></u-icon> <text class="ml-1">预约单</text>
						</view>
						<view class="flex align-center">
							<view class="font px-3 py-1 rounded btn-main mr-2"  @click="refundActOrder(item)" v-if="item.status == 1 || item.status == 5">
								取消报名
							</view>
							<view class="font px-3 py-1 rounded btn-main"  @click="toActOrderDetail(item)" v-if="item.status == 0">
								去支付
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="flex align-center justify-center" style="margin-top: 400rpx;">
				<u-empty text="订单为空" mode="list"></u-empty>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [],
				joinList: [],
				current: 0,
				queryParam: {
					pageNum: 1,
					pageSize: 6
				},
				isBottom: false,
				list: [{
					name: '玩场预定'
				}, {
					name: '活动报名'
				}],
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
				this.$u.api.getMyJoin().then(res => {
					this.joinList = res.data
				})
			},
			toOrderDetail(item){
				uni.navigateTo({
					url: `../order-detail/order-detail?id=${item.id}`
				})
			},
			change(index) {
				this.current = index;
			},
			toDetail(item){
				uni.navigateTo({
					url: `../activity-detail/detail?id=${item.aid}`
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
				})
			},
			refundActOrder(item){
				// 取消报名
				this.$u.api.refundActOrder({
					id: item.orderId
				}).then(res => {
					if (res.code === 200) {
					this.$refs.uToast.show({
						type: 'success',
						title: ' 取消报名成功~'
					})
					this.init()
					}else{
						this.$refs.uToast.show({
							type: 'warning',
							title: ' 取消报名失败~'
						})
					}
				})
			},
			toActOrderDetail(item){
				uni.navigateTo({
					url: `../act-order-pay/act-order-pay?orderId=${item.orderId}`
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
		},
		
	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}
</style>
