let http =require("http");
let fs = require("fs");
let server =http.createServer(function(req,res){

  if(req.url =="/"){
    
    try{
        fs.renameSync("new.txt","neww.txt");
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("Rename sucesss");
        res.end();
    }
    catch(err){
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("Rename Faild");
        res.end();

    }



  }
})
server.listen(5050);

console.log("Sucess"); 
