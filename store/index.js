import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
	//data
	state:{
		userinfo:{},
		needAuth:true,
		isLogin:false,
		imgBase: "http://192.168.10.173:7777/nature"
	},
	//computed
	getters:{
		getUserinfo(state){
			return state.userinfo
		},
		getNeedAuth(state){
			return state.needAuth
		},
		getIsLogin(state){
			return state.isLogin
		},
		getImgBase(state){
			return state.imgBase
		}
	},
	//methods 同步
	mutations:{
		setUserinfo(state,userinfo){
			state.userinfo=userinfo;
		},
		setNeedAuth(state,needAuth){
			state.needAuth=needAuth;
		},
		setIsLogin(state,isLogin){
			state.isLogin=isLogin;
		},
	},
	//异步的方法
	actions:{
		login(context) {
			return new Promise((resolve,reject)=>{
				uni.login({
					provider: 'weixin',
					success: res => {
						console.log(res.code);
						Vue.prototype.$u.api.login({
							appid: Vue.prototype.appid,
							code: res.code,
							token: uni.getStorageSync('token')
						}).then(res => {
							console.log(res);
							uni.setStorageSync('token', res.data.token);
							if(res.msg=="登录成功"){
								context.commit('setUserinfo',res.data.user);
								context.commit('setNeedAuth',false);
								context.commit('setIsLogin',true);
							}else if (res.msg=="未登录,请授权" || res.msg=="非首次,未授权"){
								context.commit('setUserinfo',res.data.user);
								context.commit('setNeedAuth',true);
								context.commit('setIsLogin',true);
							}
							resolve("login执行完毕");
						})
					},
					fail: res => {
						Vue.prototype.$u.toast("获取code失败");
						reject("获取code失败");
					}
				});
			}).catch((e)=>{
				console.log(e)
			})
		},
		
		authUserInfo(context) {
			// let that = this
			return new Promise((resolve,reject)=>{
				wx.getUserProfile({
					lang:'zh_CN',
					desc:'注册',
					success(res) {
						context.commit('setUserinfo',{
							nickname: res.userInfo.nickName,
							sex: res.userInfo.gender,
							avatar: res.userInfo.avatarUrl,
							city: res.userInfo.city
						})
						Vue.prototype.$u.api.auth(context.state.userinfo)
						.then(res=>{
							if(res.msg=="授权成功"){
								context.commit('setNeedAuth',false);
							}else{
								Vue.prototype.$u.toast("授权失败")
							}
							resolve("授权完毕");
						})
					},
					fail(res) {
						reject("获取信息出错")
					}
				})
			}).catch((e)=>{
				console.log(e)
			})
		}
		
		
	}
})
export default store