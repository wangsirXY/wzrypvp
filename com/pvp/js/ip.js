let navBox = document.querySelector('.nav-tabs');
let ip = document.querySelector('.ip');

navBox.addEventListener('click', (e = window.event) => {
    if (e.target.nodeName == 'A') {
        /* 更改背景图 */
        if (e.target.nodeName == "A") {
            ip.style.background = e.target.dataset.index == 0 ? 'url(../images/ip/bg1.jpg) no-repeat' : 'url(../images/ip/bg2.jpg) no-repeat';
            ip.style.backgroundSize = "100%";
            ip.style.transition = "background .5s";
        }
    }
})

