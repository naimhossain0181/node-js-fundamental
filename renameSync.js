let http =require("http");
let fs = require("fs");
let server =http.createServer(function(req,res){

  if(req.url =="/"){

                /** This coding system is error */

   /* const err = fs.renameSync("new.txt","neww.txt");

        if(err){     
        res.writeHead(200,{"Content-type":"text/html"});
        res.write("Rename Failed");
        res.end();

        }
        else{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write("Rename sucesss");
            res.end();  
     }
     */

     /**This is Solution Using Try Catch */

     try{
        fs.renameSync("neww.txt","newb.txt");
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
