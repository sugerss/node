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
router.post('/gif',function(req,res){	
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
		pool.query(`insert into services(services_gif) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/services_gif',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_gif from services',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/img',function(req,res){	
	res.header("Access-Control-Allow-Origin", "*");
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
		pool.query(`insert into services(services_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/services_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_img from services',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/small',function(req,res){	
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
		pool.query(`insert into services(services_small_pic) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/services_small_pic',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_small_pic from services',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/services',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var services_vision=req.body['services_vision'];
	var services_text=req.body['services_text'];
	var services_admin=req.body['services_admin'];
	var services_work=req.body['services_work'];
	var services_more=req.body['services_more'];
	pool.query(`insert into services(services_vision,services_text,services_admin,services_work,services_more) values('${services_vision}','${services_text}','${services_admin}','${services_work}','${services_more}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_vision,services_text,services_admin,services_work,services_more from services',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
module.exports=router;