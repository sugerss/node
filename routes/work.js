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

router.post('/img/poster',function(req,res){	
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
		pool.query(`insert into works(poster_bg) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/poster_bg',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select poster_bg from works',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/poster_bg_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var poster_bg=req.body['poster_bg'];
	pool.query(`update works set poster_bg='${poster_bg}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/detail',function(req,res){	
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
		pool.query(`insert into works(detail_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/detail_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select detail_img from works',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/poster_bg_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var detail_img=req.body['detail_img'];
	pool.query(`update works set detail_img='${detail_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/work',function(req,res){	
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
		pool.query(`insert into works(work_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/work_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select work_img from works',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/work_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var work_img=req.body['work_img'];
	pool.query(`update works set work_img='${work_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/prize',function(req,res){	
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
		pool.query(`insert into works(prize_img) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/prize_img',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select prize_img from works',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/prize_img_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_img=req.body['prize_img'];
	pool.query(`update works set prize_img='${prize_img}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/one',function(req,res){	
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
		pool.query(`insert into work_focus(pic_one) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/img_one',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select pic_one from work_focus',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/pic_one_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var pic_one=req.body['pic_one'];
	pool.query(`update work_focus set pic_one='${pic_one}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});
router.post('/pic_one_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`delete from work_focus where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});

router.post('/img/two',function(req,res){	
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
		pool.query(`insert into work_focus(pic_two) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
		})	
	})
});
router.get('/img_two',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select pic_two from work_focus',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/pic_two_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var pic_two=req.body['pic_two'];
	pool.query(`update work_focus set pic_two='${pic_two}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/three',function(req,res){	
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
		pool.query(`insert into work_focus(pic_three) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/img_three',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select pic_three from work_focus',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/pic_three_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var pic_three=req.body['pic_three'];
	pool.query(`update work_focus set pic_three='${pic_three}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/img/four',function(req,res){	
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
		pool.query(`insert into work_focus(pic_four) values('http://${add}:8005/upload/${fName}')`,function(err,rows){
			if (err) throw err;
			if(rows){
				res.send('上传成功')
			}
			
		})	
	})
});
router.get('/img_four',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select pic_four from work_focus',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/pic_four_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var pic_four=req.body['pic_four'];
	pool.query(`update work_focus set pic_four='${pic_four}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		console.log(rows)
		res.send('success')
	})
});

router.post('/',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var poster_company=req.body['poster_company'];
	var poster_name=req.body['poster_name'];
	var year=req.body['year'];
	var detail=req.body['detail'];
	var work_say=req.body['work_say'];
	var work_about=req.body['work_about'];
	var prize_text=req.body['prize_text'];
	var prize_text=req.body['prize_text_two'];
	var prize_time=req.body['prize_time'];
	pool.query(`insert into works(poster_company,poster_name,year,detail,work_say,work_about,prize_text,prize_time) values('${poster_company}','${poster_name}','${year}','${detail}','${work_say}','${work_about}','${prize_text}','${prize_time}')`,function(err,rows){
		if (err) throw err;
		if(rows){
			res.send('上传成功')
		}			
	})	
});
router.get('/text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	pool.query('select id,poster_company,poster_name,year,detail,work_say,work_about,prize_text,prize_time,detail_img,prize_text_two,poster_bg,detail_img,work_img,prize_img from works',function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});
router.post('/text',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	pool.query(`select * from works where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send(rows);
	})
});

router.post('/company_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var poster_company=req.body['poster_company'];
	pool.query(`update works set poster_company='${poster_company}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/name_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var poster_name=req.body['poster_name'];
	pool.query(`update works set poster_name='${poster_name}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/year_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var year=req.body['year'];
	pool.query(`update works set year='${year}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/detail_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var detail=req.body['detail'];
	pool.query(`update works set detail='${detail}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/work_say_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var work_say=req.body['work_say'];
	pool.query(`update works set work_say='${work_say}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/work_about_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var work_about=req.body['work_about'];
	pool.query(`update works set work_about='${work_about}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_text_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_text=req.body['prize_text'];
	pool.query(`update works set prize_text='${prize_text}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_text_two_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_text_two=req.body['prize_text_two'];
	pool.query(`update works set prize_text_two='${prize_text_two}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_time_replace',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_time=req.body['prize_time'];
	pool.query(`update works set prize_time='${prize_time}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});


router.post('/company_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var poster_company=req.body['poster_company'];
	pool.query(`update works set poster_company='${poster_company}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/name_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var poster_name=req.body['poster_name'];
	pool.query(`update works set poster_name='${poster_name}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/year_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var year=req.body['year'];
	pool.query(`update works set year='${year}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/detail_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var detail=req.body['detail'];
	pool.query(`update works set detail='${detail}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/work_say_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var work_say=req.body['work_say'];
	pool.query(`update works set work_say='${work_say}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/work_about_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var work_about=req.body['work_about'];
	pool.query(`update works set work_about='${work_about}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_text_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_text=req.body['prize_text'];
	pool.query(`update works set prize_text='${prize_text}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_text_two_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_text_two=req.body['prize_text_two'];
	pool.query(`update works set prize_text_two='${prize_text_two}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});
router.post('/prize_time_delete',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var id=req.body['id'];
	var prize_time=req.body['prize_time'];
	pool.query(`update works set prize_time='${prize_time}' where id='${id}'`,function(err,rows){
		if(err) throw err;
		res.send('success')
	})
});

module.exports=router;