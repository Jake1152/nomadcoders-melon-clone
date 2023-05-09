// var http = require('http');

// var app = http.createServer(function(req, res) {
//         // 사용자에게 요청이 들어오면 응답해줌
//         // 콘텐츠 타입은 텍스트, html형식
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('welcome!!');
// });

// app.listen(3000, function(){
//     console.log("server is running.")
// });


// 서버 사용을 위해 http모듈을 http라는 변수에 담는다.
var http = require('http');
var fs = require('fs');

// http모듈로 서버를 생성한다. 
var app = http.createServer(function(req,res){
  var url = req.url;
    if(req.url == '/'){
      url = '/main.html';
    }
    if(req.url == '/favicon.ico'){
      return res.writeHead(404);
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + url));
 
});

// listen 함수로 3000 포트에 서버를 실행한다.
app.listen(3000, function(){
  console.log("server is running.")
});