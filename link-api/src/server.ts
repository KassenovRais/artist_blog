import express, {Express} from 'express'
import cors from 'cors'
import linkController from './Controlers/LinkController'
import * as mongoDb from '@src/MongoDb/MongoDb'
import * as process from 'process'
import mongoose from 'mongoose'



const PORT = 8000

const app:Express = express()

app.use(express.json())

app.use(cors())

app.use('/' , linkController)



const run  = async() => {
  await mongoose.connect('mongodb://localhost/links')

  app.listen(PORT ,() => console.log(`PORT start on ${PORT}`))

  process.on('exit' , () => {
    console.log('disconnect');
    
    mongoose.disconnect()

  })

}

run().catch((e) => console.log(e))