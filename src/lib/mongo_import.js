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

// Built using https://csvjson.com/csv2json
const rrhh = [
    {
      "ID": 1,
      "Persona": "Edgar Sosa",
      "Pais": "MX",
      "Ciudad": "Mexicali",
      "Join": "2018-Aug-14",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 2,
      "Persona": "Humberto Luna",
      "Pais": "MX",
      "Ciudad": "Oaxaca",
      "Join": "2018-Jul-09",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 4,
      "Persona": "Mauricio Hernández",
      "Pais": "CR",
      "Ciudad": "Heredia",
      "Join": "2014-Sep-07",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 8,
      "Persona": "David Santillán",
      "Pais": "PER",
      "Ciudad": "Callao, Lima",
      "Join": "2021-Mar-08",
      "Lead": "Ignacio",
      "Cliente": "Kanopi"
    },
    {
      "ID": 10,
      "Persona": "Matías Miranda",
      "Pais": "AR",
      "Ciudad": "Tucumán, Yerba Buena",
      "Join": "2019-Jan-07",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 11,
      "Persona": "Pablo Guerino",
      "Pais": "AR",
      "Ciudad": "Tandil",
      "Join": "2020-Aug-13",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 12,
      "Persona": "Diego Sabolo",
      "Pais": "AR",
      "Ciudad": "Benavidez",
      "Join": "2018-Aug-06",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 16,
      "Persona": "Kendall Sanchez",
      "Pais": "CR",
      "Ciudad": "Heredia",
      "Join": "2011-Jan-18",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 20,
      "Persona": "Jose Luis Amaral",
      "Pais": "MX",
      "Ciudad": "Satiango de Querétaro",
      "Join": "2016-May-02",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 21,
      "Persona": "Manuel Santibañez",
      "Pais": "MX",
      "Ciudad": "Oaxaca",
      "Join": "2016-Sep-01",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 25,
      "Persona": "Alvaro Mollo",
      "Pais": "BOL",
      "Ciudad": "Cocachamba",
      "Join": "2020-Feb-20",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 26,
      "Persona": "Julia Pirsch",
      "Pais": "FR",
      "Ciudad": "Metz",
      "Join": "2016-Sep-16",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 28,
      "Persona": "William Ranvaud",
      "Pais": "BR",
      "Ciudad": "Sao Pablo",
      "Join": "2019-Jan-07",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 29,
      "Persona": "Natasha Chanto",
      "Pais": "CR",
      "Ciudad": "Alajuela",
      "Join": "2021-Jan-01",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 33,
      "Persona": "José Joel Pérez Quevedo",
      "Pais": "UY",
      "Ciudad": "Montevideo",
      "Join": "2021-Jun-01",
      "Lead": "Matias",
      "Cliente": "US Creative"
    },
    {
      "ID": 34,
      "Persona": "Joseph Ramos",
      "Pais": "PER",
      "Ciudad": "Puno",
      "Join": "2021-Jun-14",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 35,
      "Persona": "Gretel Trost",
      "Pais": "HOL",
      "Ciudad": "Oegstgeest",
      "Join": "2021-Jul-01",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 37,
      "Persona": "Tomas Guerineau",
      "Pais": "AR",
      "Ciudad": "Tucuman",
      "Join": "2021-Aug-01",
      "Lead": "Matias",
      "Cliente": "Tareas Internas"
    },
    {
      "ID": 50,
      "Persona": "John Alvarez",
      "Pais": "COL",
      "Ciudad": "Carmen de Viboral",
      "Join": "2021-Dec-15",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 56,
      "Persona": "Ozle Torres Cardenas",
      "Pais": "COL",
      "Ciudad": "Bogota",
      "Join": "2022-Apr-11",
      "Lead": "Matias",
      "Cliente": "ImageX"
    },
    {
      "ID": 65,
      "Persona": "Miguel Ángel García",
      "Pais": "COL",
      "Ciudad": "Cúcuta",
      "Join": "2022-Oct-03",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 67,
      "Persona": "Cristofer Espindola",
      "Pais": "BR",
      "Ciudad": "San Pablo",
      "Join": "2022-Oct-24",
      "Lead": "Ignacio",
      "Cliente": "Phase2"
    },
    {
      "ID": 69,
      "Persona": "Carlos Rebolledo",
      "Pais": "COL",
      "Ciudad": "Barranquilla",
      "Join": "2022-Nov-01",
      "Lead": "Ignacio",
      "Cliente": "COLAB"
    },
    {
      "ID": 70,
      "Persona": "Miguel Angel Carrero",
      "Pais": "COL",
      "Ciudad": "Bogotá",
      "Join": "2022-Nov-02",
      "Lead": "Matias",
      "Cliente": "Velir"
    },
    {
      "ID": 73,
      "Persona": "Manuel Velasco",
      "Pais": "BOL",
      "Ciudad": "Santa Cruz",
      "Join": "2023-Jan-23",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 74,
      "Persona": "Joshua Fabara",
      "Pais": "EC",
      "Ciudad": "Quito",
      "Join": "2023-Jan-23",
      "Lead": "Matias",
      "Cliente": "Kanopi"
    },
    {
      "ID": 75,
      "Persona": "Lucas Grecco",
      "Pais": "BR",
      "Ciudad": "São José do Rio Pardo, near Sau Paulo",
      "Join": "2023-Jan-30",
      "Lead": "Matias",
      "Cliente": "Phase2"
    },
    {
      "ID": 76,
      "Persona": "Andres Tenjo",
      "Pais": "COL",
      "Ciudad": "Cali",
      "Join": "2023-Mar-23",
      "Lead": "Ignacio",
      "Cliente": "Velir"
    },
    {
      "ID": 77,
      "Persona": "Daniel Vasquez",
      "Pais": "VEN",
      "Ciudad": "Caracas",
      "Join": "2023-Jun-28",
      "Lead": "Matias",
      "Cliente": "Renesas"
    },
    {
      "ID": 79,
      "Persona": "Oscar Ardila",
      "Pais": "COL",
      "Ciudad": "Socorro",
      "Join": "2023-Jul-10",
      "Lead": "Ignacio",
      "Cliente": "Renesas"
    },
    {
      "ID": 80,
      "Persona": "Camilo Vanegas",
      "Pais": "COL",
      "Ciudad": "",
      "Join": "2023-Aug-01",
      "Lead": "Matias",
      "Cliente": "Phase2"
    }
  ];
  
async function db_insert() {
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
  
db_insert().catch(console.dir);
