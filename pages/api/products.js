import { CONNECTION_STRING, DATABASE_NAME } from "@/constant/dbSettings";
import { customizeMongoQuery } from "@/Helper/CustomQuery";

const { MongoClient } = require("mongodb");

const collectionName = "products";

export default async function handler(req, res) {
  const { query } = req;
  const mongoQuery = customizeMongoQuery(query);

  const client = new MongoClient(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect(); // Connect to the MongoDB server
    const dbo = client.db(DATABASE_NAME);
    const collection = dbo.collection(collectionName);

    switch (req.method) {
      case "GET":
        // eslint-disable-next-line no-case-declarations
        let cursor = [];

        if (Object.keys(mongoQuery).length > 0) {
          cursor = collection.find(mongoQuery);
        } else {
          cursor = collection.find({});
        }

        // eslint-disable-next-line no-case-declarations
        const result = await cursor.toArray();

        res.json({ status: 200, data: result });
        break;

      default:
        res.json({ status: 200, data: [] });
        break;
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
