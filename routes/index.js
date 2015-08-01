var express = require('express');
var http = require('http');
var router = express.Router();

// The client should already have a CLIENT_ID
// which it can use to identify itself to the
// OAuth server

var client_id = 123456;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Oauth',
                        response: 'Please login to initiate the OAuth protocol (Step 1,2)'});
});

router.get('/initiate', function(req, res, next) {
  res.render('initiate', { title: 'Oauth',
                           response: "You have inititated the OAuth protocol. You'll be redirected in 5 seconds... (this is step 3)"});
  
});

router.get('/returncode', function(req, res, next) {
  // Request Accesstoken
  // This request should contain Authz Code and Client ID
  var options = {
    host: 'localhost',
    path: '/getaccesstoken',
    port: '8080'
  };

  callback = function(response) {
    var str = ''

    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      res.render('returncode', { title: 'Return Code Endpoint',
                            response: "The access token is " + str + " this is step 10-12"});
    })
  };

  var request = http.request(options, callback);
  request.end();
});



module.exports = router;
