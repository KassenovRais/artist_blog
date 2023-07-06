export class LinkDto {
       _id: string
       shortUrl:string
       originalLink:string
       constructor (_id:string , shortUrl:string, originalLink: string) {
              this._id = _id
              this.shortUrl = shortUrl
              this.originalLink = originalLink
       }

}