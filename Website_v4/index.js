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

/*app.request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/28/query?where=1%3D1&outFields=OBJECTID,ROEPNAAM_ZZ_OBJECT,NAAM_ZAAL&outSR=4326&f=json',
  function(error, response, body){
    var fuifruimte = JSON.parse(body);
    res.render('home',{
      fuifruimte: fuifruimte
      });
  });
*/
var data;
request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/28/query?where=1%3D1&outFields=OBJECTID,ROEPNAAM_ZZ_OBJECT,NAAM_ZAAL&outSR=4326&f=json',
  function(error, response, body){
    data = JSON.parse(body);
  });

app.get('/', function(req, res){
  /*var fuifruimte = request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/28/query?where=1%3D1&outFields=OBJECTID,ROEPNAAM_ZZ_OBJECT,NAAM_ZAAL&outSR=4326&f=json');
  fuifruimte = JSON.parse(fuifruimte);*/
  res.render('home',{
    fuifruimte: data

  });
});



app.listen(3000);

/*request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/28/query?where=1%3D1&outFields=OBJECTID,ROEPNAAM_ZZ_OBJECT,NAAM_ZAAL&outSR=4326&f=json',
  function(error, response, body){
    var data = JSON.parse(body);

    for(var i=0; i < data.features.length; i++) {
        console.log("naam: " + data.features[i].attributes.ROEPNAAM_ZZ_OBJECT);
        console.log("coord: " + data.features[i].geometry.x + ", " + data.features[i].geometry.y);
        console.log("");
    }

  }
);*/
