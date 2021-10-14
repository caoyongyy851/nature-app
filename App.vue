<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	/* 官方css库 */
	@import "./common/uni.css";
	/* 自定义图标库 */
	@import "./common/animate.css";
	/* 图标 */
	@import "./common/icon.css";
	/* 自定义样式库 */
	@import "./common/free.css";
	/* 全局样式 */
	@import "./common/common.css";
</style>
