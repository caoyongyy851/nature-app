<template>
	<view>
		<u-toast ref="uToast" />
		<uni-list-item title="头像" @click="changeUserpic">
			<view class="flex align-center" slot="right">
				<u-avatar :src="userInfo.avatar" :size="100" :show-sex="false"
					:sexIcon="userInfo.sex==1?'man':'woman'">
				</u-avatar>
			</view>
		</uni-list-item>
		<uni-list-item title="昵称">
			<view class="flex align-center" slot="right">
				<input class="uni-input text-right" v-model="userInfo.nickname" />
			</view>
		</uni-list-item>
		<uni-list-item title="年龄">
			<view class="flex align-center" slot="right">
				<input class="uni-input text-right" type="number" v-model="userInfo.age" />
			</view>
		</uni-list-item>
			<uni-list-item title="个人签名">
				<view class="flex align-center" slot="right">
					<input class="uni-input text-right" v-model="userInfo.sign" placeholder="写点什么吧~"/>
				</view>
			</uni-list-item>	
		<view class="py-2 px-3">
			<button class="bg-main text-white" style="border-radius: 50rpx;border: 0;" type="primary" @click="submit">完成</button>
		</view>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	import store from '@/store/index.js';
	export default {
		components: {
			uniListItem,
		},
		data() {
			return {
				userInfo: {}
			}
		},

		onLoad() {
			this.userInfo = this.getUserinfo
		},
		computed: {
			...mapGetters(['getImgBase'])
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				uni.uploadFile({
					url: this.getImgBase + '/nature/nocheck/avatar',
					filePath: path,
					name: 'file',
					complete: (res) => {
						var img = JSON.parse(res.data)
						console.log(JSON.stringify(img))
						if (img.code == 200) {
							let avatarUrl = {
								avatar: this.getImgBase + img.imgUrl
							} 
							this.$u.api.changeAvatar(avatarUrl).then(res => {
								if (res.code == 200) {
									this.userInfo.avatar = this.getImgBase + img.imgUrl
									store.commit('setUserinfo', this.userInfo)
									this.$u.toast('修改成功~')
								}
							})
						} else {
							this.$u.toast(res.errMsg)
						}
					}
				});
			})
		},
		computed: {
			...mapGetters(['getUserinfo', 'getNeedAuth', 'getIsLogin', 'getImgBase'])
		},
		methods: {
			// 提交
			submit(){
				if(!Number(this.userInfo.age)){
					this.$refs.uToast.show({
						type: 'error',
						title: '年龄输入错误'
					})
					return
				}
				this.$u.api.saveUserInfo(this.userInfo).then(res => {
					if(res.code === 200){
						this.$refs.uToast.show({
							type: 'success',
							title: '修改成功'
						})
					}else{
						this.$refs.uToast.show({
							type: 'error',
							title: '修改失败'
						})
					}
					
				})
			},
			changeUserpic(){
				uni.navigateTo({
					url:'./image-cut?destWidth=300&rectWidth=200&fileType=jpg'
				})
			}
		}
	}
</script>

<style>

</style>
