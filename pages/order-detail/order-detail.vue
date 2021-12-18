<template>
	<view>
		<u-modal v-model="refundModal.show" title="确认退款" :show-cancel-button="refundModal.cancelButton"
			@confirm="refundConfirm">
			<view class="mx-3 p-3 rounded-1 bg-white">
				<view class="flex">
					<view class="font" style="width: 30%;">
						退款原因
					</view>
					<view class="flex-1 font">
						<u-input placeholder="请输入反馈内容" v-model="refundModal.remark" type="textarea"
							:border="true" value="" />
					</view>
				</view>
			</view>
		</u-modal>
		<u-toast ref="uToast" />
		<view class="p-3 btn-main">
			<view class="flex justify-between">
				<view class="" style="font-size: 50rpx;">
					{{orderDetail.statusStr}}
				</view>
				<view class="">
					<u-icon size="20" name="rmb"></u-icon>
					<text class="font-weight-bold" style="font-size: 50rpx;">
						{{orderDetail.price}}
					</text>
				</view>
			</view>
			<view class="mt-1" v-if="orderDetail.status == 0">
				订单还未支付，请先支付订单
			</view>
			<view class="mt-1" v-if="orderDetail.status == 1">
				订单已支付，您的核销码为：<text class="font-md font-weight-bold">{{orderDetail.code}}</text>
			</view>
			<view class="mt-1" v-if="orderDetail.status == 2">
				订单已完成，欢迎下次再来
			</view>
			<view class="mt-1" v-if="orderDetail.status == 3">
				订单退款中，正在处理
			</view>
			<view class="mt-1" v-if="orderDetail.status == 4">
				订单已取消/退款
			</view>
		</view>
		<view class="p-3 bg-white">
			<view class="font-md">
				订单信息
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					玩场
				</view>
				<view class="font">
					{{orderDetail.placeName}} <text class="iconfont icon-jinru font text-light-muted"></text>
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					订单类型
				</view>
				<view class="font">
					预约订单
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					订单编号
				</view>
				<view class="font">
					{{orderDetail.orderNo}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					支付单号
				</view>
				<view class="font">
					{{orderDetail.paymentNo}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					计划用途
				</view>
				<view class="flex flex-row-reverse">
					<view class="fon-sm px-2 py-1 text-white bg-main rounded ml-1 item"
						v-for="(item, index) in orderDetail.useds" :key="index">
						{{item}}
					</view>
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					人数
				</view>
				<view class="font">
					{{orderDetail.person}}人
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					预定日期
				</view>
				<view class="font text-danger">
					{{orderDetail.planDate}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					手机号
				</view>
				<view class="font">
					{{orderDetail.phone}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					创建时间
				</view>
				<view class="font">
					{{orderDetail.createTime}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					付款时间
				</view>
				<view class="font">
					{{orderDetail.payTime}}
				</view>
			</view>
			<view class="flex align-center justify-between my-2">
				<view class="font text-light-muted">
					备注
				</view>
				<view class="font">
					{{orderDetail.remark}}
				</view>
			</view>
		</view>
		<view class="fixed-bottom bg-white flex flex-row-reverse p-3">
			<view class="btn-main px-3 py-1 rounded" @click="toPay" v-if="orderDetail.status==0">
				去支付
			</view>
			<view class="btn-main px-3 py-1 mr-2 rounded" @click="toCancel" v-if="orderDetail.status==0">
				取消订单
			</view>
			<view class="btn-main px-3 py-1 mr-2 rounded" @click="toRefund" v-if="orderDetail.status==1">
				退款
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: null,
				orderDetail: {},
				refundModal: {
					show: false,
					cancelButton: true,
					remark: ''
				}
			}
		},
		onLoad(e) {
			this.orderId = e.id
			this.init()
		},
		methods: {
			init() {
				this.$u.api.getOrderById({
					orderId: this.orderId
				}).then(res => {
					this.orderDetail = res.data
				})
			},
			toCancel() {
				this.$u.api.closeOrder({
					orderNo: this.orderDetail.orderNo
				}).then(res => {
					if (res.code == 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '订单取消成功'
						})
						this.init()
					} else {
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
					}
				})
			},
			toPay() {
				this.$u.api.createOrder({
					id: this.orderDetail.id
				}).then(res => {
					let that = this
					if (res.code == 200) {
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.timeStamp,
							nonceStr: res.data.nonceStr,
							package: res.data.packageValue,
							signType: res.data.signType,
							paySign: res.data.paySign,
							success: function(res) {
								that.init()
							},
							fail: function(err) {

							}
						});
					} else {
						this.$refs.uToast.show({
							type: 'error',
							title: res.msg
						})
					}
				})

			},
			toRefund() {
				this.refundModal.show = true
			},
			refundConfirm(){
				this.$u.api.refundAudit({
					orderId: this.orderDetail.id,
					orderNo: this.orderDetail.orderNo,
					remark: this.refundModal.remark,
					type: 0
				}).then(res => {
					if (res.code == 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '已提交退款申请'
						})
						this.init()
					} else {
						this.$refs.uToast.show({
							type: 'warning',
							title: res.msg
						})
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
