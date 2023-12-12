// deno-lint-ignore no-unused-vars
import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";
import { load } from "https://deno.land/std@0.208.0/dotenv/mod.ts";
await load({ export: true });

const client = new MongoClient();

// Connecting to a Mongo Atlas Database
try {
  const _db = await client.connect({
    db: "sample_airbnb",
    tls: true,
    servers: [
      {
        host: "ac-kcxucgf-shard-00-02.8f3pjqk.mongodb.net",
        port: 27017,
      },
    ],
    credential: {
      username: await Deno.env.get("DB_USERNAME"),
      password: await Deno.env.get("DB_PASSWORD"),
      db: "sample_airbnb",
      mechanism: "SCRAM-SHA-1",
    },
  });

  console.log("connected to db", _db);
} catch (error) {
  console.log("error", error);
}
