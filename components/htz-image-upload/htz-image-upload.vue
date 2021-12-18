<template>
	<view class="htz-image-upload-list">
		<view class="htz-image-upload-Item" v-for="(item,index) in uploadLists" :key="index">
			<view class="htz-image-upload-Item-video" v-if="(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(item))">
				<video :disabled="false" :controls="false" :src="item">
					<cover-view class="htz-image-upload-Item-video-fixed" @click="previewVideo(item)"></cover-view>

					<cover-view class="htz-image-upload-Item-del-cover" v-if="remove && previewVideoSrc==''"
						@click="imgDel(index)">×</cover-view>

				</video>

			</view>

			<image v-else :src="item" @click="imgPreview(item)"></image>

			<view class="htz-image-upload-Item-del" v-if="remove" @click="imgDel(index)">×</view>
		</view>
		<view class="htz-image-upload-Item htz-image-upload-Item-add" v-if="uploadLists.length<max && add"
			@click="chooseFile">
			+
		</view>
		<view class="preview-full" v-if="previewVideoSrc!=''">
			<video :autoplay="true" :src="previewVideoSrc" :show-fullscreen-btn="false">
				<cover-view class="preview-full-close" @click="previewVideoClose"> ×
				</cover-view>
			</video>
		</view>
		<!--用于图片压缩的canvas画布，不在页面中展示，且id固定不可变-->
		<!--  visibility: 'hidden','position':'absolute', 'z-index': '-1', left: '-10000rpx',top:'-10000rpx' -->
		<!-- <canvas canvas-id="canvas"
			:style="{width:cWidth+'px',height:cHeight+'px',visibility: 'hidden','position':'absolute', 'z-index': '-1', left: '-10000rpx',top:'-10000rpx'}"></canvas> -->
		<!--画布结束-->
		<helang-compress ref="helangCompress"></helang-compress>
	</view>
</template>

