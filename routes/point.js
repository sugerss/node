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
	port:3306})
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
router.get('/points',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select id,title,name,text,time,detail from point',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/points',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`select * from point where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(id)
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
router.get('/popular_text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select popular_title,popular_detail from popular',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/popular_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var popular_title=req.body['popular_title'];
	var popular_detail=req.body['popular_detail'];
	pool.query(`update popular set popular_title='${popular_title}',popular_detail='${popular_detail}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});
router.post('/popular_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`delete from popular where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});



























router.post('/title_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var title=req.body['title'];
	pool.query(`update point set title='${title}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/name_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var name=req.body['name'];
	pool.query(`update point set name='${name}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/text_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var text=req.body['text'];
	pool.query(`update point set text='${text}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/time_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var time=req.body['time'];
	pool.query(`update point set time='${time}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/detail_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var detail=req.body['detail'];
	pool.query(`update point set detail='${detail}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});




router.post('/title_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var title=req.body['title'];
	pool.query(`update point set title='${title}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/name_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var name=req.body['name'];
	pool.query(`update point set name='${name}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/text_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var text=req.body['text'];
	pool.query(`update works set text='${text}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/time_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var time=req.body['time'];
	pool.query(`update point set time='${time}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/detail_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var detail=req.body['detail'];
	pool.query(`update point set detail='${detail}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});

module.exports=router;