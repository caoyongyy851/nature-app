<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" title="建我的圈子" fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="px-2 pt-5">
			<view class="p-2" v-if="getUserinfo.companyId">
				<u-radio-group>
					<u-radio @change="sourceChange" v-for="(item, index) in sourceList" :key="index"
						:name="item.name" :disabled="item.disabled" shape="square" active-color="#fd5f40">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<view class="p-2 flex justify-around">
				<view class="px-3 py-1 rounded font-sm" :class="topic.type==1?'bg-main text-white':'border text-light-muted'" @click="chageType(coverCategory[0].topicType)">
					{{coverCategory[0].tagName}}
				</view>
				<view class="px-3 py-1 rounded-1 font-sm" :class="topic.type==2?'bg-main text-white':'border text-light-muted'" @click="chageType(coverCategory[1].topicType)">
					{{coverCategory[1].tagName}}
				</view>
				<view class="px-3 py-1 rounded-1 font-sm" :class="topic.type==3?'bg-main text-white':'border text-light-muted'" @click="chageType(coverCategory[2].topicType)">
					{{coverCategory[2].tagName}}
				</view>
				<view class="px-3 py-1 rounded-1 font-sm" :class="topic.type==4?'bg-main text-white':'border text-light-muted'" @click="chageType(coverCategory[3].topicType)">
					{{coverCategory[3].tagName}}
				</view>
			</view>
			<view class="p-2">
				<u-input v-model="topic.title" trim="true" placeholder="请输入标题~" maxlength="200" />
			</view>
			<view class="p-2">
				<u-input v-model="topic.detail" type="textarea" trim="true" placeholder="写点东西吧~" maxlength="5000" />
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传封面" />
				</view>
				<htz-image-upload :max="1" :compress="true" quality="10" :action="getImgBase + '/nature/front/topicFileImg'" :headers="headers"
					name="file" :chooseNum="1" v-model="coverList" @uploadSuccess="successCover" mediaType="image">
				</htz-image-upload>
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传照片" />
				</view>
				<htz-image-upload :max="9" :compress="true" quality="10" :action="getImgBase + '/nature/front/topicFileImg'" :headers="headers"
					name="file" :chooseNum="9" v-model="imgList" @uploadSuccess="successImg" mediaType="image">
				</htz-image-upload>
			</view>
			<view class="fixed-bottom">
				<button @click="topicConfirm" class="font btn-main text-main textanimated faster"
					hover-class="bounceIn">
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
			uni.getStorage({
				key: 'add-play',
				success: (res) => {
					if (res.data) {
						let store = JSON.parse(res.data)
						console.log(store)
						this.topic = store.topic
						if(store.coverList.length > 0){
							this.coverList = store.coverList
						}
						if(store.imgList.length > 0){
							this.imgList = store.imgList
						}

					}
				}
			})
			if(e.type){
				this.topic.type = e.type
			}
			this.init()
		},
		data() {
			return {
				topic: {
					type: 0,
					title: "",
					detail: "",
					image: "",
					cover: ""
				},
				headers: {
					'Authorization': 'wx ' + uni.getStorageSync('token')
				},
				sourceList: [{
						name: '以个人',
						disabled: false
					},
					{
						name: '以机构',
						disabled: false
					}
				],
				coverList: [],
				imgList: [],
				showBack: false,
				coverCategory: [],
			}
		},
		computed: {
			...mapGetters(['getImgBase','getUserinfo'])
		},
		onLoad() {
			this.init();
		},
		methods: {
			init() {
				this.$u.api.getTopicCover().then(res => {
					this.coverCategory = res.data
				})
			},
			chageType(type){
				this.topic.type = type
			},
			successImg(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.imgList.push(this.getImgBase + res.imgUrl)
				}
			},
			successCover(e) {
				var res = JSON.parse(e.data);
				if (res.code === 200) {
					this.coverList.push(this.getImgBase + res.imgUrl)
				}
			},
			topicConfirm() {
				if (!this.topic.type) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '类型没选择哦~'
					})
					return
				}
				if (!this.topic.title) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '标题没填哦~'
					})
					return
				}
				if (!this.topic.detail) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '简单写点内容吧~'
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
				this.topic.cover = this.coverList.map(e => {
					return e.replace(this.getImgBase, "")
				}).join()
				if (this.imgList.length > 0) {
					this.topic.image = this.imgList.map(e => {
						return e.replace(this.getImgBase, "")
					}).join()
				}
				this.$u.api.createTopic(this.topic).then(res => {
					if (res.code === 200) {
						uni.removeStorage({
							key: 'add-play'
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
								beforePage.onLoad({
									type: that.topic.type
								}) // 执行上一页的onLoad方法
							}
						})
					}
				})
			},
			sourceChange(e) {
				if (e == '以个人') {
					this.topic.source = 0
				} else if (e == '以机构') {
					this.topic.source = 1
				}
			},
			clickLeft() {
				let that = this
				if ((that.topic.detail != '' || that.topic.title != '') && !that.showBack) {
					uni.showModal({
						content: '是否要保存为草稿',
						showCancel: true,
						cancelText: '不保存',
						confirmText: '保存',
						success(res) {
							if (res.confirm) {
								uni.setStorage({
									key: 'add-play',
									data: JSON.stringify({
										topic: that.topic,
										coverList: that.coverList,
										imgList: that.imgList,
									})
								})
							} else {
								uni.removeStorage({
									key: 'add-play'
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
			}
		}
	}
</script>

<style>

</style>
