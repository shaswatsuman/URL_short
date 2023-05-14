const express = require('express')
let client = require("./db");
const shortUrl = require('./models/shortUrl');
const shortid = require('shortid');
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', async (req , res) => {

    const database = client.db('urlshortenerdev');
    let urls = database.collection("urls"); 

    const urlList = await urls.find({}).toArray();
    console.log(urlList, "\nlist\n")
    res.render('index', { shortUrls: urlList})
})

app.post('/shortUrls',async(req,res)=>{

  const database = client.db('urlshortenerdev');
  let urls = database.collection("urls");

  // let temp = await shortUrl.create({ full : req.body.fullUrl})

  let isAlreadyCreated = await urls.findOne({ full: req.body.fullUrl})

  console.log(isAlreadyCreated)

  if (isAlreadyCreated != null) {

    temp = await urls.updateOne({"_id" : isAlreadyCreated._id},)

  } else {
  
    console.log("hello Iam being created")
  
    let id = await shortid.generate();
    
    let temp = await urls.insertOne({"full" : req.body.fullUrl, 
                                    "short" : id, 
                                    }
                                   )
    console.log(temp)
  
  }

   res.redirect('/')
  // res.send("Hello")
})

app.get('/:shortUrl',async(req,res)=>{
    const database = client.db('urlshortenerdev');
    let urls = database.collection("urls");
    
    let shortUrl = await urls.findOne({short: req.params.shortUrl})
    if(shortUrl == null)
    return res.sendStatus(404)
   
    
   
    res.redirect(shortUrl.full)
   })



app.listen(process.env.PORT || 5001);