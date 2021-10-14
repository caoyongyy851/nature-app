<template>
	<view class="p-2">
		<u-toast ref="uToast" />
		<view class="p-2">
			<u-input v-model="activity.title" type="text" trim="true" placeholder="请填写标题~" maxlength="12" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.person" type="number" placeholder="活动限制人数~" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.detail" type="textarea" trim="true" placeholder="请填写活动详情~" maxlength="500" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.label" type="text" trim="true" placeholder="请填写标签(多个空格隔开)~" maxlength="50" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.position" disabled="true" placeholder="请选择地址~" @click="positionShow = true" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.address" type="text" trim="true" placeholder="请填写详细地址(xx路xx弄xx号)~" maxlength="100" />
		</view>
		<view class="p-2">
			<u-input v-model="activity.time" disabled="true" placeholder="活动报名截止时间~" @click="timeShow = true" />
		</view>
		<view>
			<u-upload ref="uUpload" :action="getImgBase + '/nature/front/activityFile'" :header="headers"
				:auto-upload="true" :max-size="5 * 1024 * 1024" max-count="6" @on-success="success" @on-remove="remove">
			</u-upload>
		</view>
		<view class="fixed-bottom">
			<button @click="activityConfirm" class="font bg-main text-white animated faster" hover-class="bounceIn">
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
			success(data, index, lists, name) {
				this.picList = lists
			},
			remove(index, lists, name) {
				this.picList = lists
			},
			positionConfirm(position) {
				if (position.province.label === '上海市') {
					this.activity.position = position.province.label + position.area.label
				} else {
					this.$refs.uToast.show({
						type: 'warning',
						title: '目前只有上海开通哦~'
					})
					this.activity.position = ''
				}
			},
			timeConfirm(time) {
				this.activity.time = time.year + '-' + time.month + '-' + time.day
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
				if (!this.activity.address) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '还没填写详细地址哦~'
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
				if(this.activity.label){
					this.activity.label = this.activity.label.replace(/\s+/g,",")
				}
				this.activity.img = this.picList.map(e => {
					return e.response.imgUrl
				}).join()
				this.activity.position = this.activity.position + this.activity.address
				this.$u.api.createActivity(this.activity).then(res => {
					if (res.code === 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '上传成功'
						})
						uni.switchTab({
							url: '../place/place',
							success() {
								let data = {
									topIndex: 1,
									subIndex: 3
								}
								let page = getCurrentPages().pop();
								if (page == undefined || page == null) return
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
