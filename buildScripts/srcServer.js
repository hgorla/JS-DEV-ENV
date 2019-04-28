var express = require('express');
var path = require('path');
var open = require('open');

const PORT = 6060;
let app = express();

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(PORT, function(err){
  if(err)
    console.log(err);
  else
    open(`http://localhost:${PORT}`);
});
