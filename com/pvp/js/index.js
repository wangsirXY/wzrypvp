//#region 渲染 banner
let dot = document.querySelector('.carousel-indicators');
let box = document.querySelector('.carousel-inner');

axios({
    url: 'http://localhost:3306/getSlide',
    mothod: 'get',
}).then(res => {
    // console.log(res.data, 'res');

    box.innerHTML = res.data.map((item, index) => {
        return `
            <div class="${index == 0 ? "active" : ""} item">
                <img src="${item.img}" alt="轮播图">
            </div>
        `;
    }).join('');
    
    dot.innerHTML = res.data.map((item, index) => {
        return `
            <li data-target="#carousel-example-generic" data-slide-to="${index}" class="${index == 0 ? "active" : ""}"></li>
        `;
    }).join('');

}).catch(error => {
    // console.log(error, 'error');
});

//#endregion


//#region 渲染子页面导航 - 按钮点击事件

let unfold = document.querySelector('.btn-unfold');
let unfoldIcon = document.querySelector('.btn-unfold .icon-unfold');
let unfoldName = document.querySelector('.name-unfold');
let unfoldUl = document.querySelector('.fun ul');
let flag = false;

unfold.addEventListener('click', (e = window.event) => {
    flag = flag ? false : true;
    
    unfoldIcon.style.transform = flag ? 'rotateZ(0deg)' : 'rotateZ(180deg)';
    unfoldIcon.style.backgroundPosition = flag ? '-164px -274px' : '-167px -274px';
    unfoldUl.style.height = flag ? 'auto' : '70px';
    unfoldName.innerHTML = flag ? '收起' : '展开';
});

//#endregion


//#region 新闻资讯 - Tab栏切换点击事件
let msgList = document.querySelector('.message-list');
let msgItem = document.querySelector('.message-item');

/* 点击切换类名 */
renderListClick(msgList);

/* 渲染新闻资讯 */
// 渲染点击列表
let types = [
    { cn: '热门', en: 'hot' },
    { cn: '新闻', en: 'news' },
    { cn: '公告', en: 'notice', },
    { cn: '活动', en: 'activity' },
    { cn: '赛事', en: 'match' },
];
let btns = document.querySelector('.message-list');
btns.innerHTML = types.map((item, index) => {
    return `
        <li><a href="javascript:void(0);" data-index=${index} ${index == 0 ? 'class="active"' : ''}>${item.cn}</a></li>
    `;
}).join('');



// 渲染列表数据 - 数据库接口
let content = document.querySelector('.message-item');

$.ajax({
    url: `http://localhost:3306/getMessage`,
    type: 'get',
    success: function (data) {
        // console.log(data, "messageData");

        types.map((typesItem, index) => {
            let ul = document.createElement('ul');
            ul.classList.add(typesItem.en);

            // 筛选每一个类型的数据
            let arr = [];
            data.map(item => {
                item.tag.split(" ").includes(typesItem.cn) && arr.push(item);
            });

            // 打乱热门的数据
            if (arr[0].tag.split(" ").includes("热门")) {
                arr.sort(function(){ return 0.5 - Math.random() });
            }

            // 内层循环 - 创建列表项
            for (let i=0; i<5; i++) {
                let li = document.createElement('li');

                // 当前为热门时，渲染原本的类型
                li.innerHTML = `
                    <a href="javascript:void(0);" class="${arr[i].en}">
                        <span class="message-tag">${arr[i].tag.split(" ")[0]}</span>
                        <span class="message-txt">${arr[i].title}</span>
                        <span class="message-date">${arr[i].DATE.slice(5, 10).replace('-', '/')}</span>
                    </a>
                `;

                ul.appendChild(li);
            }

            content.appendChild(ul);
        }).join('');

        // 渲染列表项的定位
        renderItem(document.querySelectorAll('.message-item ul'), 0);
    }
});


//#region 点击事件 - 更改列表位置
btns.addEventListener('click', (e = window.event) => {
    if (e.target.nodeName == 'A') {
        renderItem(document.querySelectorAll('.message-item ul'), +e.target.dataset.index);
    }
});
//#endregion

//#endregion


//#region 英雄列表 - Tab栏切换点击事件

let heroList = document.querySelector('.hero-list');
let heroItem = document.querySelector('.hero-item');

// 渲染点击列表
let heroType = [
    { cn: '热门', en: 'hot' },
    { cn: '战士', en: 'zs' },
    { cn: '法师', en: 'fs', },
    { cn: '坦克', en: 'tk' },
    { cn: '刺客', en: 'ck' },
    { cn: '射手', en: 'ss' },
    { cn: '游走', en: 'yz' },
];

heroList.innerHTML = heroType.map((item, index) => {
    return `
        <li><a href="javascript:void(0);" data-index=${index} ${index == 0 ? 'class="active"' : ''}>${item.cn}</a></li>
    `;
}).join('');

// 调用点击事件-切换类名
renderListClick(heroList);

// 渲染列表数据 - 数据库接口
$.ajax({
    url: `http://localhost:3306/getHero`,
    type: 'get',
    success: function (data) {
        // console.log(data, "heroData");

        renderHeroItem ('热门', data);

        heroList.addEventListener('click', (e = window.event) => {
            if (e.target.nodeName == "A") {
                renderHeroItem(e.target.innerText, data);
            }
        });
    }
});
//#endregion


//#region 精彩视频 - 渲染
let videoList = document.querySelector('.greatVideo-list');
let videoItem = document.querySelector('.greatVideo-item');

// 渲染点击列表 - 切换类名
renderListClick(videoList);

// 渲染列表数据 - 数据库接口
$.ajax({
    url: `http://localhost:3306/getgreatVideo`,
    type: 'get',
    success: function (data) {
        // console.log(data, "greatVideo");

        renderVideo ('精彩栏目', data);

        videoList.addEventListener('click', (e = window.event) => {
            if (e.target.nodeName == "A") {
                renderVideo (e.target.innerText, data);
            }
        });

    }
});

//#endregion



/* 渲染视频列表 */
function renderVideo (types, data) {
    videoItem.innerHTML = data.map(item => {
        if (item.type == types) {
            return `
                <div class="item-box">
                    <img src="${item.img}" alt="">
                    <p>${item.title}</p>
                    <div class="v-infor">
                        <i class="play">${item.count}</i>
                        <em class="date">${item.date.slice(5,7)}-${item.date.slice(8,10)}</em>
                    </div>
                </div>
            `;
        }
    }).join('');
}

/* 渲染英雄列表 */
function renderHeroItem (type, data) {
    let ul = document.createElement('ul');

    // 筛选当前类型的数据
    let arr = [];
    data.map(itemData => {
        itemData.type.split(" ").includes(type) && arr.push(itemData);
    });

    ul.innerHTML = arr.map((item, index) => {
        return `
            <li>
                <a href="./error.html">
                    <img src="${item.img}" alt="${item.hname}">
                    <h3>${item.hname}</h3>
                </a>
            </li>
        `;
    }).join('');

    heroItem.innerHTML = "";
    heroItem.appendChild(ul);
}

/* 封装渲染-点击事件-切换类名 */
function renderListClick(list) {
    list.addEventListener('click', (e = window.event)=> {
        if (e.target.nodeName == 'A') {
            [...list.querySelectorAll('a')].map(item => {
                item.className.indexOf('active') != -1 && item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
}

// 封装 渲染列表项位置
function renderItem (arr, idx) {
    [...arr].map((item, index) => {
        item.style.transform = `translateX(${(index - idx) * 100}%)`;
    });
};