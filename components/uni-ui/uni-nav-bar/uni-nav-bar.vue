<template>

	<view class="uni-navbar">
		<view :class="{'uni-navbar--fixed': fixed,'uni-navbar--shadow':border,'uni-navbar--border':border}"
			:style="{'background-color':backgroundColor}" class="uni-navbar__content">
			<uni-status-bar v-if="statusBar" />
			<view :style="{color:color, height: customBarH + 'px'}" class="uni-navbar__header uni-navbar__content_view">
				<view class="uni-navbar__header-btns uni-navbar__content_view" @tap="onClickLeft">
					<view v-if="leftIcon.length" class="uni-navbar__content_view">
						<uni-icons :type="leftIcon" :color="color" size="24" />
					</view>
					<view v-if="leftText.length" :class="{'uni-navbar-btn-icon-left':!leftIcon.length}"
						class="uni-navbar-btn-text uni-navbar__content_view">{{ leftText }}</view>
					<view style="margin-top: 10rpx;">
						<slot name="left" />
					</view>	
				</view>
				<view class="uni-navbar__header-container uni-navbar__content_view">
					<view v-if="title.length" class="uni-navbar__header-container-inner uni-navbar__content_view">
						{{ title }}
					</view>
					<!-- 标题插槽 -->
					<slot />
				</view>
				<view :class="title.length?'uni-navbar__header-btns-right':''"
					class="uni-navbar__header-btns uni-navbar__content_view" @tap="onClickRight">
					<view v-if="rightIcon.length" class="uni-navbar__content_view">
						<uni-icons :type="rightIcon" :color="color" size="24" />
					</view>
					<!-- 优先显示图标 -->
					<view v-if="rightText.length&&!rightIcon.length"
						class="uni-navbar-btn-text uni-navbar__content_view">{{ rightText }}</view>
					<slot name="right" />
				</view>
			</view>
		</view>
		<view v-if="fixed" class="uni-navbar__placeholder">
			<uni-status-bar v-if="statusBar" />
			<view class="uni-navbar__placeholder-view" />
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue'
	import uniIcons from '../uni-icons/uni-icons.vue'

	export default {
		name: 'UniNavBar',
		components: {
			uniStatusBar,
			uniIcons
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			leftText: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: '#000000'
			},
			backgroundColor: {
				type: String,
				default: '#FFFFFF'
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [String, Boolean],
				default: true
			},
			border: {
				type: [String, Boolean],
				default: true
			}
		},
		// onLaunch(option) {
		// // 	console.log(1111)
		// // 	uni.getSystemInfo({
		// // 		success: function(e) {
		// // 			Vue.prototype.statusBar = e.statusBarHeight
		// // 			console.log(e.statusBarHeight)
		// // 			// #ifndef MP
		// // 			if (e.platform == 'android') {
		// // 				Vue.prototype.customBar = e.statusBarHeight + 50
		// // 			} else {
		// // 				Vue.prototype.customBar = e.statusBarHeight + 45
		// // 			}
		// // 			// #endif
		
		// // 			// #ifdef MP-WEIXIN
		// // 			console.log(custom)
		// // 			let custom = wx.getMenuButtonBoundingClientRect()
		// // 			console.log(custom)
		// // 			Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight
		// // 			// #endif
		
		// // 			// #ifdef MP-ALIPAY
		// // 			Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight
		// // 			// #endif
		// // 		}
		// // 	})
		// },
		mounted() {
			// 获取状态栏高度
			var { statusBarHeight } = uni.getSystemInfoSync();
			 // 获取胶囊位置尺寸
			var menuButtonObject = uni.getMenuButtonBoundingClientRect();
			var { top, height } = menuButtonObject;
			// 获取导航栏的高度
			var navBarHeight = height + (top - statusBarHeight) * 2;
			// 计算状态栏与导航栏的总高度
			var statusNavBarHeight = statusBarHeight + navBarHeight;
			this.customBarH = statusNavBarHeight
		},
		data() {
			return {
				customBarH: 0,
				statusBarH: 0
			}
		},
		
		methods: {
			onClickLeft() {
				this.$emit('click-left')
			},
			onClickRight() {
				this.$emit('click-right')
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-navbar__content {
		display: block;
		position: relative;
		width: 100%;
		background-color: #fff;
		overflow: hidden
	}

	.uni-navbar__content .uni-navbar__content_view {
		display: flex;
		align-items: center;
		padding-top: 20rpx
	}

	.uni-navbar__header {
		display: flex;
		flex-direction: row;
		width: 100%;
		line-height: 44px;
		font-size: 16px
	}

	.uni-navbar__header-btns {
		display: inline-flex;
		flex-wrap: nowrap;
		flex-shrink: 0;
		width: 120upx;
		padding: 0 12upx
	}

	.uni-navbar__header-btns:first-child {
		padding-left: 0
	}

	.uni-navbar__header-btns:last-child {
		width: 60upx
	}

	.uni-navbar__header-btns-right:last-child {
		width: 120rpx;
		text-align: right;
		flex-direction: row-reverse
	}

	.uni-navbar__header-container {
		width: 100%;
		margin: 0 10upx
	}

	.uni-navbar__header-container-inner {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 30upx
	}

	.uni-navbar__placeholder-view {
		height: 65px
	}

	.uni-navbar--fixed {
		position: fixed;
		z-index: 998
	}

	.uni-navbar--shadow {
		box-shadow: 0 1px 6px #ccc
	}

	.uni-navbar--border:after {
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #e5e5e5
	}
</style>
