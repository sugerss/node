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
});
const add='192.168.43.16';

router.post('/img',function(req,res){	
	res.header("Access-Control-Allow-Origin", "*"); //跨域
	var form = new formidable.IncomingForm();
	form.uploadDir='public/upload/'; 
	form.parse(req,function(error,fields,files){
		for(var i in files){
			var file = files[i];  
			var fName = (new Date()).getTime()  
			switch(file.type){   
				case "image/jpeg":
				fName=fName+".jpg";
				break;
				case "image/jpg":
				fName=fName+".jpg";
				break;
				case "image/png":
				fName=fName+".png";
				break;
				case "image/gif":
				fName=fName+".gif";
				break;
			}
			var newPath='public/upload/'+fName; 
			fs.renameSync(file.path,newPath);   
		}	
		pool.query(`insert into team(img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.post('/team_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var img=req.body['img'];
	pool.query(`update team set img='${img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});
router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var name=req.body['name'];
	var job_one=req.body['job_one'];
	var job_two=req.body['job_two'];
	var intro=req.body['intro'];
	pool.query(`insert into team(name,job_one,job_two,intro) values('${name}','${job_one}','${job_two}','${intro}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/team',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select name,job_one,job_two,intro,img from team',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/team_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var name=req.body['name'];
	var job_one=req.body['job_one'];
	var job_two=req.body['job_two'];
	var intro=req.body['intro'];
	pool.query(`update team set name='${name}',job_one='${job_one}',job_two='${job_two}',intro='${intro}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});
router.post('/team_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`delete from team where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
module.exports=router;
