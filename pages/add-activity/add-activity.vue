<template>
	<view class="p-2">
		<u-toast ref="uToast" />
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
			<htz-image-upload :max="6" :action="getImgBase + '/nature/front/activityFile'" :headers="headers"
				name="file" :chooseNum="6" v-model="picList" @uploadSuccess="successImg" mediaType="image" :compress="true" quality="10">
			</htz-image-upload>
		</view>
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
	export default {
		onLoad() {
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
					imgs: ""
				},
				positionShow: false,
				timeShow: false,
				headers: {
					'Authorization': 'wx ' + uni.getStorageSync('token')
				},
				picList: []
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
																			that.activity.position = res.address + '' + res.name
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
				this.$u.api.createActivity(this.activity).then(res => {
					if (res.code === 200) {
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

		}
	}
</script>

<style>

</style>
