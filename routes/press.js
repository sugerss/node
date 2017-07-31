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
	var contact=req.body['contact'];
	var title=req.body['title'];
	var sub_title=req.body['sub_title'];
	var con=req.body['con'];
	var time=req.body['time'];
	var detail=req.body['detail'];
	pool.query(`insert into press(contact,title,sub_title,con,time,detail) values('${contact}','${title}','${sub_title}','${con}','${time}','${detail}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/press',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select contact,title,sub_title,con,time,detail from press',function(err,rows){
		if(err) throw err;
		res.send(rows);
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
router.get('/press_popular',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select popular_title,popular_detail from popular',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});

module.exports=router;