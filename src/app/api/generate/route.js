import clientPromise from "../../../../lib/mongodb"
export async function POST(request) {
    const client=await clientPromise
    const db=client.db("bitlinks")
    const collection=db.collection("url")
    const req=await request.json()
    const doc=await collection.findOne({shorturl:req.shorturl})
    if(doc){
         return Response.json({ message: 'url already exists' })
    }
    const result=await collection.insertOne(
        {
            url:req.url,
            shorturl:req.shorturl
        }
    )

  return Response.json({ message: 'inserted succesfully' })
}