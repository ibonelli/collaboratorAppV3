import '@radix-ui/themes/styles.css';

import { Table } from '@radix-ui/themes';
import { run_db } from '@/lib/mongodb';

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
    { id:0, name:"ID"},
    { id:1, name:"Persona"},
    { id:2, name:"Pais"},
    { id:3, name:"Ciudad"},
    { id:4, name:"Join"},
    { id:5, name:"DM Lead"},
    { id:6, name:"Cliente"}
  ];

  const listOfHeaders = headers.map((colum) =>
  <Table.ColumnHeaderCell key={colum.id}>{colum.name}</Table.ColumnHeaderCell>
  );

  const people = [
    { id:0, name:"Danilo Sousa", email:"danilo@example.com", role:"Developer"},
    { id:1, name:"Zahra Ambessa", email:"zahra@example.com", role:"Admin"},
    { id:2, name:"Jasper Eriksson", email:"jasper@example.com", role:"Developer"},
  ];

  const rows = myPeopleDB.map((person) =>
    <Table.Row key={person.ID}>
      <Table.RowHeaderCell>{person.ID}</Table.RowHeaderCell>
      <Table.Cell>{person.Persona}</Table.Cell>
      <Table.Cell>{person.Pais}</Table.Cell>
      <Table.Cell>{person.Ciudad}</Table.Cell>
      <Table.Cell>{person.Join}</Table.Cell>
      <Table.Cell>{person.Lead}</Table.Cell>
      <Table.Cell>{person.Cliente}</Table.Cell>
    </Table.Row>
  );

  return (
    <html>
      <body>
        <h1>MyApp</h1>
        <br/><br/>
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