<script>
	// import {getLessLimitSizeImage} from './common.js'
	import helangCompress from './helang-compress/helang-compress.vue';
	export default {
		components: {
			helangCompress
		},
		name: 'htz-image-upload',
		props: {
			max: { //展示图片最大值
				type: Number,
				default: 1,
			},
			chooseNum: { //选择图片数
				type: Number,
				default: 9,
			},
			name: { //发到后台的文件参数名
				type: String,
				default: 'file',
			},
			remove: { //是否展示删除按钮
				type: Boolean,
				default: true,
			},
			add: { //是否展示添加按钮
				type: Boolean,
				default: true,
			},
			disabled: { //是否禁用
				type: Boolean,
				default: false,
			},
			sourceType: { //选择照片来源 【ps：H5就别费劲了，设置了也没用。不是我说的，官方文档就这样！！！】
				type: Array,
				default: () => ['album', 'camera'],
			},
			action: { //上传地址
				type: String,
				default: '',
			},
			headers: { //上传的请求头部
				type: Object,
				default: () => {},
			},
			formData: { //HTTP 请求中其他额外的 form data
				type: Object,
				default: () => {},
			},
			compress: { //是否需要压缩
				type: Boolean,
				default: true,
			},
			quality: { //压缩质量，范围0～100
				type: Number,
				default: 80,
			},
			value: { //受控图片列表
				type: Array,
				default: () => [],
			},
			uploadSuccess: {
				default: (res) => {
					return {
						success: false,
						url: ''
					}
				},
			},
			mediaType: { //文件类型 image/video/all
				type: String,
				default: 'image',
			},
			maxDuration: { //拍摄视频最长拍摄时间，单位秒。最长支持 60 秒。 (只针对拍摄视频有用)
				type: Number,
				default: 60,
			},
			camera: { //'front'、'back'，默认'back'(只针对拍摄视频有用)
				type: String,
				default: 'back',
			},

		},
		data() {
			return {
				uploadLists: [],
				mediaTypeData: ['image', 'video', 'all'],
				previewVideoSrc: '',
				params: {
					maxSize: 600,
					fileType: 'png',
					quality: 1,
					minSize: 400
				}
				// cWidth: 0,
				// cHeight: 0,
				// cw: uni.getSystemInfoSync().windowWidth
			}
		},
		mounted: function() {
			console.log(this.cw)
			this.$nextTick(function() {
				this.uploadLists = this.value;
				if (this.mediaTypeData.indexOf(this.mediaType) == -1) {
					uni.showModal({
						title: '提示',
						content: 'mediaType参数不正确',
						showCancel: false,
						success: function(res) {
							if (res.confirm) {
								//console.log('用户点击确定');
							} else if (res.cancel) {
								//console.log('用户点击取消');
							}
						}
					});
				}
			});
		},
		watch: {
			value(val, oldVal) {
				//console.log('value',val, oldVal)
				this.uploadLists = val;
			},
		},
		methods: {
			previewVideo(src) {
				this.previewVideoSrc = src;
			},
			previewVideoClose() {
				this.previewVideoSrc = ''
				console.log('previewVideoClose', this.previewVideoSrc)
			},
			imgDel(index) {
				uni.showModal({
					title: '提示',
					content: '您确定要删除么?',
					success: (res) => {
						if (res.confirm) {
							let delUrl = this.uploadLists[index]
							this.uploadLists.splice(index, 1)
							this.$emit("input", this.uploadLists);
							this.$emit("imgDelete", {
								del: delUrl,
								tempFilePaths: this.uploadLists
							});
						} else if (res.cancel) {}
					}
				});
			},
			imgPreview(index) {

				var imgData = this.uploadLists.filter(item => /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(item)) //只预览图片的
				console.log("imgData : " + imgData)
				uni.previewImage({
					urls: imgData,
					current: index,
					loop: true,
				});


			},
			chooseFile() {
				if (this.disabled) {
					return false;
				}
				switch (this.mediaTypeData.indexOf(this.mediaType)) {
					case 1: //视频
						this.videoAdd();
						break;
					case 2: //全部
						uni.showActionSheet({
							itemList: ['相册', '视频'],
							success: (res) => {
								if (res.tapIndex == 1) {
									this.videoAdd();
								} else if (res.tapIndex == 0) {
									this.imgAdd();
								}
							},
							fail: (res) => {
								console.log(res.errMsg);
							}
						});
						break;
					default: //图片
						this.imgAdd();
						break;
				}
			},
			videoAdd() {
				console.log('videoAdd')
				let nowNum = Math.abs(this.uploadLists.length - this.max);
				let thisNum = (this.chooseNum > nowNum ? nowNum : this.chooseNum) //可选数量
				uni.chooseVideo({
					compressed: this.compress,
					sourceType: this.sourceType,
					camera: this.camera,
					maxDuration: this.maxDuration,
					success: (res) => {
						console.log('videoAdd', res)
						console.log(res.tempFilePath)
						this.chooseSuccessMethod([res.tempFilePath], 1)
					}
				});
			},
			imgAdd() {
				console.log('imgAdd')
				let nowNum = Math.abs(this.uploadLists.length - this.max);
				let thisNum = (this.chooseNum > nowNum ? nowNum : this.chooseNum) //可选数量
				console.log('nowNum', nowNum)
				console.log('thisNum', thisNum)
				// #ifdef APP-PLUS
				if (this.sourceType.length > 1) {
					uni.showActionSheet({
						itemList: ['拍摄', '从手机相册选择'],
						success: (res) => {
							if (res.tapIndex == 1) {
								this.appGallery(thisNum);
							} else if (res.tapIndex == 0) {
								this.appCamera();
							}
						},
						fail: (res) => {
							console.log(res.errMsg);
						}
					});
				}
				if (this.sourceType.length == 1 && this.sourceType.indexOf('album') > -1) {
					this.appGallery(thisNum);
				}

				if (this.sourceType.length == 1 && this.sourceType.indexOf('camera') > -1) {
					this.appCamera();
				}
				// #endif
				//#ifndef APP-PLUS
				uni.chooseImage({
					count: thisNum,
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有original
					sourceType: this.sourceType,
					success: (res) => {
						this.chooseSuccessMethod(res.tempFilePaths, 0)
					}
				});
				// #endif
			},
			appCamera() {
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				cmr.captureImage((path) => {
						this.chooseSuccessMethod([path], 0)
					},
					(error) => {
						console.log("Capture image failed: " + error.message)
					}, {
						resolution: res,
						format: fmt
					}
				);
			},
			appGallery(maxNum) {
				plus.gallery.pick((res) => {
					this.chooseSuccessMethod(res.files, 0)
				}, function(e) {
					//console.log("取消选择图片");
				}, {
					filter: "image",
					multiple: true,
					maximum: maxNum
				});
			},
			chooseSuccessMethod(filePaths, type) {
				if (this.action == '') { //未配置上传路径
					this.$emit("chooseSuccess", filePaths, type); //filePaths 路径 type 0 为图片 1为视频
				} else {
					if (type == 1) {
						this.imgUpload(filePaths);
					} else {
						if (this.compress) { //设置了需要压缩
							this.imgCompress(filePaths);
						} else {
							this.imgUpload(filePaths);
						}
					}

				}
			},
			imgCompress(tempFilePaths) {
				uni.showLoading({
					title: '压缩中...'
				});
				let that = this
				let limitSize = 100; //大小限制2048kb
				let drawWidth = uni.getSystemInfoSync().windowWidth
				let compressImgs = [];
				let results = [];
				tempFilePaths.forEach((item, index) => {
					uni.getImageInfo({
						src: item,
						success: res => {
							var cW = res.width,
								cH = res.height,
								rat = 1.1
							that.cWidth = cW
							that.cHeight = cH
							console.log('宽：', res.width)
							console.log('高：', res.height)
						}
					})
					compressImgs.push(new Promise((resolve, reject) => {
						// #ifndef H5	
						// ----------------------------------------------------------------------------------------------//
						// uni.compressImage({
						// 	src: item,
						// 	quality: this.quality,
						// 	success: res => {
						// 		console.log('compressImage', res.tempFilePath)
						// 		results.push(res.tempFilePath)
						// 		resolve(res.tempFilePath)
						// 	},
						// 	fail: (err) => {
						// 		//console.log(err.errMsg);
						// 		reject(err);
						// 	},
						// 	complete: () => {
						// 		//uni.hideLoading();
						// 	}
						// })
						// ----------------------------------------------------------------------------------------------//
						// uni.showLoading({
						// 	title: '图片压缩中...',
						// 	mask: true
						// }) //不需要你可以删掉
						// getLessLimitSizeImage(that, 'canvas', item, 150, drawWidth, (resPath) => {
						// 	uni.getFileInfo({
						// 		filePath: resPath,
						// 		success: res => {
						// 			console.log('压缩后: '+res.size/1024 + 'kb')
						// 		}
						// 	})
						// 	uni.getImageInfo({
						// 		src:resPath,
						// 		success: res => {
						// 			console.log('压缩后:',res.width, res.height)
						// 		}
						// 	})
						// 	uni.hideLoading(); //不需要你可以删掉
						// 	results.push(resPath)
						// 	resolve(resPath)
						// })
						// ----------------------------------------------------------------------------------------------//
						uni.showLoading({
							title: '压缩中',
							mask: true
						});
						this.$refs.helangCompress.compress({
							src: item,
							maxSize: this.params.maxSize,
							fileType: this.params.fileType,
							quality: this.params.quality,
							minSize: this.params.minSize
						}).then((res) => {
							uni.hideLoading();
							uni.showToast({
								title: "压缩成功",
								icon: "success"
							})
							this.compressPaths = [res];
							results.push(res)
							resolve(res)
						}).catch((err) => {
							uni.hideLoading();
							uni.showToast({
								title: "压缩失败",
								icon: "none"
							})
						})


						// #endif
						// // #ifdef H5
						// this.canvasDataURL(item, {
						// 	quality: this.quality / 100
						// }, (base64Codes) => {
						// 	results.push(base64Codes);
						// 	resolve(base64Codes);
						// })
						// // #endif
					}))
				})
				Promise.all(compressImgs) //执行所有需请求的接口
					.then((results) => {
						uni.hideLoading();
						console.log('imgUpload', results)
						this.imgUpload(results);
					})
					.catch((res, object) => {
						uni.hideLoading();
					});
			},
			imgUpload(tempFilePaths) {
				uni.showLoading({
					title: '上传中'
				});
				console.log('imgUpload', tempFilePaths)
				let uploadImgs = [];
				tempFilePaths.forEach((item, index) => {
					uploadImgs.push(new Promise((resolve, reject) => {
						console.log(index, item)
						const uploadTask = uni.uploadFile({
							url: this.action, //仅为示例，非真实的接口地址
							filePath: item,
							name: this.name,
							fileType: 'image',
							formData: this.formData,
							header: this.headers,
							success: (uploadFileRes) => {
								if (typeof this.uploadSuccess == 'function') {
									if (this.uploadSuccess(uploadFileRes).success) {
										this.value.push(this.uploadSuccess(uploadFileRes)
											.url)
										this.$emit("input", this.uploadLists);
									}
								}
								resolve(uploadFileRes);
								this.$emit("uploadSuccess", uploadFileRes);
							},
							fail: (err) => {
								console.log(err);
								//uni.hideLoading();
								reject(err);
								this.$emit("uploadFail", err);
							},
							complete: () => {}
						});
					}))
				})
				Promise.all(uploadImgs) //执行所有需请求的接口
					.then((results) => {
						uni.hideLoading();
					})
					.catch((res, object) => {
						uni.hideLoading();
						this.$emit("uploadFail", res);
					});

			},
			// canvasDataURL(path, obj, callback) {
			// 	var img = new Image();
			// 	img.src = path;
			// 	img.onload = function() {
			// 		var that = this;
			// 		// 默认按比例压缩
			// 		var w = that.width,
			// 			h = that.height,
			// 			scale = w / h;
			// 		w = obj.width || w;
			// 		h = obj.height || (w / scale);
			// 		var quality = 0.8; // 默认图片质量为0.8
			// 		//生成canvas
			// 		var canvas = document.createElement('canvas');
			// 		var ctx = canvas.getContext('2d');
			// 		// 创建属性节点
			// 		var anw = document.createAttribute("width");
			// 		anw.nodeValue = w;
			// 		var anh = document.createAttribute("height");
			// 		anh.nodeValue = h;
			// 		canvas.setAttributeNode(anw);
			// 		canvas.setAttributeNode(anh);
			// 		ctx.drawImage(that, 0, 0, w, h);
			// 		// 图像质量
			// 		if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
			// 			quality = obj.quality;
			// 		}
			// 		// quality值越小，所绘制出的图像越模糊
			// 		var base64 = canvas.toDataURL('image/jpeg', quality);
			// 		// 回调函数返回base64的值
			// 		callback(base64);
			// 	}
			// },
		}
	}
