CREATE DATABASE home;
USE home;

-- 创建 轮播图表
CREATE TABLE slide (
   sid INT PRIMARY KEY AUTO_INCREMENT,
   img VARCHAR(100) NOT NULL
);

-- 添加数据
INSERT INTO slide VALUES 
   (NULL, './upload/home/banner1.jpg'),
   (NULL, './upload/home/banner2.jpg'),
   (NULL, './upload/home/banner1.jpg');


-- ----------------------------------------------

-- 创建资讯板块表
CREATE TABLE message (
   `mid` INT PRIMARY KEY AUTO_INCREMENT,
   tag VARCHAR(100) NOT NULL,
   en VARCHAR(100) NOT NULL,
   title VARCHAR(255) NOT NULL,
   DATE TIMESTAMP
);

INSERT INTO message VALUES -- 每次加载15条数据
   -- 新闻
   (NULL, '新闻 热门', 'news', '老亚瑟的答疑时间：甄姬-冰雪圆舞曲优化设计稿、青白蛇重做后续计划公布', NULL),
   (NULL, '新闻',      'news', '小乔周瑜新皮肤抢先直播测评！更有百套新皮肤在线抽送', NULL),
   (NULL, '新闻',      'news', '召唤师专属省钱福利，尽在王者人生', NULL),
   (NULL, '新闻 热门', 'news', '狄某有话说丨顶级理解，打野百里、AD张飞请求出战？！', NULL),
   (NULL, '新闻 热门', 'news', '《王者荣耀》项目组诚邀您加入', NULL),
   (NULL, '新闻',      'news', '全新梦奇，可爱暴击，5月11日-5月25日，来看点，梦奇优质视频投稿赢好礼', NULL),
   (NULL, '新闻',      'news', '梦奇可爱归来，小红书5月11日-5月27日分享梦奇创作视频，赢千元奖金！', NULL),
   (NULL, '新闻 热门', 'news', '老亚瑟的答疑时间：皮肤优化计划及西施-诗语江南优化效果曝光', NULL),
   (NULL, '新闻',      'news', '上小红书show出你的开黑日常，赢现金周边', NULL),
   (NULL, '新闻',      'news', '狄某有话说丨新赛季首月回顾，4月峡谷数据大揭秘！', NULL),
   (NULL, '新闻',      'news', '“宇”你一起“墨”契开黑，玩转五五！', NULL),
   (NULL, '新闻',      'news', '五五开黑节斗鱼节目单！宋茜、张佳宁降临峡谷', NULL),
   (NULL, '新闻',      'news', '骚白助力五五开黑节！百套玄策新皮肤在线送', NULL),
   (NULL, '新闻',      'news', '5月5日晚9点来薇娅直播间，王者爆款联名首发！', NULL),
   (NULL, '新闻',      'news', '狄某有话说丨什么是持续送头？木兰带你研究', NULL),
   (NULL, '新闻',      'news', '王者五五开黑节，10+明星组队朋友来相会！', NULL),
   (NULL, '新闻',      'news', '西施-诗语江南优化计划，仲夏夜之梦&凤凰于飞海报优化后效果', NULL),
   (NULL, '新闻',      'news', '公孙离-祈雪灵祝海报重绘方案票选结果公布', NULL),
   (NULL, '新闻',      'news', '快手棋王争霸赛', NULL),
   (NULL, '新闻',      'news', '狄某有话说｜有辅助装我不买，我就蹭线，哎，就是玩儿~', NULL),
   (NULL, '新闻',      'news', '老亚瑟的答疑时间：公孙离-祈雪灵祝皮肤最新优化进展', NULL),
   (NULL, '新闻',      'news', '公孙离-祈雪灵祝海报重绘方案投票活动开启', NULL),
   (NULL, '新闻',      'news', '“当趁东风——王者荣耀X潍坊风筝春日限定礼盒”正式上线啦！', NULL),
   (NULL, '新闻',      'news', '狄某有话说丨“Song TIME”时刻来临', NULL),
   (NULL, '新闻',      'news', '黑色情人节！分手大师阿电粉丝回馈日', NULL),
   (NULL, '新闻',      'news', '老亚瑟的答疑时间：妲己-女仆咖啡技能特效优化进度曝光', NULL),
   (NULL, '新闻',      'news', '斗鱼gemini杯战队选拔赛4强集结，共睹决战时刻！', NULL),
   (NULL, '新闻',      'news', '您的电竞梦想已邮递至府上：“荣耀邮你全民挑战赛”等你来挑战！', NULL),
   (NULL, '新闻',      'news', '与主播同台竞技?全国大赛合作赛道开启，更多专属福利等你来赢!', NULL),
   (NULL, '新闻',      'news', '梦奇局内待机休闲动作票选活动结果公告', NULL),
   -- 公告
   (NULL, '公告 热门', 'notice', '挂车行为专项违规处罚公告', NULL),
   (NULL, '公告',      'notice', '体验服专区福利升级维护，功能暂停使用', NULL),
   (NULL, '公告 热门', 'notice', '5月17日部分安卓机型闪退异常说明', NULL),
   (NULL, '公告 热门', 'notice', '5月13日“初夏超值福利卡”活动异常说明', NULL),
   (NULL, '公告 热门', 'notice', '5月12日净化游戏环境声明及处罚公告', NULL),
   (NULL, '公告 热门', 'notice', '5月12日“演员”惩罚名单', NULL),
   (NULL, '公告 热门', 'notice', '5月12日外挂专项打击公告', NULL),
   (NULL, '公告 热门', 'notice', '5月12日体验服违规处罚公告', NULL),
   (NULL, '公告',      'notice', '5月12日梦奇重塑-入梦之灵拼图活动标题文案描述错误说明', NULL),
   (NULL, '公告 热门', 'notice', '5月12日全服不停机更新公告', NULL),
   (NULL, '公告 热门', 'notice', '5月8日【限时秒杀】盘古“重装意志”活动异常说明', NULL),
   (NULL, '公告 热门', 'notice', '5月7日体验服停机更新公告', NULL),
   (NULL, '公告',      'notice', '5月6日净化游戏环境声明及处罚公告', NULL),
   (NULL, '公告',      'notice', '5月6日“演员”惩罚名单', NULL),
   (NULL, '公告',      'notice', '5月6日外挂专项打击公告', NULL),
   (NULL, '公告',      'notice', '5月6日体验服违规处罚公告', NULL),
   (NULL, '公告',      'notice', '5月3日全服不停机更新公告', NULL),
   (NULL, '公告',      'notice', '五五祝福，送限时语音活动补充说明', NULL),
   (NULL, '公告',      'notice', '5月1日全服不停机更新公告', NULL),
   (NULL, '公告',      'notice', '4月30日体验服停机更新公告', NULL),
   (NULL, '公告',      'notice', '4月30日全服不停机更新公告', NULL),
   (NULL, '公告',      'notice', '4月29日全服不停机更新公告', NULL),
   (NULL, '公告',      'notice', '4月28日净化游戏环境声明及处罚公告', NULL),
   (NULL, '公告',      'notice', '4月28日“演员”惩罚名单', NULL),
   (NULL, '公告',      'notice', '4月28日外挂专项打击公告', NULL),
   (NULL, '公告',      'notice', '4月28日体验服违规处罚公告', NULL),
   (NULL, '公告',      'notice', '4月28日体验服停机更新公告', NULL),
   (NULL, '公告',      'notice', '4月28日暂时屏蔽英雄曜使用说明', NULL),
   (NULL, '公告',      'notice', '4月28日对局异常说明', NULL),
   (NULL, '公告',      'notice', '4月28日全服不停机更新公告', NULL),
   -- 活动
   (NULL, '活动 热门', 'activity', '【限时秒杀】盘古重装意志', NULL),
   (NULL, '活动 热门', 'activity', '【助力5:20-音乐制作人】活动公告', NULL),
   (NULL, '活动 热门', 'activity', '甜蜜时光携手共度，音你心动爱在峡谷', NULL),
   (NULL, '活动 热门', 'activity', '“初夏超值福利卡”活动公告', NULL),
   (NULL, '活动 热门', 'activity', '凤凰偕飞抽奖活动限时上线', NULL),
   (NULL, '活动',      'activity', '凤凰偕飞活动相关FAQ', NULL),
   (NULL, '活动 热门', 'activity', '夏木荫荫正可人，峡谷福利享缤纷', NULL),
   (NULL, '活动 热门', 'activity', '峡谷来欢聚，初夏享好礼', NULL),
   (NULL, '活动',      'activity', '【五五皮肤 由你做主】票选明年五五皮肤所属英雄活动公告', NULL),
   (NULL, '活动',      'activity', '5月5日，组队不掉星，一定要来！', NULL),
   (NULL, '活动',      'activity', '【五五开黑节一定要做的6件事】活动公告', NULL),
   (NULL, '活动',      'activity', '【同城匹配：点亮同城的你】活动公告', NULL),
   (NULL, '活动',      'activity', '无处不团，有你才赞！五五开黑节多重福利大放送', NULL),
   (NULL, '活动',      'activity', '五五朋友卡享6大福利活动开启公告及FAQ', NULL),
   (NULL, '活动',      'activity', '王者好友盲盒定制机活动开启公告', NULL),
   (NULL, '活动',      'activity', '无处不团，有你才赞！五五开黑节多重福利大放送', NULL),
   (NULL, '活动',      'activity', '鸿运抽奖活动开启公告', NULL),
   (NULL, '活动',      'activity', '【入职探案】免费限时语音包-“掐指一算，这把能赢”活动公告', NULL),
   (NULL, '活动',      'activity', '春风携礼游峡谷，梦入江南烟水路', NULL),
   (NULL, '活动',      'activity', '【入职探案】免费限时语音包-“掐指一算，这把能赢”活动公告', NULL),
   (NULL, '活动',      'activity', '一元福利周活动公告', NULL),
   (NULL, '活动',      'activity', '人间四月春融融，峡谷好礼情意浓', NULL),
   (NULL, '活动',      'activity', 'S23赛季开启，新版本多重福利等你领取', NULL),
   (NULL, '活动',      'activity', '【助威拿“新十代勋章”】活动公告', NULL),
   (NULL, '活动',      'activity', '【微信用户专属】微信小程序“游戏礼品站”购买“李元芳-飞鸢探春”皮肤抽免单活动', NULL),
   (NULL, '活动',      'activity', '春满峡谷四月天，当趁东风放纸鸢', NULL),
   (NULL, '活动',      'activity', '一春花繁近清明，峡谷福利享不停', NULL),
   (NULL, '活动',      'activity', '【助威拿“一起赢荣耀播报”】活动公告', NULL),
   (NULL, '活动',      'activity', '【2021春夏赛事战令】开启公告', NULL),
   (NULL, '活动',      'activity', '自然之灵拼图活动开启，三月春风伴好礼  ', NULL),
   -- 赛事
   (NULL, '赛事',      'match', '十六强集结，骚白战队首亮相！斗鱼大师赛S3精彩揭幕', NULL),
   (NULL, '赛事',      'match', '四周超四万人报名，女选手当仁不让!全国大赛合作赛道海选赛数据回顾', NULL),
   (NULL, '赛事',      'match', '赛点搬到家门口|第三届王者荣耀全国大赛城市赛道盛况空前，王者人生助力全民绽放电竞', NULL),
   (NULL, '赛事',      'match', '集合，目标武汉总决赛！全国大赛城市赛道第一期晋级资格赛战队巡礼', NULL),
   (NULL, '赛事',      'match', '全国大赛全国行｜这个五一你参赛了吗？第三届王者荣耀全国大赛第一期大区决赛完美收官', NULL),
   (NULL, '赛事',      'match', '大神主播与民间高手巅峰相遇，王者荣耀全国大赛合作赛道第三届企鹅大神杯正赛开赛在即', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛福建省第二期省赛悬念揭晓！快来救救我战队问鼎八闽之巅！', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛福建省海选赛泉州领SHOW天地站圆满落幕！电竞赋能“文旅+', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛福建省海选赛莆田万达站圆满收官！', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛华东大区第二期江苏省城市海选赛/省赛落幕', NULL),
   (NULL, '赛事',      'match', '扬帆起航,共逐荣耀!华东大区第一期大区决赛!盐城RC战队夺冠', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛城市赛道辽宁第二期赛事活动，圆满收官！', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛城市赛道第二期海选赛大连佳兆业广场站圆满结束！', NULL),
   (NULL, '赛事',      'match', '玩儿出名堂！第三届王者荣耀全国大赛第二期北京省赛圆满落幕', NULL),
   (NULL, '赛事',      'match', '赛点搬到家门口｜全国大赛盛况空前，王者人生助力全民绽放电竞魅力', NULL),
   (NULL, '赛事',      'match', '一路躺赢?现场求婚?全国大赛春日限定故事会大放送!', NULL),
   (NULL, '赛事',      'match', '狮舞岭南，粤战粤勇!第三届王者荣耀全国大赛华南赛区第一期决赛!深圳秦夺冠!', NULL),
   (NULL, '赛事',      'match', '英雄江城凤鼓鸣响，荆楚少年战舰起航！武汉YCG战队问鼎华中赛区大区联赛第一期决赛', NULL),
   (NULL, '赛事',      'match', '风云际会——第三届王者荣耀全国大赛第二期河南省赛圆满结束！', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛—郑州大卫城凯迪拉克站圆满落幕！', NULL),
   (NULL, '赛事',      'match', '全胜战绩！荣誉加冕！第三届王者荣耀全国大赛 东南赛区第一期决赛！杭州谜鹿电竞夺冠', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛福建省省赛重磅来袭！', NULL),
   (NULL, '赛事',      'match', '诗画浙江书写你的荣耀 第三届王者荣耀全国大赛东南赛区 系列赛事报名通道已开启！', NULL),
   (NULL, '赛事',      'match', '王者荣耀全国大赛×世界智能大会，峡谷召唤师齐聚津门热血开团！', NULL),
   (NULL, '赛事',      'match', '赛事回顾丨第三届王者荣耀全国大赛江门和兴广场站圆满结束！', NULL),
   (NULL, '赛事',      'match', '“召唤师”集结！电竞文旅融合打造王者荣耀城市海选赛“湖南”样本', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛东北大区第一期大区决赛哈尔滨站震撼来袭！', NULL),
   (NULL, '赛事',      'match', '【扬帆起航，共逐荣耀】第三届王者荣耀全国大赛华东大区第一期大区联赛即将开战', NULL),
   (NULL, '赛事',      'match', '北京星浪夺冠！第三届王者荣耀全国大赛第一期大区联赛华北赛区决赛圆满落幕', NULL),
   (NULL, '赛事',      'match', '第三届王者荣耀全国大赛—郑州丹尼斯大卫城凯迪拉克站开赛在即！', NULL);


-- ----------------------------------------------

-- 创建 英雄列表
CREATE TABLE hero (
   hid INT PRIMARY KEY AUTO_INCREMENT,
   hname VARCHAR(255) NOT NULL,
   `type` VARCHAR(100) NOT NULL,
   img VARCHAR(255) NOT NULL
);

INSERT INTO hero VALUES 
   (NULL, '廉颇',     '坦克',           './images/home/hero/105.jpg'),
   (NULL, '小乔',     '法师',           './images/home/hero/106.jpg'),
   (NULL, '赵云',     '战士 刺客',      './images/home/hero/107.jpg'),
   (NULL, '墨子',     '法师 战士',      './images/home/hero/108.jpg'),
   (NULL, '妲己',     '法师 热门',      './images/home/hero/109.jpg'),
   (NULL, '嬴政',     '法师',           './images/home/hero/110.jpg'),
   (NULL, '孙尚香',   '射手',           './images/home/hero/111.jpg'),
   (NULL, '鲁班七号', '射手 热门',      './images/home/hero/112.jpg'),
   (NULL, '庄周',     '游走 坦克',      './images/home/hero/113.jpg'),
   (NULL, '刘禅',     '游走 坦克',      './images/home/hero/114.jpg'),
   (NULL, '高渐离',   '法师',           './images/home/hero/115.jpg'),
   (NULL, '阿珂',     '刺客',           './images/home/hero/116.jpg'),
   (NULL, '钟无艳',   '战士 坦克',      './images/home/hero/117.jpg'),
   (NULL, '孙斌',     '游走 法师',      './images/home/hero/118.jpg'),
   (NULL, '扁鹊',     '法师',           './images/home/hero/119.jpg'),
   (NULL, '白起',     '坦克',           './images/home/hero/120.jpg'),
   (NULL, '芈月',     '法师 坦克',      './images/home/hero/121.jpg'),
   (NULL, '吕布',     '战士 坦克 热门', './images/home/hero/123.jpg'),
   (NULL, '周瑜',     '法师',           './images/home/hero/124.jpg'),
   (NULL, '元歌',     '刺客',           './images/home/hero/125.jpg'),
   (NULL, '夏侯惇',   '坦克 战士',      './images/home/hero/126.jpg'),
   (NULL, '甄姬',     '法师',           './images/home/hero/127.jpg'),
   (NULL, '曹操',     '战士',           './images/home/hero/128.jpg'),
   (NULL, '典韦',     '战士',           './images/home/hero/129.jpg'),
   (NULL, '宫本武藏', '战士',           './images/home/hero/130.jpg'),
   (NULL, '李白',     '刺客',           './images/home/hero/131.jpg'),
   (NULL, '马可波罗', '射手',           './images/home/hero/132.jpg'),
   (NULL, '狄仁杰',   '射手',           './images/home/hero/133.jpg'),
   (NULL, '达摩',     '战士 坦克',      './images/home/hero/134.jpg'),
   (NULL, '项羽',     '坦克',           './images/home/hero/135.jpg'),
   (NULL, '武则天',   '法师',           './images/home/hero/136.jpg'),
   (NULL, '司马懿',   '刺客 法师',      './images/home/hero/137.jpg'),
   (NULL, '老夫子',   '战士',           './images/home/hero/139.jpg'),
   (NULL, '关羽',     '战士',           './images/home/hero/140.jpg'),
   (NULL, '貂蝉',     '法师 刺客',      './images/home/hero/141.jpg'),
   (NULL, '安琪拉',   '法师 热门',      './images/home/hero/142.jpg'),
   (NULL, '程咬金',   '坦克 战士',      './images/home/hero/144.jpg'),
   (NULL, '露娜',     '战士 法师',      './images/home/hero/146.jpg'),
   (NULL, '姜子牙',   '法师',           './images/home/hero/148.jpg'),
   (NULL, '刘邦',     '坦克',           './images/home/hero/149.jpg'),
   (NULL, '韩信',     '刺客',           './images/home/hero/150.jpg'),
   (NULL, '王昭君',   '法师',           './images/home/hero/152.jpg'),
   (NULL, '兰陵王',   '刺客',           './images/home/hero/153.jpg'),
   (NULL, '花木兰',   '战士 刺客',      './images/home/hero/154.jpg'),
   (NULL, '艾琳',     '射手',           './images/home/hero/155.jpg'),
   (NULL, '张良',     '法师',           './images/home/hero/156.jpg'),
   (NULL, '不知火舞', '法师 刺客',      './images/home/hero/157.jpg'),
   (NULL, '娜可露露', '刺客',           './images/home/hero/162.jpg'),
   (NULL, '橘右京',   '刺客 战士',      './images/home/hero/163.jpg'),
   (NULL, '亚瑟',     '战士 坦克 热门', './images/home/hero/166.jpg'),
   (NULL, '孙悟空',   '刺客 战士 热门', './images/home/hero/167.jpg'),
   (NULL, '牛魔',     '游走 坦克',      './images/home/hero/168.jpg'),
   (NULL, '后裔',     '射手 热门',      './images/home/hero/169.jpg'),
   (NULL, '刘备',     '战士',           './images/home/hero/170.jpg'),
   (NULL, '张飞',     '游走 坦克',      './images/home/hero/171.jpg'),
   (NULL, '李元芳',   '射手',           './images/home/hero/173.jpg'),
   (NULL, '虞姬',     '射手 热门',      './images/home/hero/174.jpg'),
   (NULL, '钟馗',     '游走 法师',      './images/home/hero/175.jpg'),
   (NULL, '杨玉环',   '法师',           './images/home/hero/176.jpg'),
   (NULL, '成吉思汗', '射手',           './images/home/hero/177.jpg'),
   (NULL, '杨戬',     '战士',           './images/home/hero/178.jpg'),
   (NULL, '女娲',     '法师',           './images/home/hero/179.jpg'),
   (NULL, '哪吒',     '战士',           './images/home/hero/180.jpg'),
   (NULL, '干将莫邪', '法师',           './images/home/hero/182.jpg'),
   (NULL, '雅典娜',   '战士',           './images/home/hero/183.jpg'),
   (NULL, '蔡文姬',   '游走',           './images/home/hero/184.jpg'),
   (NULL, '太乙真人', '游走 坦克',      './images/home/hero/186.jpg'),
   (NULL, '东皇太一', '游走 坦克',      './images/home/hero/187.jpg'),
   (NULL, '鬼谷子',   '游走',           './images/home/hero/189.jpg'),
   (NULL, '诸葛亮',   '法师 热门',      './images/home/hero/190.jpg'),
   (NULL, '大乔',     '游走',           './images/home/hero/191.jpg'),
   (NULL, '黄忠',     '射手',           './images/home/hero/192.jpg'),
   (NULL, '凯',       '战士 坦克 热门', './images/home/hero/193.jpg'),
   (NULL, '苏烈',     '坦克 战士',      './images/home/hero/194.jpg'),
   (NULL, '百里玄策', '刺客',           './images/home/hero/195.jpg'),
   (NULL, '百里守约', '射手 刺客',      './images/home/hero/196.jpg'),
   (NULL, '弈星',     '法师',           './images/home/hero/197.jpg'),
   (NULL, '梦奇',     '战士 法师',      './images/home/hero/198.jpg'),
   (NULL, '公孙离',   '射手',           './images/home/hero/199.jpg'),
   (NULL, '沈梦溪',   '法师',           './images/home/hero/312.jpg'),
   (NULL, '明世隐',   '游走',           './images/home/hero/501.jpg'),
   (NULL, '裴擒虎',   '刺客 战士',      './images/home/hero/502.jpg'),
   (NULL, '狂铁',     '战士',           './images/home/hero/503.jpg'),
   (NULL, '米莱迪',   '法师',           './images/home/hero/504.jpg'),
   (NULL, '瑶',       '游走',           './images/home/hero/505.jpg'),
   (NULL, '云中君',   '刺客 战士',      './images/home/hero/506.jpg'),
   (NULL, '李信',     '战士',           './images/home/hero/507.jpg'),
   (NULL, '伽罗',     '射手',           './images/home/hero/508.jpg'),
   (NULL, '盾山',     '游走 坦克',      './images/home/hero/509.jpg'),
   (NULL, '孙策',     '战士 坦克',      './images/home/hero/510.jpg'),
   (NULL, '猪八戒',   '坦克',           './images/home/hero/511.jpg'),
   (NULL, '上官婉儿', '法师 刺客',      './images/home/hero/513.jpg'),
   (NULL, '嫦娥',     '法师 坦克',      './images/home/hero/515.jpg'),
   (NULL, '马超',     '战士 刺客',      './images/home/hero/518.jpg'),
   (NULL, '曜',       '战士',           './images/home/hero/522.jpg'),
   (NULL, '西施',     '法师',           './images/home/hero/523.jpg'),
   (NULL, '蒙犽',     '射手',           './images/home/hero/524.jpg'),
   (NULL, '鲁班大师', '游走',           './images/home/hero/525.jpg'),
   (NULL, '蒙恬',     '战士 坦克',      './images/home/hero/527.jpg'),
   (NULL, '澜',       '刺客',           './images/home/hero/528.jpg'),
   (NULL, '盘古',     '战士',           './images/home/hero/529.jpg'),
   (NULL, '镜',       '刺客',           './images/home/hero/531.jpg'),
   (NULL, '阿古朵',   '坦克 游走',      './images/home/hero/533.jpg'),
   (NULL, '夏洛特',   '战士',           './images/home/hero/536.jpg'),
   (NULL, '司空震',   '战士 法师',      './images/home/hero/537.jpg');


-- ----------------------------------------------

-- 创建 精彩视频板块
CREATE TABLE greatVideo (
   gid INT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(255) NOT NULL,
   `type` VARCHAR(100) NOT NULL,
   `count` INT,
   img VARCHAR(255) NOT NULL,
   `date` TIMESTAMP
);

INSERT INTO greatVideo VALUES 
   -- 精彩栏目
   (NULL, '【整活吧小阿金】01：澜CG配音猛男版，BLUE坑惨澜朋友', '精彩栏目', 0, './images/home/14.jpg', NULL),
   (NULL, '【棋高一招2】第22期 总决赛阵容哪家强，总决赛MVP—TES.简单为你解析', '精彩栏目', 0, './images/home/16.jpg', NULL),
   (NULL, '澜被孙策救了后，变成了一只鲨狗【策见打】', '精彩栏目', 0, './images/home/17.png', NULL),
   (NULL, '【狄仁杰封神榜】第29期 九人卡巅峰赛内排？统统封掉！', '精彩栏目', 0, './images/home/0.jpg', NULL),
   -- 英雄攻略
   (NULL, '王者峡谷 盘古身法连招难度排行榜', '英雄攻略', 0, './images/home/18.jpg', NULL),
   (NULL, '王者本色：孙悟空逆风局收割，拿五杀扭转乾坤！', '英雄攻略', 0, './images/home/19.jpg', NULL),
   (NULL, 'S23赛季的李元芳到底香在哪里？', '英雄攻略', 0, './images/home/20.png', NULL),
   (NULL, '【大神秀】第51期：澜丝血绝地反杀，狂铁团战打到疲倦', '英雄攻略', 0, './images/home/21.jpg', NULL),
   -- 赛事精品
   (NULL, '【王者炸麦了】第七期：南京hero内部辈分混乱，成都AG超玩会.爱思变身易峥迷妹', '赛事精品', 0, './images/home/23.jpg', NULL),
   (NULL, '【荣耀大话王Ⅶ】第八期：暴风锐卖力表演大型社死现场 超级奶油机使选手间互相打脸', '赛事精品', 0, './images/home/24.jpg', NULL),
   (NULL, '【王者炸麦了】第六期：RW侠.花云侠客之风五杀救主，重庆QG萌汉子版心疼哥哥', '赛事精品', 0, './images/home/25.jpg', NULL),
   (NULL, '【荣耀大话王Ⅶ】第七期：久酷小剧场泄私仇遭无畏痛捶 阿豆暖阳倒放挑战爆笑不停歇', '赛事精品', 0, './images/home/26.jpg', NULL);


-- 查看表数据
SELECT *FROM greatVideo;

-- 查看表结构
DESC message;

-- 查看所有表
SHOW TABLES;
-- 删除表
DROP TABLE message;


