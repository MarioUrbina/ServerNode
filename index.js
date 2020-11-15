var express=require('express');
var app = express();
var MongoClient =require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/';
var str = "";
var cors = require('cors')
app.use(cors());
var redis = require('redis');
var client = redis.createClient({host:'127.0.0.1', port:'6379'} );
client.on('connect', function() {
    console.log('connected');
});



app.get("/redis", (req, res) => {
	client.lindex('mylist',-1,(err, result) => {
		if(err){
			return res.status(500).send(err);
		}
		console.log(result);
		res.json(result);
	})
});

app.route('/Departamentos').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
    if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").aggregate([
            {
                $group : {
                    _id : '$location',
                    count : {$sum : 1}
                }
            }
        ]).toArray(function(err, docs) {
            console.log(docs);
            res.json(docs);
            return;
          });
});
});

app.route('/top').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
    if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").aggregate([
            { $match: {} }, {
                $group: { _id: '$location', total: { $sum: 1 }}},
                {$sort: {'total':-1} },
                {$limit:3}
        ]).toArray(function(err, docs) {
            console.log(docs);
            res.json(docs);
            return;
          });
});
});




app.route('/Edad1').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 0,
                    $lte : 10               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });
          
        
});
});

app.route('/Edad2').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 10,
                    $lte : 20               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });
          
        
});
});

app.route('/Edad3').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 20,
                    $lte : 30               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });
          
        
});
});

app.route('/Edad4').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 30,
                    $lte : 40               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });
          
        
});
});

app.route('/Edad5').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 40,
                    $lte : 50               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });
          
        
});
});

app.route('/Edad6').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 50,
                    $lte : 60               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });     
});
});
app.route('/Edad7').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 60,
                    $lte : 70               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });     
});
});

app.route('/Edad8').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 70,
                    $lte : 80               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });     
});
});

app.route('/Edad9').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gt: 80,
                    $lte : 90               }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });     
});
});
app.route('/Edad11').get(function(req, res)
{
MongoClient.connect(url, {useUnifiedTopology: true},function(err, db) {
    console.log("connected");
        if (err) throw err;
        var dbo = db.db("CORONAVIRUS");
        var cursor=dbo.collection("PACIENTES").find(
            {
                age : {
                    $gte: 90             
                }
            }
        ).toArray(function(err, docs) {
            //console.log(docs);
            res.json(docs.length);
            console.log(docs.length);
            return;
          });     
});
});





var server = app.listen(3023, function() {});