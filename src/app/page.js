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

  //db_insert().catch(console.dir);

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

  const rows = people.map((person) =>
    <Table.Row key={person.id}>
      <Table.RowHeaderCell>{person.id}</Table.RowHeaderCell>
      <Table.Cell>{person.name}</Table.Cell>
      <Table.Cell>{person.email}</Table.Cell>
      <Table.Cell>{person.role}</Table.Cell>
    </Table.Row>
  );

  const listItems = myPeopleDB.map((number) =>
  <li>{number.Persona}</li>
  );

  return (
    <html>
      <body>
        <h1>MyApp</h1>
        <br/><br/>
        <ul>
          {listItems}
        </ul>
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
