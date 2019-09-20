
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:@Mongo123@sedc-qhykl.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

async function connection() {
    await this.client.connect((err,client) => {
        if(err){
            console.log(err,"err")
            process.db = false;
            return;
        }


    })
};

async function disconnect(){

    if(process.db){
        return await process.db.close()
    }
    return false;
};