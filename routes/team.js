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
router.get('/team_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select img from team',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var name=req.body['name'];
	var job_one=req.body['job_one'];
	var job_two=req.body['job_two'];
	var intro=req.body['intro'];
	pool.query(`insert into history(name,job_one,job_two,intro) values('${name}','${job_one}','${job_two}','${intro}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/team',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select name,job_one,job_two,intro from team',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
module.exports=router;
