import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";
import db from "../../mongo.ts"

// console.log(db)

// FILEPATH: /Users/jenniferherrarte/GitHub/fresh-api/routes/listings/listing.tsx

export default async function getListing() {
  const document = await db.collection("listingsAndReviews").findOne()
  console.log(document)
  return new Response(document.name);
}

getListing()