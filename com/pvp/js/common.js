//#region header 头部共用板块
// document.querySelector(".download a").addEventListener("click", () => {
// 	tips.style.display = "block";
// 	// 取消隐藏层
// 	let time = setInterval(() => {
// 		p.innerHTML = "正在跳转 APP Store......";
// 		let timeHref = setInterval(() => {
// 			tips.style.display = "none";
// 			clearInterval(timeHref);
// 		}, 1500);
// 		clearInterval(time);
// 	}, 500);
// });
//#endregion

// header 头部共用板块 跳转
skip (
	document.querySelector(".download a"),
	document.querySelector(".await"),
	document.querySelector(".await p"),
	"正在跳转 APP Store......"
);

/** 封装隐藏层 跳转：header 头部共用板块
 * 
 * @param {e} btn 点击按钮元素
 * @param {e} hide 隐藏层元素
 * @param {e} hint 提示信息元素
 * @param {String} str 提示文字
 */
function skip (btn, hide, hint, str) {
	return btn.addEventListener("click", () => {
		hide.style.display = "block";
		// 取消隐藏层
		let time = setInterval(() => {
			hint.innerHTML = str;
			let timeHref = setInterval(() => {
				hide.style.display = "none";
				clearInterval(timeHref);
			}, 1500);
			clearInterval(time);
		}, 500);
	});
}