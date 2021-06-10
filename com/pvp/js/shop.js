let dot = document.querySelector('.carousel-indicators');
let box = document.querySelector('.carousel-inner');

let res = [
    `../images/shop/20210511111131_373613.jpg`,
    `../images/shop/20210511172458_741499.png`,
    `../images/shop/20210516143856_922060.jpg`,
    `../images/shop/20210517000016_604560.jpg`,
    `../images/shop/20210508204035_517034.jpg`,
]

box.innerHTML = res.map((item, index) => {
    return `
        <div class="${index == 0 ? "active" : ""} item">
            <img src="${item}" alt="轮播图">
        </div>
    `;
}).join('');

dot.innerHTML = res.map((item, index) => {
    return `
        <li data-target="#carousel-example-generic" data-slide-to="${index}" class="${index == 0 ? "active" : ""}"></li>
    `;
}).join('');




let footerList = document.querySelector('footer ul');
renderListClick(footerList);

/* 切换类名 */
function renderListClick(list) {
    list.addEventListener('click', (e = window.event)=> {
        if (e.target.nodeName == 'IMG' || 'P') {
            [...list.querySelectorAll('LI')].map(item => {
                item.className.indexOf('active') != -1 && item.classList.remove('active');
            });
            e.target.parentNode.classList.add('active');
        }
    });
}