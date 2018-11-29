/*
 * npm init
 * npm install express --save
 * npm install request --save
 * npm install ejs --save
 *
 * node(mon) index.js
 */

var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

var data;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/28/query?where=1%3D1&outFields=OBJECTID,ROEPNAAM_ZZ_OBJECT,NAAM_ZAAL&outSR=4326&f=json',
  function(error, response, body){
    data = JSON.parse(body);
  });

app.get('/', function(req, res){
  res.render('home',{
    fuifruimte: data

  });
});



app.listen(3000);
