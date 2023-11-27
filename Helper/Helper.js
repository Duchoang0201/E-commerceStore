// mongodb.js

import { MongoClient } from "mongodb";

import { CONNECTION_STRING } from "@/constant/dbSettings";

const uri = CONNECTION_STRING;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
// eslint-disable-next-line import/no-mutable-exports
let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Add Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// eslint-disable-next-line no-constant-condition
if (true) {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
}

export default clientPromise;