</script>

<style>
	.preview-full {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 1002;
	}

	.preview-full video {
		width: 100%;
		height: 100%;
		z-index: 1002;
	}

	.preview-full-close {
		position: fixed;
		right: 32rpx;
		top: 25rpx;
		width: 80rpx;
		height: 80rpx;
		line-height: 60rpx;
		text-align: center;
		z-index: 1003;
		/* 	background-color: #808080; */
		color: #fff;
		font-size: 65rpx;
		font-weight: bold;
		text-shadow: 1px 2px 5px rgb(0 0 0);
	}



	.ceshi {
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #FFFFFF;
		color: #2C405A;
		opacity: 0.5;
		z-index: 100;
	}

	.htz-image-upload-list {
		display: flex;
		flex-wrap: wrap;
	}

	.htz-image-upload-Item {
		width: 160rpx;
		height: 160rpx;
		margin: 13rpx;
		border-radius: 10rpx;
		position: relative;
	}

	.htz-image-upload-Item image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.htz-image-upload-Item-video {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
		position: relative;

	}

	.htz-image-upload-Item-video-fixed {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
		z-index: 996;

	}

	.htz-image-upload-Item video {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;

	}

	.htz-image-upload-Item-add {
		font-size: 105rpx;
		/* line-height: 160rpx; */
		text-align: center;
		border: 1px dashed #d9d9d9;
		color: #d9d9d9;
	}

	.htz-image-upload-Item-del {
		background-color: #f5222d;
		font-size: 24rpx;
		position: absolute;
		width: 35rpx;
		height: 35rpx;
		line-height: 35rpx;
		text-align: center;
		top: 0;
		right: 0;
		z-index: 997;
		color: #fff;
	}

	.htz-image-upload-Item-del-cover {
		background-color: #f5222d;
		font-size: 24rpx;
		position: absolute;
		width: 35rpx;
		height: 35rpx;
		text-align: center;
		top: 0;
		right: 0;
		color: #fff;
		/* #ifdef APP-PLUS */
		line-height: 25rpx;
		/* #endif */
		/* #ifndef APP-PLUS */
		line-height: 35rpx;
		/* #endif */
		z-index: 997;

	}
</style>
