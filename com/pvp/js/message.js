let box1 = document.querySelector('#carousel-example-generic')
let box2 = document.querySelector('.carousel-inner')
let banner = document.querySelector('.banner')
let data = [
    // 皮肤
    {
        type: "皮肤",
        data: [
            {
                title: "「音你心动·小乔」5月20日上线",
                img: "../images/message/29c70f5d382be11b4087a345a406825f.jpg",
            },
            {
                title: "「音你心动·周瑜」5月20日上线",
                img: "../images/message/7df15772e0493859e840b8de3eaca935.jpg",
            },
            {
                title: "「热力回旋·百里玄策」5月1日上线",
                img: "../images/message/16195916971791.jpg",
            },
            {
                title: "「缤纷绘卷·张良」5月1日上线",
                img: "../images/message/16195916971791.jpg",
            },
            {
                title: "「意志重装·盘古」5月8日上线",
                img: "../images/message/16195045305722.jpg",
            },
            {
                title: "「诗雨江南·西施」4月22日上线",
                img: "../images/message/16195045305722.jpg",
            }
        ]
    },
    // 英雄
    {
        type: "英雄",
        data: [
            {
                title: "入梦之灵-梦奇 5月11日上线",
                img: "../images/message/16206381978301.jpg",
            },
            {
                title: "精灵之舞-艾琳 4月8日上线",
                img: "../images/message/16176979892946.jpg",
            },
            {
                title: "雷霆之王-司空震 1月14日上线",
                img: "../images/message/16103414457529.jpg",
            },
            {
                title: "鲨之猎刃-澜 12月8日上线",
                img: "../images/message/7df15772e0493859e840b8de3eaca935.jpg",
            },
            {
                title: "玫瑰剑士-夏洛特 9月24日上线",
                img: "../images/message/db6b95e8df478a998fbd2d5a24c413fc.jpg",
            },
            {
                title: "山林之子-阿古朵 8月4日上线",
                img: "../images/message/b450a8c24f8ecb8e5898c752dc521d88.jpg",
            },
        ]
    },
    // 玩法
    {
        type: "玩法",
        data: [
            {
                title: "玩法-守卫峡谷",
                img: "../images/message/16106990633027.jpg",
            },
            {
                title: "玩法-1v1镜像战",
                img: "../images/message/61464152f471ed15e646939a00c3947f.jpg",
            },
            {
                title: "王者模拟战（s1赛季）",
                img: "../images/message/e8bc96eac6369b7d0038f9a385afc233.jpg",
            },
            {
                title: "新模式-变身大作战（正式服）",
                img: "../images/message/62ee62470d8ace05f5248147417263df.jpg",
            },
            {
                title: "新模式-变身大作战",
                img: "../images/message/237b22e63ce5f9f397b0c8f0ebe7791a.png",
            },
            {
                title: "梦境大乱斗 6月27日上线",
                img: "../images/message/c90140e11bf23090d3c4b3121df1bdd5.jpg",
            },
        ]
    },
    // 系统
    {
        type: "系统",
        data: [
            {
                title: "战队赛-全国大赛 1月9日上线",
                img: "../images/message/d766af55b6c71ef9bed06b3c794155ca.jpg",
            },
            {
                title: "排位赛新赛季 10月17日上线",
                img: "../images/message/6ae946a8751adbaa2e47ff108eb1dddb.jpg",
            },
            {
                title: "万象天工 8月15日上线",
                img: "../images/message/bbfcc886587ef757e675325a609a052b.jpg",
            },
            {
                title: "选手认证 8月15日上线",
                img: "../images/message/ea6902f02a65fa248415c9f8088f3675.jpg",
            },
            {
                title: "抢鲲大作战 7月16上线",
                img: "../images/message/719532d2b463fd38e8fb5785ee3ae301.jpg",
            },
            {
                title: "福利系统云端梦境 6月27上线",
                img: "../images/message/7df15772e0493859e840b8de3eaca935.jpg",
            },
        ]
    },
    // 美术优化
    {
        type: "美术优化",
        data: [
            {
                title: "凤凰于飞美术优化 5月11日上线",
                img: "../images/message/16176979892946.jpg",
            },
            {
                title: "电玩小子美术优化 1月14日上线",
                img: "../images/message/16100929823769.jpg",
            },
            {
                title: "武灵仙君美术优化 10月14日上线",
                img: "../images/message/5e1f672c151376eedaac3bf9e232f770.jpg",
            },
            {
                title: "天鹅之梦美术优化 9月24日上线",
                img: "../images/message/29c70f5d382be11b4087a345a406825f.jpg",
            },
            {
                title: "繁星吟游美术优化 8月25上线",
                img: "../images/message/efce5158c44468968e01b5ff02601040.jpg",
            },
            {
                title: "龙骑士美术优化 8月11上线",
                img: "../images/message/16103414457529.jpg",
            },
        ]
    }
]

//轮播图循环遍历数据
banner.innerHTML =  data.map(function (item,index) {
    return `
        <div id=${'carousel-example-generic_' + index} class="carousel slide" data-ride="carousel">
            <h2>${item.type}</h2>
            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
            ${item.data.map(function (item2, index) {
                return`
                    <div class="item ${index == 0 ? "active" : ""}">
                        <h3>${item2.title}</h3>
                        <img src="${item2.img}" alt="轮播图">
                        <div class="carousel-caption"></div>
                    </div>
                `}).join('')}
            </div>

            <!-- Indicators -->
            <ol class="carousel-indicators">
            ${item.data.map((item, index) => {
                return `
                    <li data-target="#carousel-example-generic_${index}" data-slide-to="${index}" ${index == 0 ? 'class="active"' : ''} ></li>
                `
            }).join('')}
            </ol>

            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic_${index}" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic_${index}" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

            <div class="examine">
                <span>点击查看全部</span>
            </div>
        </div>
    `
}).join('')

var drop = document.querySelector('.drop-down');
var first = document.querySelector('.first-skin')
drop.addEventListener('click', function (event) {
    event = event || window.event;
    if(event.target.innerHTML == '全部显示') {
        first.style.height = '17.5rem'
        event.target.innerHTML="收起"
    } else if(event.target.innerHTML == '收起') {
        first.style.height = '10.5rem'
        event.target.innerHTML="全部显示"
    }
})