import '@radix-ui/themes/styles.css';
import { Table } from '@radix-ui/themes';

import { run_db } from '@/lib/mongodb';
import { Row } from './row';

async function getData() {
  const peopleDB = await run_db();

  if (!Array.isArray(peopleDB)) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return peopleDB;
}

export default async function Home() {
  // Print returned documents
  const myPeopleDB = await getData()

  const headers = [
    { id: 0, name: "ID" },
    { id: 1, name: "Persona" },
    { id: 2, name: "Pais" },
    { id: 3, name: "Ciudad" },
    { id: 4, name: "Join" },
    { id: 5, name: "DM Lead" },
    { id: 6, name: "Cliente" }
  ];

  const listOfHeaders = headers.map((column) =>
    <Table.ColumnHeaderCell key={column.id}>{column.name}</Table.ColumnHeaderCell>
  );

  const rows = myPeopleDB.map((person) =>
    <Row person={JSON.stringify(person)} />
  );

  return (
    <html>
      <body>
        <h1>MyApp</h1>
        <br /><br />
        <h2>Table</h2>
        <Table.Root>
          <Table.Header>
            <Table.Row>{listOfHeaders}</Table.Row>
          </Table.Header>

          <Table.Body>
            {rows}
          </Table.Body>
        </Table.Root>
      </body>
    </html>
  )
}
