const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5500

// chill-gammer
// C6iw9pXzYo92ikBE





const uri = "mongodb+srv://chill-gammer:C6iw9pXzYo92ikBE@cluster0.3t5vk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
const reviewCollection =client.db('reviewDB').collection('review')
const watchListCollection =client.db('watchDB').collection('watchList')


// review db start
app.post('/addReviews',async(req,res)=>{
const review =req.body
const result = await reviewCollection.insertOne(review)
res.send(result)
})

app.get('/reviews',async(req,res)=>{
const cursor =await reviewCollection.find().toArray()
res.send(cursor)
})
app.get('/reviews/:id',async(req,res)=>{
  const id = req.params.id
  const query ={_id : new ObjectId(id)}
  const result = await reviewCollection.findOne(query)
  res.send(result)

})
app.get('/myReview/:email',async(req,res)=>{
  const email = req.params.email
  const query ={email : email}
  const result = await reviewCollection.find(query).toArray()
  res.send(result)
})
app.delete('/myReview/:id',async(req,res)=>{
  const id = req.params.id
 const query = {_id: new ObjectId(id)}
 const result = await reviewCollection.deleteOne(query)
 res.send(result)
})
app.patch('/updateReview/:id',async(req,res)=>{
  const id = req.params.id
  const review = req.body
  const filter = {_id: new ObjectId(id)}
  const options = {upsert:true}
  const updateReview={
    $set:{
      name:review?.name,
      email:review?.email,
      GameCover:review?.GameCover,
      genres:review?.genres,
      rating:review?.rating,
      publishYear:review?.publishYear,
      description:review?.description,
      gameName:review?.gameName,
      
    }
  }
const result =await reviewCollection.updateOne(filter,updateReview,options)
res.send(result)
})
app.get('/topReview',async(req,res)=>{
  const result = await reviewCollection.find().sort({rating:-1}).limit(6).toArray()
  res.send(result)
})
app.get('/sortReviews',async(req,res)=>{
  const methods =req.query.sortBy
  let condition ={}
  if(methods ==='rating'){
     condition = {rating: -1}
  }
  if(methods==='publishYear'){
    condition={publishYear:-1}
  }
  const result = await reviewCollection.find().sort(condition).toArray()
  res.send(result)

})
// watchList db start 

app.post('/watchList',async(req,res)=>{
  const watchList =req.body
  const result = await watchListCollection.insertOne(watchList)
  res.send(result)
})
app.get('/watchList/:email',async(req,res)=>{
  const email = req.params.email
  const query = {email : email}
  const result = await watchListCollection.find(query).toArray()
  res.send(result)
})


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}
run().catch(console.dir);





app.get('/',(req,res)=>{
    res.send('server running')
})
app.listen(port ,()=>{
console.log(`server running on ${port}`)
})