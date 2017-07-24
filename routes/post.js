var express = require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'PARIS9797',
	database:'news',
	port:'3306'
})


router.post('/',function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	var title=req.body['title'];
	var uid=req.body['uid'];
	var news_title=req.body['news_title'];
	console.log(title)
	/*pool.query(`SELECT news_title from list where uid=${title}`,function(err,rows){
		if(err) throw err;
		res.send(rows)
		//res.insert()
	});*/
	pool.query(`update list set news_title=${news_title} where uid = ${uid}`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send(rows)
		//res.insert()
	});
	//res.send([{"name":"hebe","age":"32"},{"name":"jay","age":"38"}]);
});

module.exports=router;
