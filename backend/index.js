import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import router from './routes/emplyeeRoute.js'
const PORT=process.env.PORT||5000;
const app=express()

app.use(cors());

mongoose.connect('mongodb://localhost:27017/EmployeeInformation',
           { useNewUrlParser:true,
             useUnifiedTopology:true,
            //  useCreateIndex:true,
            //  useFindAndModify:true
            })

const db=mongoose.connection;
db.once('open',()=>{console.log("successfully connected")})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',router)

app.listen(PORT,console.log(`server is running at port ${PORT}`))