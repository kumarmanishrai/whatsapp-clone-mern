import express  from "express";
import mongoose from "mongoose"
import Messages from './dbMessages.js'
import Pusher  from "pusher";
import cors from "cors"

const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: "1440516",
  key: "489dcd58e95c56e01e96",
  secret: "be7a10c6801bfaae8a10",
  cluster: "ap2",
  useTLS: true
});



// middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

const connection_url = 'mongodb+srv://kumarmanishrai:FF8bH%403KSqUvztJ@cluster0.gvlye.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection
db.once('open', () => {
    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch();
    changeStream.on('change', (change) => {
       if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', 
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timestamp: messageDetails.timestamp,
                    recieved: messageDetails.recieved,
                }
            )
       } else {
            console.log(`error triggering pusher`);
       }
       
    })
    
})

app.get('/', (req, res) => {
    res.status(200).send(`hello world`)
})


app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res)=>{
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})
app.listen(port, () => {
    console.log(`listening on ${port}`);
})