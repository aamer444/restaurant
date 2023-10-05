import express from 'express'
import dotenv from 'dotenv'
import connectionDB from './DB/connection.js'
import restaurantRouter from './routes/restaurantRouter.js'
import bodyParser from 'body-parser'
const app = express()
dotenv.config()
const { URL, DBNAME, PORT } = process.env


const port = PORT || 8080


// connection to mongoDB
connectionDB(URL, DBNAME)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// health check

app.get("/health", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Health check okay"
    })
})


// all req incoming rout

app.use("/", restaurantRouter)



// server
app.listen(port, (err) => {
    if (err) {
        throw err.message
    } else {
        console.log(`       server started at  http://localhost:${port}
       health check url is http://localhost:${port}/health  `);
    }


})


