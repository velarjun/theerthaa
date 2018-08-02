var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var session = require('express-session');
xml2js = require('xml2js');
var DataBaseCall = require('./modules/DataBaseCall.js');
fs = require('fs');

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  //cookie: { maxAge: 6000 }
}));

app.use(cookieParser());
app.set('port', (3005));

app.use(express.static(__dirname + '/Client'));
app.use('/node_modules', express.static(__dirname + '/Client/node_modules'));
app.use('/app', express.static(__dirname + '/Client/MyAccounts/app'));
app.use('', express.static(__dirname + '/Client/MyAccounts/'));
app.use('/Library', express.static(__dirname + '/Client/MyAccounts/Library'));

app.use('/js',express.static(__dirname + '/js'));

app.set('views', __dirname + '/Client/MyAccounts');
app.set('Configuration', __dirname + '/Client/Configuration');
app.set('Configurations', __dirname + '/Client/Configuration');
app.set('TopupXMLTag', 'GETSIMTOPUPAMOUNT');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/InsertPurchase', function(req, res) {
 var strPurchase = req.body.purchase;
 console.log(strPurchase);
 DataBaseCall.InsertPurchase(strPurchase, function (response) { 
 console.log(response)
});
});


app.post('/InsertGrinding', function(req, res) {
 var srtPostCode = req.body.Grinding;
 DataBaseCall.InsertPurchase(strPurchase, function (response) { 
  console.log(response)
 });
 console.log(srtPostCode);
});

app.get('/GetReport', function(req, res) {
	report={
    Groundnut:{Tcake:0,SCake:0,BCake:70,TOil:0},
    KSesame:{Tcake:0,SCake:06,BCake:0,TOil:0},
    Sesame:{Tcake:0,SCake:0,BCake:0,TOil:0},
    Coconut:{Tcake:10,SCake:30,BCake:0,TOil:0},
    Karupatti:{Tcake:0,SCake:90,BCake:0,TOil:0},
    Vellam:{Tcake:0,SCake:0,BCake:30,TOil:0}
  };  
   res.json({
      Results: report
    });
});




app.get('/InsertSales', function(req, res) {
 var srtPostCode = req.body.Sales;
 console.log(srtPostCode);
});

app.post('/InsertDailySales', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.InsertDailySales(srtPostCode, function (response) { 
    console.log(response)
    res.json(response);
   });
 });


 app.post('/InsertExpense', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.InsertExpense(srtPostCode, function (response) { 
    console.log(response)
    res.json(response);
   });
 });


 app.post('/GetDailyReport', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.GetDailySales(srtPostCode, function (response) {         
        if(response[0]!=undefined)    
        {
          console.log(response[0]);
          res.json(response[0]);
        }      
        else
        {
          res.json({nodata:'No record Found'});
        }
      });
 });



 
 app.post('/updateDailySales', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.updateDailySales(srtPostCode, function (response) {         
          res.json(response[0])
      });
 });

 app.post('/GetCashSummary', function(req, res) {
  DataBaseCall.GetCashSummary(function (response) {      
    console.log(response);   
          res.json(response)
      });
 });


 app.post('/InsertDelivery', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.InsertDelivery(srtPostCode, function (response) { 
    console.log(response)
    res.json(response);
   });
 });

 
 app.post('/GetDelivery', function(req, res) {
  var srtPostCode = req.body.Sales;
  DataBaseCall.GetDelivery(srtPostCode, function (response) { 
    console.log(response)
    res.json(response);
   });
 });
 

 





app.listen(app.get('port'), function() {
  console.log('Application listening in the port '+app.get('port'));
});
