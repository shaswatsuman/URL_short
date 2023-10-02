const { MongoClient } = require("mongodb");
const ShortUrl = require("./models/shortUrl");


const uri = "mongodb+srv://shaswatsuman25:<password>@cluster0.yyigjwq.mongodb.net/?retryWrites=true&w=majority"; //you can use your own cluster to connect

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
