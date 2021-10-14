<template>
	<view>
	<!-- 	<uni-nav-bar left-icon="back" statusBar :border="false" @click-left="goBack">
			<view class="flex align-center justify-center w-100">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar> -->
		<!-- 文本域 -->
		<textarea v-model="content" value="" placeholder="写点东西吧~" class="uni-textarea p-2" />
		<!-- 上传图片 -->
		<uploadImage :show="show" ref="uploadImage" :list="imageList" @change="change"></uploadImage>
		<!-- 底部操作栏 -->
		<view class="fixed-bottom flex align-center justify-between p-2" style="height: 85rpx;">
			<view class="flex align-center justify-between">
				<view class="iconfont icon-caidan footer-btn animated faster" hover-class="bounceIn">
				</view>
				<view class="iconfont icon-huati footer-btn animated faster" hover-class="bounceIn">
				</view>
				<view @click="iconClickEvent('uploadImage')" class="iconfont icon-tupian footer-btn animated faster" hover-class="bounceIn">
				</view>
			</view>

			<view class="bg-main text-white rounded flex align-center justify-center animated faster"
				hover-class="bounceIn" style="width: 140rpx; height: 60rpx;">
				发送
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import uploadImage from '@/components/common/upload-image.vue'
	export default {
		components: {
			uniNavBar,
			uploadImage
		},
		// 计算属性
		computed: {
			show() {
				return this.imageList.length > 0
			}
		},
		// 页面加载
		onLoad() {
			uni.getStorage({
				key: "add-input",
				success: res => {
					if(res.data){
						let result = JSON.parse(res.data)
						this.content = result.content
						this.imageList = result.imageList
					}
				}
			})
		},
		onBackPress() {
			if ((this.content !== '' || this.imageList.length > 0) && !this.showBack) {
				uni.showModal({
					content: '是否要保存为草稿？',
					showCancel: true,
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						// 点击确定
						if (res.confirm) {
							this.store()
						}else{
							// 清除缓存
							uni.removeStorage({
								key: 'add-input'
							})
						}
						//手动执行返回
						uni.navigateBack({
							delta: 1
						})
					}
				})
				this.showBack = true
				return true
			}
		},
		data() {
			return {
				content: "",
				imageList: [],
				showBack: false
			}
		},
		methods: {
			// 底部图标点击事件
			iconClickEvent(e) {
				switch (e) {
					case 'uploadImage':
					this.$refs.uploadImage.chooseImage()
					break
				}
			},
			// 返回上一步
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			changeImage(e) {
				this.imageList = e
			},
			// 保存操作
			store() {
				let obj = {
					content: this.content,
					imageList: this.imageList
				}
				uni.setStorage({
					key: 'add-input',
					data: JSON.stringify(obj)
				})
			},
			
		},
	}
</script>

<style>
	.footer-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50rpx;
		width: 85rpx;
		height: 85rpx;
	}
</style>
