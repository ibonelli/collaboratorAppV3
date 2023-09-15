import { rrhh } from '@/lib/rrhh';

console.log('Starting MongoDB connection...');
const { MongoClient } = require('mongodb');

// Connection URL with the database name
const url = 'mongodb://127.0.0.1:27017/EmployeeDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
const dbName = "test";
const collectionName = "rrhh";

// Create references to the database and collection in order to run
// operations on them.
const database = client.db(dbName);
const collection = database.collection(collectionName);

export async function run_db() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Adding all the documents to the DB using:
    //    https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/
    const insertManyResult = await collection.insertMany(rrhh);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
