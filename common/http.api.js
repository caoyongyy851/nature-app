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
		`/nature/nocheck/getCardList/${params.pageNum}/${params.pageSize}`);
	// 获取活动列表
	let getCardGuanzhuList = (params = {}) => vm.$u.get(
		`/nature/front/getCardGuanzhuList/${params.pageNum}/${params.pageSize}`);
	// 喜欢
	let cardToLike = (params = {}) => vm.$u.get(`/nature/front/cardToLike/${params.cid}`);
	// 获取帖子详情
	let getCardDetailById = (params = {}) => vm.$u.get(`/nature/front/getCardDetailById/${params.id}`);
	// 获取评论
	let getCommentsByCid = (params = {}) => vm.$u.get(`/nature/nocheck/getCommentsByCid/${params.cid}`);
	// 评论
	let toComment = (params = {}) => vm.$u.post(`/nature/front/toComment`, params);
	// 关注
	let userToFollow = (params = {}) => vm.$u.get(`/nature/front/userToFollow/${params.followUid}`);
	// 话题关注
	let topicToFollow = (params = {}) => vm.$u.get(`/nature/front/topicToFollow/${params.topicId}`);
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
	let joinToActive = (params = {}) => vm.$u.post(`/nature/front/joinToActive`, params);
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
	let acommentAppreciateCancel = (params = {}) => vm.$u.get(
		`/nature/front/acommentAppreciateCancel/${params.cid}`);
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
	// 获取个人信息
	let getSelfDetail = (params = {}) => vm.$u.get(`/nature/front/getSelfDetail/${params.uid}`);
	// 保存用户信息
	let saveUserInfo = (params = {}) => vm.$u.post(`/nature/front/saveUserInfo`, params);
	// 获取场地分类
	let getPlaceCategoryList = () => vm.$u.get(`/nature/nocheck/getPlaceCategoryList`);
	// 根据分类id获取场地
	let getPlaceByCategoryId = (params = {}) => vm.$u.get(
		`/nature/nocheck/getPlaceByCategoryId/${params.categoryId}`);
	// 获取个人空间用户信息
	let getUserSpace = (params = {}) => vm.$u.get(`/nature/nocheck/getUserSpace/${params.uid}`);
	// 获取个人空间帖子
	let getCardListByUid = (params = {}) => vm.$u.get(
		`/nature/nocheck/getCardListByUid/${params.uid}/${params.pageNum}/${params.pageSize}`);
	// 获取个人空间帖子
	let getTopicListByUid = (params = {}) => vm.$u.get(
		`/nature/nocheck/getTopicListByUid/${params.uid}/${params.pageNum}/${params.pageSize}`);
	// 获取个人空间帖子
	let getActivityListByUid = (params = {}) => vm.$u.get(
		`/nature/nocheck/getActivityListByUid/${params.uid}/${params.pageNum}/${params.pageSize}`);
	// 获取封面
	let getCover = (params = {}) => vm.$u.get(`/nature/nocheck/getCover`);
	// 获取话题列表
	let getTopicList = (params = {}) => vm.$u.get(
		`/nature/front/getTopicList/${params.search}/${params.type}/${params.pageNum}/${params.pageSize}`);
	// 创建话题
	let createTopic = (params = {}) => vm.$u.post(`/nature/front/createTopic`, params);
	// 获取话题详情
	let getTopicDetailById = (params = {}) => vm.$u.get(`/nature/front/getTopicDetailById/${params.id}`);
	// 获取话题最新帖子
	let getNewCardByTopicId = (params = {}) => vm.$u.get(
		`/nature/front/getNewCardByTopicId/${params.id}/${params.pageNum}/${params.pageSize}`);
	// 获取话题热门帖子
	let getHotCardByTopicId = (params = {}) => vm.$u.get(
		`/nature/front/getHotCardByTopicId/${params.id}/${params.pageNum}/${params.pageSize}`);
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	// 获取封面
	let getTopicSelect = (params = {}) => vm.$u.get(`/nature/nocheck/getTopicSelect`);
	// 获取话题轮播图
	let getTopicSwiper = (params = {}) => vm.$u.get(`/nature/nocheck/getTopicSwiper`);
	// 获取当前话题用户相关状态
	let getTopicUserStatus = (params = {}) => vm.$u.get(`/nature/front/getTopicUserStatus/${params.id}`);
	// 获取用户话题
	let getTopicByUid = (params = {}) => vm.$u.get(
		`/nature/front/getTopicByUid/${params.pageNum}/${params.pageSize}`);

	// 用户删除话题
	let deleteTopic = (params = {}) => vm.$u.post(
		`/nature/front/deleteTopic`, params);

	// 获取用户帖子
	let getCardByUid = (params = {}) => vm.$u.get(
		`/nature/front/getCardByUid/${params.pageNum}/${params.pageSize}`);

	// 用户删除帖子
	let deleteCard = (params = {}) => vm.$u.post(
		`/nature/front/deleteCard`, params);

	// 获取文档
	let getDoc = (params = {}) => vm.$u.get(
		`/nature/nocheck/getDoc/${params.type}`);

	// 喜欢
	let placeToLike = (params = {}) => vm.$u.get(`/nature/front/placeToLike/${params.pid}`);



	// 获取手机号
	let phone = (params = {}) => vm.$u.get(
		`/nature/pay/phone/${params.appid}`, params);

	// 获取订单号
	let getOrderById = (params = {}) => vm.$u.get(
		`/nature/pay/getOrderById`, params);

	// 获取订单号
	let getActOrderById = (params = {}) => vm.$u.get(
		`/nature/pay/getActOrderById`, params);

	// 创建玩场订单
	let createCOrder = (params = {}) => vm.$u.post(
		`/nature/pay/createCOrder`, params);
	// 创建微信预支付订单
	let createOrder = (params = {}) => vm.$u.post(
		`/nature/pay/createOrder`, params);
	// 创建微信预支付订单
	let payActOrder = (params = {}) => vm.$u.post(
		`/nature/pay/payActOrder`, params);
	// 创建微信预支付订单
	let createActOrder = (params = {}) => vm.$u.post(
		`/nature/pay/createActOrder`, params);
	// 获取用户订单列表
	let getOrderByUid = (params = {}) => vm.$u.get(
		`/nature/front/getOrderByUid/${params.pageNum}/${params.pageSize}`, params);
	// 取消订单
	let closeOrder = (params = {}) => vm.$u.get(
		`/nature/pay/closeOrder/${params.orderNo}`, params);
	// 取消订单
	let closeActOrder = (params = {}) => vm.$u.get(
		`/nature/pay/closeActOrder/${params.orderNo}`, params);
	// 活动订单退款
	let refundActOrder = (params = {}) => vm.$u.get(
		`/nature/pay/refundActOrder/${params.id}`);
	// 确认活动订单
	let confirmActOrder = (params = {}) => vm.$u.get(
		`/nature/pay/confirmActOrder/${params.id}`);
	// 申请退款
	let refundAudit = (params = {}) => vm.$u.post(
		`/nature/front/refundAudit`, params);
	// 创建公司申请入驻
	let createCompany = (params = {}) => vm.$u.post(`/nature/front/createCompany`, params);

	// 获取公司申请入驻
	let getCompanyByUid = () => vm.$u.get(`/nature/front/getCompanyByUid`);
	// 获取用户线下活动
	let getActivityByUid = (params = {}) => vm.$u.get(
		`/nature/front/getActivityByUid/${params.pageNum}/${params.pageSize}`);

	// 用户删除活动
	let deleteActivity = (params = {}) => vm.$u.post(
		`/nature/front/deleteActivity`, params);
	// 修改活动
	let modifyActivity = (params = {}) => vm.$u.post(`/nature/front/modifyActivity`, params);
	// 修改话题
	let modifyTopic = (params = {}) => vm.$u.post(`/nature/front/modifyTopic`, params);
	// 修改话题
	let placeConsult = (params = {}) => vm.$u.post(`/nature/front/placeConsult`, params);
	// 获取用户线下活动
	let getTopicCover = () => vm.$u.get(
		`/nature/front/getTopicCover`);
	// 获取话题用户列表
	let getTopicUserList = (params = {}) => vm.$u.get(
		`/nature/nocheck/getTopicUserList/${params.topicId}`);

	// 获取活动用户列表
	let getActivityUserList = (params = {}) => vm.$u.get(
		`/nature/front/getActivityUserList/${params.id}`);

	// 获取话题标签
	let getTopicName = (params = {}) => vm.$u.get(
		`/nature/nocheck/getTopicName/${params.type}`);
	// 获取活动评论列表
	let getContextByUser = (params = {}) => vm.$u.get(
		`/nature/front/getContextByUser/${params.pageNum}/${params.pageSize}`);

	// 获取话题标签
	let getFollower = (params = {}) => vm.$u.get(
		`/nature/front/getFollower`);
	// 获取话题标签
	let getFanser = (params = {}) => vm.$u.get(
		`/nature/front/getFanser`);
	// 获取话题标签
	let getCeller = (params = {}) => vm.$u.get(
		`/nature/front/getCeller`);
	// 获取话题标签
	let changeAvatar = (params = {}) => vm.$u.post(
		`/nature/front/changeUserAvatar`, params);
	// 获取关注的话题
	let getFollowTopicList = (params = {}) => vm.$u.get(
		`/nature/front/getFollowTopicList/${params.pageNum}/${params.pageSize}`);

	// 写私信
	let writeLetter = (params = {}) => vm.$u.post(
		`/nature/front/writerLetter`, params);

	// 获取关注的话题
	let getLetterList = (params = {}) => vm.$u.get(
		`/nature/front/getLetterList`);
	// 获取关注的话题
	let setLetter = (params = {}) => vm.$u.get(
		`/nature/front/setLetter`);

	// 获取文档
	let getQrcode = (params = {}) => vm.$u.get(
		`/nature/nocheck/getQrCode/${params.aid}`);
	// 获取关注的话题
	let getFollowStatus = (params = {}) => vm.$u.get(
		`/nature/front/getFollowStatus/${params.fid}`);

	// 获取关注的话题
	let getMyJoin = (params = {}) => vm.$u.get(
		`/nature/front/getMyJoin`);
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
		topicToFollow,
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
		placeToCollect,
		getSelfDetail,
		saveUserInfo,
		getPlaceCategoryList,
		getPlaceByCategoryId,
		getUserSpace,
		getCardListByUid,
		getCover,
		getTopicList,
		createTopic,
		getTopicDetailById,
		getNewCardByTopicId,
		getHotCardByTopicId,
		getTopicSelect,
		getTopicSwiper,
		getTopicUserStatus,
		getTopicByUid,
		deleteTopic,
		getCardByUid,
		deleteCard,
		getDoc,
		placeToLike,
		createCOrder,
		phone,
		getOrderById,
		getActOrderById,
		createOrder,
		payActOrder,
		createActOrder,
		getOrderByUid,
		closeOrder,
		closeActOrder,
		refundAudit,
		createCompany,
		getCompanyByUid,
		getActivityByUid,
		deleteActivity,
		modifyActivity,
		modifyTopic,
		placeConsult,
		getTopicListByUid,
		getActivityListByUid,
		getTopicCover,
		getTopicUserList,
		getActivityUserList,
		getTopicName,
		getContextByUser,
		getFollower,
		getFanser,
		getCeller,
		changeAvatar,
		getFollowTopicList,
		writeLetter,
		getLetterList,
		setLetter,
		getQrcode,
		getFollowStatus,
		getMyJoin,
		refundActOrder,
		confirmActOrder
	};
}

export default {
	install
}
