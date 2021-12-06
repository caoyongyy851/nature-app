<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" title="发帖子" fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.png" mode="aspectFill" style="width: 120rpx; height: 120rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="p-2">
			<view class="p-2" v-if="!selected">
				<u-input v-model="card.title" trim="true" placeholder="请输入标题~" maxlength="200" />
			</view>
			<view class="p-2">
				<u-input v-model="card.detail" type="textarea" trim="true" placeholder="写点东西吧~" maxlength="1000" />
			</view>
			<view class="p-2">
				<view class="flex justify-between text-muted" @click="toSelect">
					<view class="flex align-center font" v-if="!selected">
						<text class="iconfont icon-huati mr-1"></text>
						<text>选择活动、任务、知识、公益</text>
					</view>
					<view class="flex align-center font" v-else>
						<text class="iconfont icon-huati mr-1"></text>
						<text>{{selected.title}}</text>
					</view>
					<view class="font">
						<text class="iconfont icon-jinru"></text>
					</view>
				</view>
			</view>
			<view class="">
				<view class="p-2">
					<u-radio-group>
						<u-radio @change="radioChange" v-for="(item, index) in chooseList" :key="index"
							:name="item.name" :disabled="item.disabled" shape="square" active-color="#fd5f40">
							{{item.name}}
						</u-radio>
					</u-radio-group>
				</view>
				<view class="p-2" v-if="positionType == 1">
					<view class="flex justify-between text-muted" @click="positionShow = true">
						<view class="flex align-center font" v-if="!card.position1">
							<text>选择玩场~</text>
						</view>
						<view class="flex align-center font" v-else>
							<text>{{card.position1}}</text>
						</view>
						<view class="font">
							<text class="iconfont icon-jinru"></text>
						</view>
					</view>

				</view>
				<view class="p-2" v-if="positionType == 2">
					<view class="flex justify-between text-muted" @click="mapShow">
						<view class="flex align-center font" v-if="!card.position2">
							<text>选择地址~</text>
						</view>
						<view class="flex align-center font" v-else>
							<text>{{card.position2}}</text>
						</view>
						<view class="font">
							<text class="iconfont icon-jinru"></text>
						</view>
					</view>
				</view>
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传照片" />
				</view>
				<htz-image-upload :max="9" :action="getImgBase + '/nature/front/cardFileImg'" :headers="headers"
					name="file" :chooseNum="9" v-model="imgList" @uploadSuccess="successImg" mediaType="image" :compress="true"
					quality="10">
				</htz-image-upload>
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传视频" />
				</view>
				<htz-image-upload :max="1" :action="getImgBase + '/nature/front/cardFileVid'" :headers="headers"
					name="file" :chooseNum="1" v-model="videoList" mediaType="video" @uploadSuccess="successVid">
				</htz-image-upload>
			</view>
			<view class="fixed-bottom">
				<button @click="cardConfirm" class="font btn-main text-main textanimated faster" hover-class="bounceIn">
					上传</button>
			</view>
			<u-picker mode="selector" v-model="positionShow" :range="selector" range-key="name" :default-selector="[0]"
				@confirm="positionConfirm"></u-picker>
			<u-picker mode="time" v-model="timeShow" @confirm="timeConfirm"></u-picker>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		onLoad(e) {
			this.topicId = e.topicId
			if (this.topicId) {
				this.selected = {
					id: e.topicId,
					title: e.title
				}
			}
			this.init()
		},
		onShow() {
			let pages = getCurrentPages();
			let currPage = pages[pages.length - 1];
			if (currPage.data.selected == undefined || currPage.data.selected == '') {} else {
				this.selected = currPage.data.selected
			}
		},
		data() {
			return {
				selected: null,
				topicId: '',
				positionType: 0,
				choose: "",
				chooseList: [{
						name: '玩场',
						disabled: false
					},
					{
						name: '地址',
						disabled: false
					}
				],
				card: {
					title: "",
					detail: "",
					position: "",
					position1: "",
					position2: "",
					pid: 0,
					time: "",
					imgs: "",
					topicId: ""
				},
				positionShow: false,
				timeShow: false,
				selector: [],
				headers: {
					'Authorization': 'wx ' + uni.getStorageSync('token')
				},
				videoList: [],
				imgList: []
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
					this.imgList.push(this.getImgBase + res.imgUrl)
				}
			},
			successVid(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.videoList.push(this.getImgBase + res.vidUrl)
				}
			},
			positionConfirm(index) {
				this.card.pid = this.selector[index].id
				this.card.position1 = this.selector[index].name
			},
			timeConfirm(time) {
				this.card.time = time.year + '-' + time.month + '-' + time.day
			},
			cardConfirm() {

				if (!this.card.detail) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '简单写点内容吧~'
					})
					return
				}
				if (!this.selected) {
					if (!this.card.position1 && !this.card.position2) {
						this.$refs.uToast.show({
							type: 'warning',
							title: '选择一个地点吧~'
						})
						return
					}
					if (!this.card.title) {
						this.$refs.uToast.show({
							type: 'warning',
							title: '标题没填哦~'
						})
						return
					}
				} else {
					this.card.topicId = this.selected.id
				}
				if (this.imgList.length <= 0) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '上传一些美照吧~'
					})
					return
				}
				if (this.videoList.length > 0) {
					this.card.vids = this.videoList.map(e => {
						return e.replace(this.getImgBase, "")
					}).join()
					this.card.vidsNum = this.videoList.length
				}
				this.card.imgs = this.imgList.map(e => {
					return e.replace(this.getImgBase, "")
				}).join()
				this.card.imgsNum = this.imgList.length

				if (this.positionType == 1) {
					this.card.position = this.card.position1
					delete this.card.position1
					delete this.card.position2
				} else if (this.positionType == 2) {
					this.card.position = this.card.position2
					this.card.pid = 0
					delete this.card.position1
					delete this.card.position2
				}
				this.$u.api.createCard(this.card).then(res => {
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
								beforePage.onLoad({
									id: that.topicId
								}); // 执行上一页的onLoad方法
							}
						});
					}
				})
			},
			mapShow() {
				let that = this
				uni.chooseLocation({
					success: function(res) {
						that.card.position2 = res.address + '' + res.name
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
																		) => {	that.card.position2 = res.address + '' + res.name}
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
			radioChange(e) {
				if (e == '玩场') {
					this.positionType = 1
				} else if (e == '地址') {
					this.positionType = 2
				}
			},
			clickLeft() {
				uni.navigateBack({
					delta: 1
				});
			},
			toSelect() {
				uni.navigateTo({
					url: '../topic-select/topic-select'
				})
			}
		}
	}
</script>

<style>

</style>
