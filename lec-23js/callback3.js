function download(URL,cb){
    //URL ---> https://www.movies4u.com/gabbar.mp4
    let startwith = URL.split("/")[0] //--->["https:",www.movies4u.com,gabbar.mp4]
    if(startwith=="https"){
       return cb("invalid url",null)
    }
    setTimeout(() => {
        let movie = URL.split("/").pop()
        cb(null,movie)
    }, 1000);

}
function compress(dfile,cb){
    // dfile--->gabbar.mp4--->gabbar.zip
    setTimeout(()=>{
        let file= dfile.split(".")[0]+".zip"
        cb(file)
    },500)
    
}
function upload(cfile,cb){
    //url--->https://Chitkara.com/gabbar.zip
    setTimeout(()=>{
 let newURL = "https://Chitkara.com/"+cfile;
 cb(newURL)
    },2000)

}

download("https://www.movies4u.com/gabbar.mp4",function(err,dfile){
    compress(dfile,function(err,data){
        upload(data,function(err,data){
            console.log("uploaded file on"+ " "+data)
        })
    })
})

