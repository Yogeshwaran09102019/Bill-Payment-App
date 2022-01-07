const express=require('express');
const bodyParser=require('body-parser');
const app=express();
var sql=require('mysql');
var queryStr=require('querystring');
app.use(bodyParser.json());

var con;
function makeConn()
{
con=sql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'Bill'
});
}

app.get('/',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.json({message:true});
})

app.get('/register',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var name=req.query.name;
	var mail=req.query.mail;
	var pass=req.query.pass;
	var upi=req.query.upi;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="insert into User values('"+name+"','"+mail+"','"+pass+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
			});
			var Sql="insert into upi values('"+mail+"','"+upi+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
				res.json({message:true});
			});
		});
});

app.get('/sign',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var pass1=req.query.pass;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select mail,pass from User where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
				console.log(result[0].mail);
				console.log(result[0].pass);
				if(result[0].mail==mail1 && result[0].pass==pass1)
				res.json({message:true});
				else
					res.json({message:false});
			});
		});
});

app.get('/mobile',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var upi1=req.query.upi;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select mail,upi from UPI where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
				if(result[0].mail==mail1 && result[0].upi==upi1)
				res.json({message:true});
				else
					res.json({message:false});
			});
		});
});

app.get('/mobileInsert',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var phno1=req.query.phno;
	var plan1=req.query.plan;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="insert into mobile values('"+mail1+"','"+phno1+"','"+plan1+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({message:true});
			});
		});
});


app.get('/electricity',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var upi1=req.query.upi;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select mail,upi from UPI where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
				if(result[0].mail==mail1 && result[0].upi==upi1)
				res.json({message:true});
				else
					res.json({message:false});
			});
		});
});


app.get('/electricityInsert',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var phno1=req.query.phno;
	var plan1=req.query.plan;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="insert into electricity values('"+mail1+"','"+phno1+"','"+plan1+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({message:true});
			});
		});
});

app.get('/registerGas',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail=req.query.mail;
	var phone=req.query.phone;
	var plan=req.query.plan;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="insert into BookGas values('"+mail+"','"+phone+"','"+plan+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
				res.json({message:true});
			});
		});
});

app.get('/DTH',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var upi1=req.query.upi;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select mail,upi from UPI where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
				if(result[0].mail==mail1 && result[0].upi==upi1)
				res.json({message:true});
				else
					res.json({message:false});
			});
		});
});


app.get('/dthInsert',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	var phno1=req.query.phno;
	var plan1=req.query.plan;
	var oper=req.query.operator;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="insert into dth values('"+mail1+"','"+phno1+"','"+plan1+"','"+oper+"');";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({message:true});
			});
		});
});

app.get('/getmobile',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select * from mobile where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({result});
			});
		});
});

app.get('/geteb',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select * from electricity where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({result});
			});
		});
});

app.get('/getgas',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select * from bookgas where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({result});
			});
		});
});

app.get('/getdth',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var mail1=req.query.mail;
	makeConn();
	con.connect(function(err){
			if (err) throw err;
			var Sql="select * from dth where mail='"+mail1+"'";
			con.query(Sql,function(err,result){
				if (err) throw err;
					res.json({result});
			});
		});
});


app.listen(5000);
console.log("Server at 5000.....");