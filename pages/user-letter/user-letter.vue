<template>
	<view>
		<template v-if="contentList.length > 0">
			<u-toast ref="uToast" />
			<view class="m-2 p-2 bg-white rounded-1 flex flex-column viewContainer" v-for="(item, index) in contentList" :key="index">
				<view class="flex justify-between align-center">
					<view class="flex align-center" @click="openSpace(item)">
						<view class="">
							<u-avatar :src="item.avatar" :size="70" :show-sex="false">
							</u-avatar>
						</view>

						<view class="flex-1 ml-2">
							<view class="">
								<text class="font">{{item.nickname}}</text>
							</view>
						</view>
					</view>
					<view class="" >
						<u-tag text="回复私信" shape="circle" size="mini" type="success" @click="writeLetter"/>
					</view>
				</view>
				<view class="" style="margin-left: 90rpx;">
					<text class="font text-muted">{{item.context}}</text>
				</view>
				<view class="flex flex-row-reverse mt-2">
					<text class="font-sm">{{item.time}}</text>
				</view>
				<view v-if="!item.read" class="bg-main rounded-circle shadow position-absolute"
					style="width: 25rpx; height: 25rpx; top: -10rpx; right: -10rpx;" />
			</view>
			<u-modal v-model="letterModal.show" title=" " width="550" show-cancel-button @confirm="letterConfirm" @cancel="letterCancel">
				<view class="mx-3 p-3 rounded-1 bg-white">
					<view class="flex align-center justify-center">
						<image src="../../static/logo.jpg" mode="aspectFill" style="width: 200rpx; height: 150rpx;">
						</image>
					</view>

					<view class="p-2">
						<u-input v-model="letterModal.context" type="textarea" trim="true" placeholder="请输入私信内容~"
							maxlength="1000" />
					</view>

				</view>
			</u-modal>
		</template>
		<template v-else>
			<view class="flex align-center justify-center" style="margin-top: 400rpx;">
				<u-empty text="数据为空" mode="list"></u-empty>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				queryParam: {
					pageNum: 1,
					pageSize: 6
				},
				contentList: [],
				isBottom: false,
				letterModal: {
					show: false,
					context: '',
					toId: null
				}
			}
		},
		onLoad() {
			this.init()
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			init() {
				this.$u.api.getLetterList().then(res => {
					this.contentList = res.data
					this.$u.api.setLetter()
				})
			},
			// 到个人中心
			openSpace(item) {
				uni.navigateTo({
					url: `../user-space/user-space?uid=${item.uid}`
				})
			},
			writeLetter() {
				this.letterModal.show = true
			},
			letterConfirm() {
				if (!this.letterModal.context) {
					this.$refs.uToast.show({
						type: 'warning',
						title: '请输入私信内容~'
					})
					return
				}
				this.$u.api.writeLetter({
					toId: this.getUserinfo.id,
					context: this.letterModal.context
				}).then(res => {
					if (res.code == 200) {
						this.$refs.uToast.show({
							type: 'success',
							title: '发送成功~'
						})
					} else {
						this.$refs.uToast.show({
							type: 'warning',
							title: '发送失败~'
						})
					}
				})
			},
			letterCancel() {
				this.letterModal = {
					show: false,
					context: '',
					toId: null
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #f7f7f7
	}
	.viewContainer {
		position: relative;
	}

</style>
