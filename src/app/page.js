'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

//import { run_db } from '@/lib/mongodb';
import { columns, rrhh } from '@/lib/rrhh';

export default function Home() {

  //run_db().catch(console.dir);

  return (
    <main>
      <Box sx={{ height: 400, width: '100%' }}>
        <Typography variant="h2">Delivery Team</Typography>
        <DataGrid
          rows={rrhh}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </main>
  )
}
