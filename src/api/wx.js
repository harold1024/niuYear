import get from "@/api/api"; //封装的api地址接口
import wx from "weixin-js-sdk";
// 引入微信分享插件
export const wexinShare = function () {
	var s_link = "http://lpjs.cd.lpsheng.net";
	var s_py_title = "牛年快樂";
	var s_title = "牛年快樂";
	var s_desc = "牛年快樂";
	var s_imgurl = "https://s1.ax1x.com/2020/10/15/0TuUSJ.png"; //这里我的是上传到图床的绝对地址，开始使用项目本地地址用require导入还是不行，就使用的上传到图床的一个绝对地址。欢迎其他小伙伴讨论。
	get({
		// url: window.location.href
		url: location.href.split('#')[0] //哈希模式下的去掉#传给后端的地址
	}).then(res => {
		const resData = JSON.parse(res)
		console.log(resData)
		var appId = resData.appId;
		var timestamp = resData.timestamp;
		var nonceStr = resData.nonceStr;
		var signature = resData.signature;
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: appId, // 必填，公众号的唯一标识
			timestamp: timestamp, // 必填，生成签名的时间戳
			nonceStr: nonceStr, // 必填，生成签名的随机串
			signature: signature, // 必填，签名，见附录1
			jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		wx.ready(function () {
			wx.updateAppMessageShareData({
				title: s_title, // 分享标题
				desc: s_desc, // 分享描述
				link: s_link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: s_imgurl, // 分享图标
				success: function () {
					// 设置成功
				},
				cancel: function () {
					alert("用户取消了")
				}
			});
			wx.updateTimelineShareData({
				title: s_py_title, //
				link: s_link, //
				imgUrl: s_imgurl, //
				success: function (e) {
					//“分享到朋友圈”及“分享到QQ空间”
				},
				cancel: function () {
					alert("用户取消了")
				}

			});
		});
	})
	wx.error(function (res) {
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		console.log('验证失败返回的信息:', res);
	});
}