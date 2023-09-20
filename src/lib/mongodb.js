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
    const data = await collection.find().project({ _id: 0 }).limit(4).toArray();
    //console.log('Found documents: ', data);
    return data;
  } catch (err) {
    console.error(`Something went wrong when fetching documents: ${err}\n`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
