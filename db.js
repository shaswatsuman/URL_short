const { MongoClient } = require("mongodb");
const ShortUrl = require("./models/shortUrl");


const uri = "mongodb://shaswatsameer:Pamas%40123@ac-ixy8clv-shard-00-00.jvffmgj.mongodb.net:27017,ac-ixy8clv-shard-00-01.jvffmgj.mongodb.net:27017,ac-ixy8clv-shard-00-02.jvffmgj.mongodb.net:27017/?ssl=true&replicaSet=atlas-113xiq-shard-0&authSource=admin&retryWrites=true&w=majority&ssl=true";

let client = new MongoClient(uri);

async function run() {
  try {
    console.log("Date base connection established")
  } catch(err){
    console.log("err",err)
  }
}

run().catch(console.dir);

module.exports = client;