if(process.env.NoDE_ENV === "production"){
module.exports = {mongoURI: 
    "mongodb://pompodar:10buboukrnet@ds115854.mlab.com:15854/diary"}
}else{
    module.exports = {mongoURI: 
        "mongodb://localhost/videodb"}
    
}