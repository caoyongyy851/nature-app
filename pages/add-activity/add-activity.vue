<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" title="发活动" fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.png" mode="aspectFill" style="width: 200rpx; height: 150rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="mt-4"></view>
		<u-notice-bar mode="horizontal" :list="narList"></u-notice-bar>
		<view class="p-2">
			<u-input v-model="activity.title" type="text" trim="true" placeholder="活动标题~" maxlength="200" />
		</view>

		<view class="p-2">
			<u-input v-model="activity.detail" type="textarea" trim="true" placeholder="活动详情~" maxlength="1000" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.label" type="text" trim="true" placeholder="标签多个空格隔开~" maxlength="200" />
		</view>
		<view class="p-2">
			<view class="flex justify-between text-muted" @click="mapShow">
				<view class="flex align-center font" v-if="!activity.position">
					<text>选择地址~</text>
				</view>
				<view class="flex align-center font" v-else>
					<text>{{activity.position}}</text>
				</view>
				<view class="font">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		<view class="p-2">
			<u-input v-model="activity.time" disabled="true" placeholder="活动报名截止时间~" @click="timeShow = true" />
		</view>
		<view class="p-2 flex align-center justify-between">
			<text class="font text-light-muted">活动人数</text>
			<u-number-box v-model="activity.person"></u-number-box>
		</view>
		
		<view>
			<view class="px-2">
				<u-input disabled="true" placeholder="上传活动照片" />
			</view>
			<htz-image-upload :max="6" :action="getImgBase + '/nature/front/activityFile'" :headers="headers"
				name="file" :chooseNum="6" v-model="picList" @uploadSuccess="successImg" mediaType="image"
				:compress="true" quality="10">
			</htz-image-upload>
		</view>
		<view>
			<view class="px-2">
				<u-input disabled="true" placeholder="上传二维码" />
			</view>
			<htz-image-upload :max="1" :action="getImgBase + '/nature/front/activityFile'" :headers="headers"
				name="file" :chooseNum="1" v-model="qrcodeList" @uploadSuccess="successQrImg" mediaType="image"
				:compress="true" quality="10">
			</htz-image-upload>
		</view>
		<view style="height: 100rpx;"></view>
		<view class="fixed-bottom">
			<button @click="activityConfirm" class="font btn-main text-main animated faster" hover-class="bounceIn">
				上传</button>
		</view>
		<u-picker mode="region" v-model="positionShow" @confirm="positionConfirm"
			:default-region='["上海市", "市辖区", "崇明区"]'></u-picker>
		<u-picker mode="time" v-model="timeShow" @confirm="timeConfirm"></u-picker>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components:{
			uniNavBar
		},
		onLoad() {
			uni.getStorage({
				key: 'add-activity',
				success: (res) => {
					if (res.data) {
						let store = JSON.parse(res.data)
						this.activity = store.activity
						if(store.picList.length > 0){
							this.picList = store.picList
						}
						
					}
				}
			})
			this.init()
		},
		data() {
			return {
				activity: {
					title: "",
					detail: "",
					position: "",
					label: "",
					person: null,
					time: "",
					imgs: "",
					
				},
				positionShow: false,
				timeShow: false,
				headers: {
					'Authorization': 'wx ' + uni.getStorageSync('token')
				},
				picList: [],
				qrcodeList: [],
				showBack: false,
				narList: ['自然玩主作为平台，只提供活动信息发布功能，活动的一切法律风险，由活动发起方负责，活动过程中的一切纠纷，与自然玩主平台无关。']
			}
		},
		computed: {
			...mapGetters(['getImgBase'])
		},
		methods: {
			init() {
				this.$u.api.getPositionList().then(res => {
					this.selector = res.data
				})
			},

			successImg(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.picList.push(this.getImgBase + res.imgUrl)
				}
			},
			successQrImg(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.qrcodeList.push(this.getImgBase + res.imgUrl)
				}
			},

			timeConfirm(time) {
				this.activity.time = time.year + '-' + time.month + '-' + time.day
			},
			mapShow() {
				let that = this
				uni.chooseLocation({
					success: function(res) {
						that.activity.position = res.address + '' + res.name
					},
					fail: () => {
						uni.getSetting({
							success: function(res) {
								var statu = res.authSetting;
								if (!statu['scope.userLocation']) {
									uni.showModal({
										title: '是否授权当前位置',
										content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
										success(tip) {
											if (tip.confirm) {
												uni.openSetting({
													success: function(data) {
														if (data.authSetting[
																"scope.userLocation"
															] === true) {
															uni.showToast({
																title: '授权成功',
																icon: 'success',
																duration: 1000
															})
															//授权成功之后，再调用chooseLocation选择地方
															setTimeout(
																function() {
																	uni.chooseLocation({
																		success: (
																			res
																		) => {
																			that.activity
																				.position =
																				res
																				.address +
																				'' +
																				res
																				.name
																		}
																	})
																}, 1000)
														}
													}
												})
											} else {
												uni.showToast({
													title: '授权失败',
													icon: 'none',
													duration: 1000
												})
											}
										}
									})
								}
							}
						})
					}
				})
			},
			activityConfirm() {
				if (!this.activity.title) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '标题没填哦~'
					})
					return
				}
				if (!this.activity.detail) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '简单写点内容吧~'
					})
					return
				}
				if (!this.activity.person) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没填写参与活动人数~'
					})
					return
				}
				if (!this.activity.position) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没选择地区哦~'
					})
					return
				}

				if (!this.activity.time) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没选择截止时间哦~'
					})
					return
				}
				if (this.picList.length <= 0) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '上传一些美照吧~'
					})
					return
				}
				if (this.activity.label) {
					this.activity.label = this.activity.label.replace(/\s+/g, ",")
				}
				this.activity.img = this.picList.map(e => {
					return e.replace(this.getImgBase, "")
				}).join()
				if(this.qrcodeList.length > 0){
					this.activity.qrcodeUrl = this.qrcodeList.map(e => {
						return e.replace(this.getImgBase, "")
					}).join()
				}
				this.$u.api.createActivity(this.activity).then(res => {
					if (res.code === 200) {
						uni.removeStorage({
							key: 'add-activity'
						})
						this.$refs.uToast.show({
							type: 'success',
							title: '上传成功'
						})
						let that = this
						let pages = getCurrentPages(); // 当前页面
						let beforePage = pages[pages.length - 2]; // 上一页
						uni.navigateBack({
							success: function() {
								beforePage.onLoad() // 执行上一页的onLoad方法
							}
						})
					}
				})
			},
			
			clickLeft() {
				let that = this
				if ((that.activity.detail != '' || that.activity.title != '') && !that.showBack) {
					uni.showModal({
						content: '是否要保存为草稿',
						showCancel: true,
						cancelText: '不保存',
						confirmText: '保存',
						success(res) {
							if (res.confirm) {
								uni.setStorage({
									key: 'add-activity',
									data: JSON.stringify({
										activity: that.activity,
										picList: that.picList
									})
								})
							} else {
								uni.removeStorage({
									key: 'add-activity'
								})
							}
							uni.navigateBack({
								delta: 1
							});
							return
						}
					})
				} else {
					this.showBack = true
					uni.navigateBack({
						delta: 1
					});
				}
			},
		}
	}
</script>

<style>

</style>
