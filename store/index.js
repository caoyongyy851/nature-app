import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
	//data
	state:{
		userinfo:{},
		needAuth:true,
		isLogin:false,
		isAuthPhone: false,
		imgBase: "http://127.0.0.1:7777/nature"
		// imgBase: "https://ziranwanzhu.com/nature"
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
		getIsAuthPhone(state){
			return state.isAuthPhone
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
		setIsAuthPhone(state, isAuthPhone){
			state.isAuthPhone=isAuthPhone;
		}
	},
	//异步的方法
	actions:{
		//微信登录
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
								if(res.data.user.phone){
									context.commit('setIsAuthPhone',true);
								}
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
		//微信授权
		authUserInfo(context) {
			// let that = this
			return new Promise((resolve,reject)=>{
				wx.getUserProfile({
					lang:'zh_CN',
					desc:'获取您的昵称、头像、地区及性别',
					success(res) {
						context.commit('setUserinfo',{
							nickname: res.userInfo.nickName,
							sex: res.userInfo.gender,
							avatar: res.userInfo.avatarUrl,
							city: res.userInfo.city,
							rawData: res.rawData,
							signature: res.signature
						})
						Vue.prototype.$u.api.auth(context.state.userinfo)
						.then(res=>{
							if(res.msg=="授权成功"){
								context.commit('setNeedAuth',false);
							}else{
								Vue.prototype.$u.toast("授权失败")
							}
							resolve("success");
						})
					},
					fail(res) {
						reject("error")
					}
				})
			}).catch((e)=>{
				console.log(e)
			})
		},
		setPhone(context, phone){
			context.commit('setIsAuthPhone',true);
			context.state.userinfo.phone = phone
			context.commit('setUserinfo',context.state.userinfo);
			console.log(context.state.userinfo)
		}
		
		
	}
})
export default store