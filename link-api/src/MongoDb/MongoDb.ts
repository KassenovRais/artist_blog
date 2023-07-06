import { Db, MongoClient } from "mongodb";

let mongoClient:MongoClient 

export let db:Db 

export const connect = async() => {
       mongoClient = await MongoClient.connect('mongodb://localhost')
       db = mongoClient.db('home-86')
}

export const disconnect =async () => {
      await mongoClient.close()
}