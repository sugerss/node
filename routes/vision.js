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
	port:3306});
const add='192.168.43.16';

router.post('/vision/bg',function(req,res){	
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
		pool.query(`insert into vision(vision_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/vision_bg',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select vision_bg from vision',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/vision_bg_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var vision_bg=req.body['vision_bg'];
	pool.query(`update vision set vision_bg='${vision_bg}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/vision/img',function(req,res){	
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
		pool.query(`insert into vision(vision_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/vision_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select vision_img from vision',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/vision_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var vision_img=req.body['vision_img'];
	pool.query(`update vision set vision_img='${vision_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/prize/img',function(req,res){	
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
		pool.query(`insert into vision(prize_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/prize_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select prize_img from vision',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/prize_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_img=req.body['prize_img'];
	pool.query(`update vision set prize_img='${prize_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/vision_history',function(req,res){	
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
		pool.query(`insert into vision(vision_history_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/vision_history_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select vision_history_img from vision',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/vision_history_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var vision_history_img=req.body['vision_history_img'];
	pool.query(`update vision set vision_history_img='${vision_history_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var vision_title=req.body['vision_title'];
	var vision_text=req.body['vision_text'];
	var vision_textarea=req.body['vision_textarea'];
	var prize_name=req.body['prize_name'];
	var prize_time=req.body['prize_time'];
	var vision_history_text=req.body['vision_history_text'];
	var vision_btn=req.body['vision_btn'];
	pool.query(`insert into vision(vision_title,vision_text,vision_textarea,prize_name,prize_time,vision_history_text,vision_btn) values('${vision_title}','${vision_text}','${vision_textarea}','${prize_name}','${prize_time}','${vision_history_text}','${vision_btn}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/vision',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select vision_title,vision_text,vision_textarea,prize_name,prize_time,vision_history_text,vision_btn,vision_bg,prize_img from vision',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/vision_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var vision_title=req.body['vision_title'];
	var vision_text=req.body['vision_text'];
	var vision_textarea=req.body['vision_textarea'];
	var prize_name=req.body['prize_name'];
	var prize_time=req.body['prize_time'];
	var vision_btn=req.body['vision_btn'];
	var vision_history_text=req.body['vision_history_text'];
	pool.query(`update vision set vision_title='${vision_title}',vision_text='${vision_text}',vision_textarea='${vision_textarea}',prize_name='${prize_name}',prize_time='${prize_time}',vision_history_text='${vision_history_text}',vision_btn='${vision_btn}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});
router.post('/vision_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`delete from vision where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});

module.exports=router;