import { Router , Request , Response } from "express";
import Link from "@src/Models/Link";
import { LinkDto } from "@src/LinkDto/LinkDto";
import { nanoid } from "nanoid";
import { ObjectId } from "mongodb";

const linkController:Router = Router()


linkController.get('/links/:shortUrl' , async(req:Request , res:Response) => {

       const { shortUrl} = req.params;
       
       try {
              const result = await Link.findOne({shortUrl:shortUrl});

              if (result) {
                     
                     res.status(301).redirect(result.originalLink)
              } else {
                     res.sendStatus(404);
              }
       } catch (e) {
              res.sendStatus(500);
       }


})




linkController.post('/links' , async (req:Request , res:Response) => {
       
       const {originalLink} = req.body 

       try {

              const newLink = new LinkDto(nanoid() , nanoid(4) , originalLink )       

              const result  =  new Link(newLink)       
                     
              result.save()

              res.send(result) 
              
                     
       } catch (error) {
              
              res.status(500).send('ddos')
       }

})

export default linkController