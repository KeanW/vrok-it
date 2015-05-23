var express = require('express');
var morgan = require('morgan');
var api = require('./api');

var sockets = require('./sockets');

var app = express();

app.use(morgan('dev', { immediate: true }));

/////////////////////////////////////////////////////////////////////////////////
//  Webpages server
//
/////////////////////////////////////////////////////////////////////////////////
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/', express.static(__dirname + '/html'));

/////////////////////////////////////////////////////////////////////////////////
//  Rest API
//
/////////////////////////////////////////////////////////////////////////////////
app.get('/api/token', api.getToken);

/////////////////////////////////////////////////////////////////////////////////
//
//
/////////////////////////////////////////////////////////////////////////////////
//app.listen(process.env.PORT || 5000);

//console.log('Listening on port 5000...');

var port = process.env.PORT || 5000;
var serverApp = app.listen(

    port,
    //app.get('port'),

    function() {
        console.log('Express server listening on port ' +
            port /*serverApp.address().port*/
        );
    });

//sockets.initializeSocket(serverApp);