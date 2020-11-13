const http=require("http")

const server=http.createServer((req,res)=>{
if(req.url==="/")
{
   
}
if(req.url==="/api/numbers"){
   
}
});

server.listen(3000);
console.log("server running on port 3000....")