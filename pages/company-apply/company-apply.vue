<template>
	<view class="p-2">
		<u-toast ref="uToast" />
		<view class="p-2">
			<u-input v-model="company.companyName" type="text" trim="true" placeholder="公司名称~" :disabled="isComfirm" maxlength="200" />
		</view>
		<view class="p-2">
			<view class="flex justify-between text-muted " @click="mapShow" v-if="!isComfirm">
				<view class="flex align-center font" v-if="!company.address">
					<text>公司地址~</text>
				</view>
				<view class="flex align-center font" v-else>
					<text>{{company.address}}</text>
				</view>
				<view class="font">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="flex justify-between text-muted" v-else>
				<view class="flex align-center font" v-if="!company.address">
					<text>公司地址~</text>
				</view>
				<view class="flex align-center font" v-else>
					<text>{{company.address}}</text>
				</view>
				<view class="font">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
		</view>
		<view class="p-2">
			<u-input v-model="company.phone" type="number" trim="true" placeholder="公司电话~" maxlength="20" :disabled="isComfirm"/>
		</view>
		<view class="p-2">
			<u-input v-model="company.remark" type="textarea" trim="true" placeholder="公司简介~" maxlength="1000" :disabled="isComfirm"/>
		</view>
		<view>
			<view class="px-2">
				<u-input disabled="true" placeholder="上传LOGO" />
			</view>
			<htz-image-upload :max="1" :compress="true" quality="10" :action="getImgBase + '/nature/nocheck/avatar'"
				name="file" :chooseNum="1" v-model="coverList" @uploadSuccess="successCover" mediaType="image">
			</htz-image-upload>
		</view>
		<view class="fixed-bottom">
			<button @click="companyConfirm" class="font btn-main text-main animated faster" hover-class="bounceIn"  v-if="!isComfirm">
				提交申请</button>
			<view class="font-md flex align-center justify-center p-2 btn-main text-main" v-if="isComfirm && company.status == 0">
				正在审核中
			</view>
			<view class="font-md flex align-center justify-center p-2 btn-main text-main" v-if="isComfirm && company.status == 1">
				审核通过
			</view>
			<view class="font-md flex align-center justify-center p-2 btn-main text-main" v-if="isComfirm && company.status == 2">
				申请失败
			</view>
		</view>
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
				company: {
					companyName: "",
					address: "",
					phone: null,
					remark: ""
				},
				isComfirm: false,
				addressShow: false,
				coverList: [],
			}
		},
		computed: {
			...mapGetters(['getImgBase'])
		},
		methods: {
			init() {
				this.$u.api.getCompanyByUid().then(res => {
					if(res.code == 200){
						if(res.data){
							this.isComfirm = true
							this.company = res.data
						}
						
					}
				})
			},
			mapShow() {
				let that = this
				uni.chooseLocation({
					success: function(res) {
						that.company.address = res.address + '' + res.name
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
																			that.company.address = res.address + '' + res.name
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
			successCover(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.coverList.push(this.getImgBase + res.imgUrl)
				}
			},
			companyConfirm() {
				if (!this.company.companyName) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '公司名称没填哦~'
					})
					return
				}
				if (!this.company.address) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没选择地址哦~'
					})
					return
				}
				if (!this.company.remark) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '简单写点内容吧~'
					})
					return
				}
				if (!this.company.phone) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没填公司电话哦~'
					})
					return
				}
				if (this.coverList.length <= 0) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '上传一张封面吧~'
					})
					return
				}
				this.company.cover = this.coverList.join()
				this.$u.api.createCompany(this.company).then(res => {
					if (res.code === 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '提交成功'
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
