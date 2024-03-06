import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {AdminRoutes,VenderRoutes} from './routes'
import { MONGO_URI } from './config';

mongoose.connect(MONGO_URI)
.then(result=>
    [
        console.log('db connected')
    ])
    .catch(err => console.log(err))

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

app.use('/admin', AdminRoutes)
app.use('/vendor', VenderRoutes)

app.listen(3000,()=>
{
    console.clear()
 console.log('listening on 3000')
})
