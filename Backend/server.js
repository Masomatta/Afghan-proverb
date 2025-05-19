import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { router } from "./routes/proverbs.js"
dotenv.config('.env')


const app = express()

const allowedOrigins = process.env.CORS_ORIGINS.split(",");

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(bodyParser.json())
app.use('/api', router)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`The server is now listening on ${PORT}`)
})