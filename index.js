let app = require('express')();
let http = require('http').createServer(app);


app.get('/', function(req, res){
    res.send('<h1>Hello Word</h1>');
});

http.listen(3000, function(){
    console.log('listening on http://localhost:3000/');
});