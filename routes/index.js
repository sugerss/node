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
router.post('/home/one',function(req,res){	
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
		pool.query(`insert into home(banner_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_one',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select banner_bg from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
/*router.post('/home/two',function(req,res){	
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
		pool.query(`insert into home(banner_gif) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_two',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select banner_gif from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});*/
router.post('/home/three',function(req,res){	
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
		pool.query(`insert into home(banner_gif) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_three',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select banner_gif from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/home/four',function(req,res){	
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
		pool.query(`insert into home(services_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_four',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_bg from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/home/five',function(req,res){	
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
		pool.query(`insert into home(china_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_five',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select china_bg from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/home/six',function(req,res){	
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
		pool.query(`insert into home(sanya_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_six',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select sanya_img from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/home/seven',function(req,res){	
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
		pool.query(`insert into home(sanya_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/home_seven',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select sanya_bg from home',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/home',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var banner_text=req.body['banner_text'];
	var services_title=req.body['services_title'];
	var services_text=req.body['services_text'];
	var china_title=req.body['china_title'];
	var china_text=req.body['china_text'];
	pool.query(`insert into home(banner_text,services_title,services_text,china_title,china_text) values('${banner_text}','${services_title}','${services_text}','${china_title}','${china_text}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/home_text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select banner_text,services_title,services_text,china_title,china_text from home',function(err,rows){
		if(err) throw err;
		console.log(111);
		res.send(rows);
	})
});

router.post('/home/banner',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var services_one_title=req.body['services_one_title'];
	var services_one_text=req.body['services_one_text'];
	var services_one_time=req.body['services_one_time'];
	var services_two_title=req.body['services_two_title'];
	var services_two_time=req.body['services_two_time'];
	pool.query(`insert into home_smallbanner(services_one_title,services_one_text,services_one_time,services_two_title,services_two_time) values('${services_one_title}','${services_one_text}','${services_one_time}','${services_two_title}','${services_two_time}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});

router.get('/home_banner',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select services_one_title,services_one_text,services_one_time,services_two_title,services_two_time from home_smallbanner',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
module.exports=router;