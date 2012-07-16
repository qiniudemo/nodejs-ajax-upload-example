var express = require('express');
var qiniu = require('qiniu');

// required, type your ACCESS_KEY and SECRET_KEY here
qiniu.conf.ACCESS_KEY = '<Please apply your access key>';
qiniu.conf.SECRET_KEY = '<Dont send your secret key to anyone>';

// will be removed after all io-nodes ready support CORS
qiniu.conf.IO_HOST = 'http://ionode-my-1.qbox.me';

// specify a common bucket name for storage your files
var bucket = 'MY_UPLOADS_BUCKET';

var conn = new qiniu.digestauth.Client();
var rs = new qiniu.rs.Service(conn, bucket);

var app = express.createServer();

app.get('/putauth.json', function(req, res){

    // our front-end isnot serve by node server, all of them are static files
    // so we need output response headers for CORS
    // or you can change to use template engine for render pages
    res.header('Pragma', 'no-cache');
    res.header('Cache-Control', 'no-store, no-cache, must-revalidate');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Access-Control-Allow-Origin', '*');

    // output response body as json format
    rs.putAuth(function(resp){
        output = resp;
        if(resp.code == 200){output.data.bucket = bucket;}
        console.log("\n===> Response Output: ", output);
        res.json(output);
    });

});

app.listen(8125);

console.log("service running at: 8125");
