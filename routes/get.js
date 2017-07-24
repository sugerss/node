var express = require('express');
var mysql=require('mysql');
var router=express.Router();

var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'lony',
	port:'3306'
})


router.get('/',function(req,res){
	res.header('Access-Control-Allow-Origin', '*');
	pool.query('SELECT * from list',function(err,rows){
		if(err) throw err;
		//insert uid news_title(id, username) values(10, "hehehe");
		res.send(rows)
		//res.insert()
	});
	/*pool.query(`insert into list(uid,news_title) values(4,'opacity')`,function(err,rows){
		if(err) throw err;
		res.send(rows)
		//res.insert()
	});*///update tablename set xx=xx,xxx=xx where xxx=xxx and xxx=xxx;
	/*pool.query(`update list set news_title=222 where uid = 4`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send(rows)
		//res.insert()
	});*///delete from login where uid = 1
	/*pool.query(`delete from list where uid = 1`,function(err,rows){
		if(err) throw err;
		res.send(rows)
		//res.insert()
	});*/
	//res.send([{"name":"hebe","age":"32"},{"name":"jay","age":"38"}]);
});



module.exports=router;
