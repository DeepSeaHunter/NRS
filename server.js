const express=require('express');
const crawler=require('./src/crawlers/chiefcrawler');
const path = require('path');



const server=express();
const port=process.env.port || 3001

server.use(express.static(path.join(__dirname,'/redirecapp/build')))

server.get('/medSearch/:kw',async(req,res)=>{
    res.send(JSON.stringify(await crawler(req.params.kw)));
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/redirecapp/build/index.html'))
  })



server.listen(port,()=>{
    console.log(`we are up on ${port}`)

})