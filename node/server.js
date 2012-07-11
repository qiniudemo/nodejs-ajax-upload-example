var express = require('express');

// load qiniu-rs nodejs sdk
var digestauth = require('../lib/qiniu/digestauth.js');
var qboxrs = require('../lib/qiniu/rs.js');
var conf = require('../lib/qiniu/conf.js');

// will be removed after all io-nodes ready support CORS
conf.IO_HOST = 'http://ionode-my-1.qbox.me';

// required, type your ACCESS_KEY and SECRET_KEY here
conf.ACCESS_KEY = '<Please apply your access key>';
conf.SECRET_KEY = '<Dont send your secret key to anyone>';

// optional, define a common bucket name for storage your files
conf.BUCKET = 'MY_UPLOADS_BUCKET';

var conn = new digestauth.Client();
var rs = new qboxrs.Service(conn, conf.BUCKET);

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
        if(resp.code == 200){output.data.bucket = conf.BUCKET;}
        console.log("\n===> Response Output: ", output);
        res.json(output);
    });

});

app.listen(8125);

console.log("service running at: 8125");
