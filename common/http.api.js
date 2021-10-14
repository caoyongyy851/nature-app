// /common/http.api.js

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// let hotSearchUrl = '/ebapi/store_api/hot_search';
// let indexUrl = '/ebapi/public_api/index';

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 登录
	let login = (params = {}) => vm.$u.get(`/wx/user/${params.appid}/login`, params);
	// 授权
	let auth = (params = {}) => vm.$u.post(`/wx/user/${params.appid}/postAuth`, params);

	// 获取活动详情
	let getActivityDetailById = (params = {}) => vm.$u.get(`/nature/nocheck/getActivityDetailById/${params.id}`);
	// 获取热门活动列表
	let getHotActivityList = (params = {}) => vm.$u.get(
		`/nature/nocheck/getHotActivityList/${params.pageNum}/${params.pageSize}`);

	// 获取评论
	let getPCommentsByAid = (params = {}) => vm.$u.get(`/nature/nocheck/getPCommentsByAid/${params.aid}`, params);

	// 收藏活动
	let activityCollect = (params = {}) => vm.$u.get(`/nature/front/activityCollect/${params.aid}`, params);
	// 取消收藏活动
	let activityCollectCancel = (params = {}) => vm.$u.get(`/nature/front/activityCollectCancel/${params.aid}`,
		params);

	// 点踩活动
	let activityTread = (params = {}) => vm.$u.get(`/nature/front/activityTread/${params.aid}`, params);
	// 取消点踩活动
	let activityTreadCancel = (params = {}) => vm.$u.get(`/nature/front/activityTreadCancel/${params.aid}`, params);
	// 点踩评论
	let commentTread = (params = {}) => vm.$u.get(`/nature/front/commentTread/${params.cid}`, params);
	// 取消点踩评论
	let commentTreadCancel = (params = {}) => vm.$u.get(`/nature/front/commentTreadCancel/${params.cid}`, params);
	// 获取活动当前用户相关状态
	let getPCommentsByCid = (params = {}) => vm.$u.get(`/nature/nocheck/getPCommentsByCid/${params.cid}`, params);

	/**
	 * *****************************自然玩主*****************************
	 */

	// 获取活动列表
	let getCardList = (params = {}) => vm.$u.get(
		`/nature/front/getCardList/${params.pageNum}/${params.pageSize}`);
	// 获取活动列表
	let getCardGuanzhuList = (params = {}) => vm.$u.get(
		`/nature/front/getCardGuanzhuList/${params.pageNum}/${params.pageSize}`);
	// 喜欢
	let cardToLike = (params = {}) => vm.$u.get(`/nature/front/cardToLike/${params.cid}`);
	// 获取帖子详情
	let getCardDetailById = (params = {}) => vm.$u.get(`/nature/nocheck/getCardDetailById/${params.id}`);
	// 获取评论
	let getCommentsByCid = (params = {}) => vm.$u.get(`/nature/nocheck/getCommentsByCid/${params.cid}`);
	// 评论
	let toComment = (params = {}) => vm.$u.post(`/nature/front/toComment`, params);
	// 关注
	let userToFollow = (params = {}) => vm.$u.get(`/nature/front/userToFollow/${params.followUid}`);
	// 点赞评论
	let commentAppreciate = (params = {}) => vm.$u.get(`/nature/front/commentAppreciate/${params.cid}`);
	// 取消点赞评论
	let commentAppreciateCancel = (params = {}) => vm.$u.get(`/nature/front/commentAppreciateCancel/${params.cid}`);
	// 获取当前帖子用户相关状态
	let getCardUserStatus = (params = {}) => vm.$u.get(`/nature/front/getCardUserStatus/${params.id}`);
	// 获取所有评论
	let getAllCommentsByCid = (params = {}) => vm.$u.get(`/nature/front/getAllCommentsByCid/${params.cid}`);

	// 获取轮播图
	let getSwiperActivity = () => vm.$u.get(`/nature/nocheck/getSwiperActivity`);
	// 获取活动列表
	let getActivityList = (params = {}) => vm.$u.get(
		`/nature/nocheck/getActivityList/${params.pageNum}/${params.pageSize}`);
	// 获取轮播图
	let getPositionList = () => vm.$u.get(`/nature/nocheck/getPositionList`);
	// 上传帖子
	let createCard = (params = {}) => vm.$u.post(`/nature/front/createCard`, params);
	// 参加活动
	let joinToActive = (params = {}) => vm.$u.get(`/nature/front/joinToActive/${params.aid}`);
	// 获取当前活动用户相关状态
	let getActivityUserStatus = (params = {}) => vm.$u.get(`/nature/front/getActivityUserStatus/${params.aid}`);
	// 点赞活动
	let activityAppreciate = (params = {}) => vm.$u.get(`/nature/front/activityAppreciate/${params.aid}`);
	// 取消点赞活动
	let activityAppreciateCancel = (params = {}) => vm.$u.get(
		`/nature/front/activityAppreciateCancel/${params.aid}`);
	// 评论
	let writeAComment = (params = {}) => vm.$u.post(`/nature/front/writeAComment`, params);
	// 获取活动评论
	let getCommentsByAid = (params = {}) => vm.$u.get(`/nature/nocheck/getCommentsByAid/${params.aid}`);
	// 点赞评论
	let acommentAppreciate = (params = {}) => vm.$u.get(`/nature/front/acommentAppreciate/${params.cid}`);
	// 取消点赞评论
	let acommentAppreciateCancel = (params = {}) => vm.$u.get(`/nature/front/acommentAppreciateCancel/${params.cid}`);
	// 获取所有评论
	let getAllCommentsByAid = (params = {}) => vm.$u.get(`/nature/front/getAllCommentsByAid/${params.aid}`);
	// 创建活动
	let createActivity = (params = {}) => vm.$u.post(`/nature/front/createActivity`, params);
	// 推荐场地列表
	let getReferPlaceList = (params = {}) => vm.$u.get(
		`/nature/nocheck/getReferPlaceList/${params.pageNum}/${params.pageSize}`);
	// 获取场地详情
	let getPlaceDetailById = (params = {}) => vm.$u.get(`/nature/nocheck/getPlaceDetailById/${params.id}`);
	// 收藏
	let placeToCollect = (params = {}) => vm.$u.get(`/nature/front/placeToCollect/${params.pid}`);
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		login,
		auth,
		getCardList,
		getCardGuanzhuList,
		cardToLike,
		getCardDetailById,
		getCommentsByCid,
		toComment,
		userToFollow,
		commentAppreciate,
		commentAppreciateCancel,
		getCardUserStatus,
		getAllCommentsByCid,
		getActivityList,
		getSwiperActivity,
		getPositionList,
		createCard,
		getActivityDetailById,
		joinToActive,
		getActivityUserStatus,
		activityAppreciate,
		activityAppreciateCancel,
		writeAComment,
		getCommentsByAid,
		acommentAppreciate,
		acommentAppreciateCancel,
		getAllCommentsByAid,
		createActivity,
		getReferPlaceList,
		getPlaceDetailById,
		placeToCollect
	};
}

export default {
	install
}
