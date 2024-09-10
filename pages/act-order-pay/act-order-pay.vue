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
					活动名称：
				</view>
				<view class="font text-main">
					{{orderDetail.actName}}
				</view>
			</view>



			<view class="flex align-center justify-between mb-3">
				<view class="font">
					报名人数：
				</view>
				<view class="font text-main">
					{{orderDetail.person}}人
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
		<view class="fixed-bottom m-3" v-if="!isPay">
			<button class="bg-main text-white font" @click="readyPay">微信支付（{{orderDetail.price}}）元</button>
		</view>
		<view class="fixed-bottom m-3" v-else>
			<button class="btn-main text-main font" @click="toCancel">支付成功（返回上级）</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: '',
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
				this.$u.api.getActOrderById({
					orderId: this.orderId
				}).then(res => {
					this.orderDetail = res.data
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
				this.$u.api.payActOrder({
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
				let that = this
				let pages = getCurrentPages(); // 当前页面
				let beforePage = pages[pages.length - 2]; // 上一页
				uni.navigateBack({
					delta: 1,
					success: function() {
						beforePage.onLoad({
							id: that.orderDetail.actId
						}); // 执行上一页的onLoad方法
					}
				});
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
