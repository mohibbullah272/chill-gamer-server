const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
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

app.post('/addReviews',async(req,res)=>{
const review =req.body
console.log(review)
const result = await reviewCollection.insertOne(review)
res.send(result)
})

app.get('/reviews',async(req,res)=>{
const cursor =await reviewCollection.find().toArray()
res.send(cursor)
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