'use client';

import '@radix-ui/themes/styles.css';
import { Table } from '@radix-ui/themes';

const handleClick = (personId) => {
  console.log(`${personId} clicked it.`);
}

export default function Row({ person }) {
  return (
    <Table.Row onClick={() => handleClick(person.ID)} key={person.ID}>
      <Table.RowHeaderCell>{person.ID}</Table.RowHeaderCell>
      <Table.Cell>{person.Persona}</Table.Cell>
      <Table.Cell>{person.Pais}</Table.Cell>
      <Table.Cell>{person.Ciudad}</Table.Cell>
      <Table.Cell>{person.Join}</Table.Cell>
      <Table.Cell>{person.Lead}</Table.Cell>
      <Table.Cell>{person.Cliente}</Table.Cell>
    </Table.Row>
  );
}