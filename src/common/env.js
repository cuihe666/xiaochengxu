// create by cuihe
// 配置编译环境和线上环境之间的切换
// baseUrl: 域名地址
// routerMode: 路由模式---这到底是个什么玩意我也不知道
// 此文件目前只设置的开发和生产环境的区分配合，如果还有更多环境（预发布、、、）可依据此文件添加相关环境
// 使用方法：在需要区分环境的地方（一般指的是需要调接口的地方）引入此文件即可

let baseUrl = "";
let routerMode = "history";
let DEBUG = false;
let cancleHTTP = []; // 取消请求头设置,一般也不需要设置

// 根据不同项目，定义下面的不同环境的baseUrl
if (process.env.NODE_ENV == "development") { // 此为开发环境的地址
	baseUrl = "";
	DEBUG = true;
} else if (process.env.NODE_ENV == "production") { // 此为生产环境的地址
	baseUrl = "";
	DEBUG = false
}

export default {
	baseUrl,
	DEBUG,
	routerMode,
	cancleHTTP
}