import mongoose , {Schema} from "mongoose";

const LinkSchema = new Schema ({

       _id : {
              type:String,
              required: true
       },
       shortUrl: {
              type:String,
              required:true
       },
       originalLink:{
              type:String,
              required:true,
              trim:true,
              minLinght: 1
       }
})

const Link = mongoose.model('Link' , LinkSchema)

export default Link