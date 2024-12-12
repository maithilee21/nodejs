const fs = require('fs');
const http = require('http');

const SERVER = http.createServer((req,res)=>{
    var filename = '';
    switch(req.url){
        case '/':
            filename= 'views/index.html';
            break;
            case '/about':
                filename= 'views/about.html';
                break;
                case '/contact':
                    filename= 'views/contact.html';
                    break;
                    default:
                        filename = 'views/404.html';
    }
     fs.readFile(filename , 'utf-8' , function(err,data){
        if(err)throw err;
        res.end(data);
     })
})

SERVER.listen(5100);