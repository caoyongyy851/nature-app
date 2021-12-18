<template>
	<view>
		<u-toast ref="uToast" />
		<view class="m-3 p-3 bg-white rounded-1">
			<view class="flex align-center justify-between mb-3">
				<view class="font">
					订单编号：
				</view>
				<view class="font text-main">
					{{orderDetail.orderNo}}
				</view>
			</view>
			<view class="flex align-center justify-between mb-3">
				<view class="font">
					玩场：
				</view>
				<view class="font text-main">
					{{orderDetail.placeName}}
				</view>
			</view>

			<view class="flex align-center justify-between mb-3">
				<view class="font">
					计划用途：
				</view>
				<view class="flex flex-row-reverse">
					<view class="fon-sm text-white bg-main rounded ml-1 item" v-for="(item, index) in orderDetail.useds"
						:key="index">
						{{item}}
					</view>
				</view>
			</view>

			<view class="flex align-center justify-between mb-3">
				<view class="font">
					人数：
				</view>
				<view class="font text-main">
					{{orderDetail.person}}人
				</view>
			</view>

			<view class="flex align-center justify-between mb-3">
				<view class="font">
					预定日期：
				</view>
				<view class="font text-main">
					{{orderDetail.planDate}}
				</view>
			</view>

			<view class="flex align-center justify-between mb-3">
				<view class="font">
					手机号：
				</view>
				<view class="font text-main">
					{{orderDetail.phone}}
				</view>
			</view>
			<view class="flex align-center justify-between" :class="isPay ? 'mb-3' : ''">
				<view class="font">
					其他（备注）：
				</view>
				<view class="font text-main">
					{{orderDetail.remark}}
				</view>
			</view>
			<view class="flex align-center justify-between" v-if="isPay">
				<view class="font">
					支付金额：
				</view>
				<view class="font text-main">
					{{orderDetail.price}}元
				</view>
			</view>
		</view>
		<view class="mx-3 px-1">
			<u-checkbox v-model="docCheck" shape="circle" size="20">
				<text class="font-sm text-dark">已阅读并同意</text>
				<text class="font-sm text-primary" @click="openDoc">《场地使用规则责任书》</text>
			</u-checkbox>

		</view>
		<view class="fixed-bottom m-3" v-if="!isPay">
			<button :disabled="!docCheck" class="bg-main text-white font"
				@click="readyPay">微信支付（{{orderDetail.price}}）元</button>
		</view>
		<view class="fixed-bottom m-3" v-else>
			<button class="btn-main text-main font" @click="toCancel">支付成功（返回上级）</button>
		</view>
		<u-popup width="700" height="1000" closeable v-model="docShow" mode="center" border-radius="14">
			<view class="">
				<view class="font font-weight-bolder flex align-center justify-center m-2">
					场地责任书
				</view>
				<view class="font text-muted p-2" style="line-height: 1.8;">
					{{document.detail}}
				</view>
				<view class="">
					<u-line color="#cccccc"></u-line>
				</view>
				<view class="flex align-center justify-around mb-2 p-2">
					<view class="font text-muted" @click="toCancel">
						取消
					</view>
					<view class="font text-primary" @click="toSource">
						同意
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: '',
				docShow: false,
				document: {},
				docCheck: false,
				orderDetail: {},
				isPay: false
			}
		},
		onLoad(e) {
			this.orderId = e.orderId
			this.init()
		},
		methods: {
			init() {
				this.$u.api.getOrderById({
					orderId: this.orderId
				}).then(res => {
					this.orderDetail = res.data
				})
				this.$u.api.getDoc({
					type: 1
				}).then(res => {
					this.document = res.data
				})
			},
			openDoc() {
				this.docShow = true
			},
			toCancel() {
				this.docShow = false
			},
			toSource() {
				this.docCheck = true
				this.docShow = false
			},
			// 预支付
			readyPay() {
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
								that.isPay = true
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
			toCancel() {
				uni.navigateBack({
					delta: 1
				})
			}
		}

	}
</script>

<style>
	page {
		background-color: #f7f7f7;
	}

	.item {
		/* background-color: rgba(0, 0, 0, 0.05); */
		padding: 5rpx 10rpx;

	}
</style>
