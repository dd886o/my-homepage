const config = {
	//网页元数据
	metaData: {
		title: '奇遇的个人主页🎉',
		description: '欢迎来到奇遇的奇妙世界！',
		keywords: '奇遇,qiyu,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "1791892120285.jpg", // 头像
	welcometitle: "Hi, welcome, I'm Qiyu", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#53d7d1", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#7df1f3",  // 转盘渐变色一
		turntablecolor2: "#087bee"   // 转盘渐变色二
	},

	brightness: 100, // 背景亮度 --%
	blur: 4, // 毛玻璃模糊效果

	// 我的标签
	tags: ['宅男', '是个游戏菜b', '喜欢安静', '努力向上', '风趣幽默',  '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "灵活",
				"preview": "/IMG_20261013_201403.jpg",  //预览图，当然也可填写网络地址
				"url": "/IMG_20261013_201403.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/mmexport1771507384418.jpg",
				"url": "/mmexport1771507384418.jpg"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['c', '团队协作', '沟通能力', '算法', '数据分析', '数据结构'],
		skillPoints: [85, 100, 80, 90, 80, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/dd886o" },
		{ icon: "mdi-email", link: "mailto:l2132456283@outlook.com" },
		{ icon: "mdi-qqchat", link: "Image_1791958011143_111.png" },
		{ icon: "mdi-wechat", link: "mmqrcode1791958352996.png" },
		{ icon: "mdi-video", link: "https://v.douyin.com/vfWXkZPaLTw/ " },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"我是奇遇，一个沈理工计算机科学与技术的学生。",
		"我是编程初学者，目前只了解c语言，正在学习C++",
		"在计协提升自己。",
		"我喜欢玩游戏，喜欢看动漫，喜欢听音乐。",
		"我喜欢安静，喜欢独处，喜欢思考。",
		"我喜欢和朋友聊天，喜欢和朋友一起玩游戏。",
		"我希望自己能成为一个有趣的人。",
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '18486273855',  //歌单id ---> music.163.com/#/playlist?id=2028178887
		randomFirstPlay: true,  //进入页面是否随机播放歌单中的某一首（true开启，若开启则 startIndex 忽略）
		startIndex: 0,          //不随机时，进入页面可以自定义播放第几首（索引从0开始，若超出歌单长度则自动回落为0）

		//音乐接口源：按顺序尝试，取到非空歌单即止。某个源挂掉时可直接在数组里调整顺序或增删
		//fields 用于把不同接口返回的字段名映射成组件统一使用的 title / author
		sources: [
			{
				name: 'injahow',
				url: 'https://api.injahow.cn/meting/',
				fields: { title: 'name', author: 'artist' },
			},
			{
				name: 'i-meto',
				url: 'https://api.i-meto.com/meting/api',
				fields: { title: 'title', author: 'author' },
			},
		],
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "灵活", "preview": "/IMG_20261013_201403.jpg", "url": "/IMG_20261013_201403.jpg" },
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "Image_1791959863141_842.jpg", title: "娱乐项目", subtitle: "脑子寄存处", text: "追爱的游戏", url: "https://sr.mihoyo.com/", show: false },
		{ go: "🗂️ 前往", img: "IMG_20261014_192650.jpg", title: "网课进修", subtitle: "知识使我快乐", text: "网课处", url: "https://www.bilibili.com/", show: false },
		{ go: "📝 前往", img: "IMG_20261014_201133.jpg", title: "习题歼灭", subtitle: "消灭知识点", text: "练习的绝佳去处", url: "https://ac.nowcoder.com/", show: false },
		{ go: "👍 前往", img: "IMG_20261014_201219.jpg", title: "技能培养", subtitle: "点亮新技能", text: "技能提升处", url: "https://www.runoob.com/", show: false },
		{ go: "🎵 前往", img: "IMG_20261014_202812.jpg", title: "脑子清空", subtitle: "放空自我", text: "忙里偷闲", url: "https://www.kugou.com/", show: false },
		{ go: "💍 前往", img: "IMG_20261014_213340.jpg", title: "AI助手", subtitle: "普通未升级版", text: "我的智囊", url: "https://chat.deepseek.com/", show: false },
		{ go: "🗃 前往", img: "IMG_20261014_203618.jpg", title: " 赛博木鱼", subtitle: "积攒功德", text: "祝我代码永无 Bug！", url: "https://www.lddgo.net/common/wooden-fish", show: false },
		{ go: "🔍 前往", img: "IMG_20261014_201152.jpg", title: "摸鱼小网站", subtitle: "忙里偷闲", text: "释放压力", url: "https://moyuyu.net/", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2026 qiyu"],
}

export default config