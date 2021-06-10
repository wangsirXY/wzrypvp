//首页渲染
let list = document.querySelector('.index .list ul')
list.innerHTML = storyListData.map(function (item) {
    return `
    <li>
    <img src="${item.image}" alt="">
    <div class="list-left">
        <span class="${item.title == '漫画' ? 'purple' : item.title == '视频' ? 'gree' : 'blue'}">${item.title}</span><em></em>
        <p>${item.text}</p>
    </div>
    </li>`
}).join('')
let index = document.querySelector('.index')
//首页轮播渲染
let banner = document.querySelector('.index .banner .carousel-inner')
let  bannerTop = document.querySelector('.index .banner .carousel-indicators')
banner.innerHTML = storyImageData.map(function (item,mun) {
    return `
      <div class="item ${mun==0?'active':''}">
          <img src="${item.image}" alt="轮播图">
      </div>
    `
}).join('')
bannerTop.innerHTML=storyImageData.map(function(item,mun){
    return`
    <li data-target="#carousel-example-generic" data-slide-to="${i=item.id}" class="${mun==0?'active':''}"></li>
    `
}).join('')
//英雄页面渲染
//英雄头部渲染
let horeList = document.querySelector('.hore .list')
let a = '全部英雄';
let b = '区域'
let sele = document.querySelector('.hore .top select')
let horetab = document.querySelector('.hore .top')
horeTop(a, b)
function horeTop(str, num) {
    horeList.innerHTML = storyTopsData.map(function (item) {
        if (item.title == `${num}`) {
            return `<ul class="flex"${item.width}>
            ${item.date.map(function (itam) {
                return `
                <li class="${itam == str ? 'ative' : ''}">${itam}</li>
                `
            }).join('')}      
         </ul>
         `
        }
    }).join('')
}
//头部点击事
horetab.addEventListener('click', function (e) {
    if (e.target.nodeName == 'LI') {
        a = e.target.innerHTML
        gatHore(a, b)
    } else if (e.target.nodeName == 'SELECT') {
        if (e.target.value == b) {
            return
        }
        b = e.target.value
        a = '全部英雄'
        gatHore(a, b)
    }
    horeTop(a, b)
})
//英雄渲染
let hore = document.querySelector('.hore .body ul')
//初始渲染
hore.innerHTML = storyImgData.map(function (item, mun) {
    return `<li style="animation: jianru  ${0.6 * mun + 0.6 >= 1.2 ? 1 : 0.6 * mun + 0.6}s;"><img src="${item.src}" alt=""></li>`
}).join('')
//点击渲染
function gatHore(kind, classifye) {
    hore.innerHTML = storyImgData.map(function (item, mun) {
        if (classifye == '职业') {
            if (item.profession.indexOf(kind) != -1 || kind == '全部英雄') {
                return `<li style="animation: jianru  ${0.6 * mun + 0.6 >= 1.2 ? 1 : 0.6 * mun + 0.6}s;"><img src="${item.src}" alt=""></li>`
            }
        } else if (classifye == '区域') {
            if (item.area.indexOf(kind) != -1 || kind == '全部英雄') {
                return `<li style="animation: jianru  ${0.6 * mun + 0.6 >= 1.2 ? 1 : 0.6 * mun + 0.6}s;"><img src="${item.src}" alt=""></li>`
            }
        } else {

            let text = /^[A-G]$/;
            if (kind == 'H~N') {
                text = /^[H-N]$/
            } else if (kind == 'O~U') {
                text = /^[O-U]$/
            } else if (kind == 'V~Z') {
                text = /^[V-Z]/
            }
            if (text.test(item.spell) || kind == '全部英雄') {
                return `<li style="animation: jianru  ${0.6 * mun + 0.6 >= 1.2 ? 1 : 0.6 * mun + 0.6}s;"><img src="${item.src}" alt=""></li>`
            }
        }
    }).join('')
}

//故事站鉴赏渲染
let app = document.querySelector('.appreciate .box ul')
appreciate()
let apps = document.querySelectorAll('.appreciate .box ul li')
for (let i = 0; i < apps.length; i++) {
    apps[i].addEventListener('click', function () {
        gat(apps, true)
        this.className = 'app'
        this.style = 'animation-name:appreciateAdd;animation-duration: 0.6s;';
    })
}
function appreciate() {
    app.innerHTML = storyAppreciateDate.map(function (item, mun) {
        return `
       <li style="animation: appreciate ${0.1 * mun + 0.1}s">
       <div style="background-imgae:url(${item.image})"></div>
       <p><img src="${item.title}"></p>
       <p></p>
       <img src="${item.src}" alt="">
       </li>
       `
    }).join('')
}
// tab切换
let tab = document.querySelectorAll('.tab ul li')
let w = document.querySelector('.story')

let wall = Array.from(w.children)
wall.length=4
console.log(wall)
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function () {
        if(this.innerHTML=='凤云志'){
            alert('亲，本次活动只有pc用户才能参与哦。')
            return
        }
        gat(wall, false)
        wall[i].style = ''
        gat(tab, true)
        this.className = 'ative' 
    })
}
//排他
function gat(str, ever) {
    for (let i = 0; i < str.length; i++) {
        if (ever) {
            str[i].className = ''
            str[i].style = ''
        } else {
            str[i].style = 'display:none'
        }

    }
}
