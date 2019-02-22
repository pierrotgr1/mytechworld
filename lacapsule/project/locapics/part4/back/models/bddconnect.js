var mongoose = require('mongoose');

var user = 'Admin';
var password = 'adm75564';
var port = 39883;
var bddname = 'locapic';

var options = { connectTimeoutMS: 5000, useNewUrlParser: true }

mongoose.connect(
  "mongodb://"+user+":"+password+"@ds1"+port+".mlab.com:"+port+"/"+bddname,
  options,
  function(error){

  }
);
