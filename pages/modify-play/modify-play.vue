<template>
	<view class="">
		<u-toast ref="uToast" />
		<uni-nav-bar left-icon="back" @clickLeft="clickLeft" title="修改话题" fixed="true">
			<view slot="left" class="flex align-center mt-4">
				<image src="/static/logo.jpg" mode="aspectFill" style="width: 120rpx; height: 120rpx;"></image>
			</view>
		</uni-nav-bar>
		<view class="p-2">
			<view class="p-2 flex justify-around">
				<view class="px-3 py-1 rounded" :class="topic.type==1?'bg-main text-white':'border text-light-muted'"
					@click="chageType(1)">
					活动
				</view>
				<view class="px-3 py-1 rounded-1" :class="topic.type==2?'bg-main text-white':'border text-light-muted'"
					@click="chageType(2)">
					任务
				</view>
				<view class="px-3 py-1 rounded-1" :class="topic.type==3?'bg-main text-white':'border text-light-muted'"
					@click="chageType(3)">
					知识
				</view>
				<view class="px-3 py-1 rounded-1" :class="topic.type==4?'bg-main text-white':'border text-light-muted'"
					@click="chageType(4)">
					公益
				</view>
			</view>
			<view class="p-2">
				<u-input v-model="topic.title" trim="true" placeholder="请输入标题~" maxlength="500" />
			</view>
			<view class="p-2">
				<u-input v-model="topic.detail" type="textarea" trim="true" placeholder="写点东西吧~" maxlength="5000" />
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传封面" />
				</view>
				<htz-image-upload :max="1" :compress="true" quality="10"
					:action="getImgBase + '/nature/front/topicFileImg'" :headers="headers" name="file" :chooseNum="1"
					v-model="coverList" @uploadSuccess="successCover" mediaType="image">
				</htz-image-upload>
			</view>
			<view>
				<view class="px-2">
					<u-input disabled="true" placeholder="上传照片" />
				</view>
				<htz-image-upload :max="1" :compress="true" quality="10"
					:action="getImgBase + '/nature/front/topicFileImg'" :headers="headers" name="file" :chooseNum="1"
					v-model="imgList" @uploadSuccess="successImg" mediaType="image">
				</htz-image-upload>
			</view>
			<view class="fixed-bottom">
				<button @click="topicConfirm" class="font btn-main text-main textanimated faster"
					hover-class="bounceIn">
					确认修改</button>
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
				coverList: [],
				imgList: []
			}
		},
		computed: {
			...mapGetters(['getImgBase'])
		},
		onLoad(e) {
			// this.topic.type = e.type
			this.$u.api.getTopicDetailById({
				id: e.id
			}).then(res => {
				this.topic = res.data
				if (res.data.cover) {
					res.data.cover.split(",").map((item, index) => {
						this.coverList.push(this.getImgBase + item)
					})
				}

				if (res.data.image) {
					res.data.image.split(",").map((item, index) => {
						this.imgList.push(this.getImgBase + item)
					})
				}


			})
			this.init()
		},
		methods: {
			init() {

			},
			chageType(type) {
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
				delete this.topic.createTime
				this.$u.api.modifyTopic(this.topic).then(res => {
					if (res.code === 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '修改成功'
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
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
