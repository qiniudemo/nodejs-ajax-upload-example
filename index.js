/**
 * Created by youxiachai on 14-2-12.
 */
var express = require('express'),
    app = express(),
    http = require("http");

var qiniu = require("qiniu");

// 配置密钥
qiniu.conf.ACCESS_KEY = '';
qiniu.conf.SECRET_KEY = '';

var opts = {
//    scope: "yet_another_bucket", // 可以是 "<bucketName>" 或 "<bucketName>:<key>"
    expires: 15552000
//    callbackUrl: "http://www.example.com/notifications/qiniurs", // 可选
//    callbackBodyType: "application/x-www-form-urlencoded", // 可选
};

var uploadPolicy = new qiniu.rs.PutPolicy('yet_another_bucket');
uploadPolicy.expires = 15552000;


var uploadToken = uploadPolicy.token();

app.use(express.static(__dirname + '/public'));

app.set('port', 8125);


app.get('/putauth.json', function(req, res){

    // our front-end isnot serve by node server, all of them are static files
    // so we need output response headers for CORS
    // or you can change to use template engine for render pages
    res.header('Pragma', 'no-cache');
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Access-Control-Allow-Origin', '*');

    res.json({
        code : 200,
        data : {
            url : 'http://up.qiniu.com/',
            bucket : 'stock',
            token :  uploadToken
        }
    })


});



http.createServer(app).listen(app.get('port'), function () {
    console.log('env: ' + process.env.NODE_ENV);
    console.log('port: ' + process.env.PORT);
    console.log('Express server listening on port ' + app.get('port'));
});
