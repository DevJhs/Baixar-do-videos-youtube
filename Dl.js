const express= require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const app=express();

app.get("/",function(req,res){
    
    const {url}=req.query;
    urlCv=url.slice(0,43);
    formato=url.slice(52,55);

    formato=='140'?
        res.header("Content-Disposition",'attachmentt; filename="video.mp3"')
    :   res.header("Content-Disposition",'attachmentt; filename="video.mp4"');

    
    console.log('Link do video a abaixar: ',url);
    
    async function recpt(videoID){
                    
        let info = await ytdl.getInfo(videoID);              
        ytdl.downloadFromInfo(info,{ quality : formato }).pipe(res)
        
    }
    videoID=ytdl.getURLVideoID(urlCv)
    recpt(videoID)
    

})
        
app.listen(3000)
   




