var express=require('express');
var mysql=require('mysql');
var router=express.Router();
var fs=require('fs');
var formidable=require('formidable');
var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'PARIS9797',
	database:'list',
	port:3306
})
const add='192.168.43.16';
router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var title=req.body['title'];
	var name=req.body['name'];
	var text=req.body['text'];
	var time=req.body['time'];
	var detail=req.body['detail'];
	pool.query(`insert into point(title,name,text,time,detail) values('${title}','${name}','${text}','${time}','${detail}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.post('/popular',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var popular_title=req.body['popular_title'];
	var popular_detail=req.body['popular_detail'];
	pool.query(`insert into popular(popular_title,popular_detail) values('${popular_title}','${popular_detail}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/points',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select title,name,text,time,detail from point',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.get('/popular_text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select popular_title,popular_detail from popular',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
module.exports=router;