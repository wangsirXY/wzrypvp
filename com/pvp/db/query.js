var mysql = require("mysql");

var express = require("express");

// 创建web服务器
var app = express();

// 创建mysql连接配置信息对象
var connection = mysql.createConnection({
	// 域名或者ip地址
	host: "localhost",
	// 用户名
	user: "root",
	// 密码
	password: "wangxinyu",
	// 默认端口号
	port: "3306",
	// 需要连接的数据库
	database: "home",
});

// 开始连接
connection.connect();

// 开始执行sql语句
var sqlHero = "SELECT * FROM hero";
var sqlMessage = "SELECT * FROM message";
var sqlSlide = "SELECT * FROM slide";
var sqlGreatvideo = "SELECT * FROM greatvideo";

// 创建路由
function getData(sql) {
	let promise = new Promise((resolve, reject) => {
		// 查：参数1 sql语句，参数2 查询后的回调函数
		connection.query(sql, function (error, results) {
			if (error) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});

	return promise;
}

app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})

// 英雄
app.get("/getHero",  function (req, res) {
	getData(sqlHero).then(
		function (data) {
			console.log(data);
			res.send(data);
		},
		function (err) {
			res.send(err);
		}
	);
});

// 资讯
app.get("/getMessage", function (req, res) {
	getData(sqlMessage).then(
		function (data) {
			console.log(data);
			res.send(data);
		},
		function (err) {
			res.send(err);
		}
	);
});

// 轮播图
app.get("/getSlide", function (req, res) {
	getData(sqlSlide).then(
		function (data) {
			console.log(data);
			res.send(data);
		},
		function (err) {
			res.send(err);
		}
	);
});

// 精彩视频
app.get("/getGreatvideo", function (req, res) {
	getData(sqlGreatvideo).then(
		function (data) {
			console.log(data);
			res.send(data);
		},
		function (err) {
			res.send(err);
		}
	);
});

// 关闭连接
// connection.end();

app.listen(3306, function () {
	console.log("3306端口已启动");
});
