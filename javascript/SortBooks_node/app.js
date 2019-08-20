
var fs = require('fs');

let publishedPath = "./Published.js";
let notPublishedPath = "./NotPublished.js"
let originPath = "./songOfIceAndFire.js"

function readData(path){
    return JSON.parse(fs.readFileSync(path,"utf8"));
}

function writeData(data,path){
    fs.writeFileSync(path, JSON.stringify(data,null,2));
 }

function sortBooks(books){
    let published = [];
    let notpublished = [];
    for(let e of books){

        if(e.published == "unpublished"){
            notpublished.push(e);
            
        }else{
            
            // add random status / read / not read/ want to read
            switch(Math.floor(Math.random() * 3) + 1 ){
                case 1: e.status = "read";
                    break;
                case 2: e.status = "want";
                    break;
                case 3: e.status = " want to read";
                    break;
            }
            
            published.push(e);
        }

    }

    writeData(published,publishedPath);
    writeData(notpublished,notPublishedPath);
    
}

let books = readData(originPath);
sortBooks(books);




