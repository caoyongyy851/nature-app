<template>
	<view class="p-2">
		<u-toast ref="uToast" />
		<view class="p-2">
			<u-input v-model="card.title" trim="true" placeholder="请输入标题~" maxlength="12" />
		</view>
		<view class="p-2">
			<u-input v-model="card.detail" type="textarea" trim="true" placeholder="写点东西吧~" maxlength="500" />
		</view>
		<view class="p-2">
			<u-input v-model="card.position" disabled="true" placeholder="请选择地点~" @click="positionShow = true" />
		</view>
		<view class="p-2">
			<u-input v-model="card.time" disabled="true" placeholder="请选择拍摄时间~" @click="timeShow = true" />
		</view>
		<view>
			<u-upload ref="uUpload" :action="getImgBase + '/nature/front/cardFile'" :header="headers" :auto-upload="true" :max-size="5 * 1024 * 1024"
				max-count="6" @on-success="success" @on-remove="remove"></u-upload>
		</view>
		<view class="fixed-bottom">
			<button @click="cardConfirm" class="font bg-main text-white animated faster" hover-class="bounceIn">
				上传</button>
		</view>
		<u-picker mode="selector" v-model="positionShow" :range="selector" range-key="name" :default-selector="[0]"
			@confirm="positionConfirm"></u-picker>
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
				card: {
					title: "",
					detail: "",
					position: "",
					pid: 0,
					time: "",
					imgs: ""
				},
				positionShow: false,
				timeShow: false,
				selector: [],
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
			success(data, index, lists, name) {
				this.picList = lists
			},
			remove(index, lists, name) {
				this.picList = lists
			},
			positionConfirm(index) {
				this.card.pid = this.selector[index].id
				this.card.position = this.selector[index].name
			},
			timeConfirm(time) {
				this.card.time = time.year + '-' + time.month + '-' + time.day
			},
			cardConfirm() {
				if (!this.card.title) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '标题没填哦~'
					})
					return
				}
				if (!this.card.detail) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '简单写点内容吧~'
					})
					return
				}
				if (!this.card.time) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没选择时间哦~'
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
				this.card.imgs = this.picList.map(e => {
					return e.response.imgUrl
				}).join()
				this.card.imgsNum = this.picList.length
				this.$u.api.createCard(this.card).then(res => {
					if (res.code === 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '上传成功'
						})
						uni.switchTab({
							url: '../index/index',
							success() {
								let data = {
									topIndex: 1,
									subIndex: 3
								}
								let page = getCurrentPages().pop();
								if(page == undefined || page == null) return
								 page.onLoad(data)
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
