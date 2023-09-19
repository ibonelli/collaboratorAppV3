import '@radix-ui/themes/styles.css';

import { Table } from '@radix-ui/themes';
import { run_db } from '@/lib/mongodb';

export default function Home() {

  //db_insert().catch(console.dir);
  const persona = run_db().catch(console.dir);

  const headers = [
    { id:0, name:"Full name"},
    { id:1, name:"Email"},
    { id:2, name:"Group" }
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
      <Table.RowHeaderCell>{person.name}</Table.RowHeaderCell>
      <Table.Cell>{person.email}</Table.Cell>
      <Table.Cell>{person.role}</Table.Cell>
    </Table.Row>
  );

  return (
    <html>
      <body>
        <h1>MyApp</h1>
        <p>{persona}</p>
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
