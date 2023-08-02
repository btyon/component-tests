import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {
  DataGridPremium
} from '@mui/x-data-grid-premium';
import { data } from '../data'
import { measureInteraction } from '../Utils';
import afterFrame from 'afterframe';
const rows: GridRowsProp =
  // { id: 1, col1: 'Hello', col2: 'World' },
  data.map((row) => {
    return ({ 
       id           : row.id,
       Name         : row.name, 
       samplesEn    : row.definition.samplesEn,
       samplesTr    : row.definition.samplesTr,
       developerNote: row.definition.developerNote,
       architectNote: row.definition.architectNote,
       returnType   : row.returnType,
       isDeprecated : row.isDeprecated,
       isLost       : row.isLost,
       
      })
  });

  const interaction = measureInteraction();
  afterFrame(() => {
      interaction.end();
  });
const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 150 },
  { field: 'returnType', headerName:'returnType', width:150},
  { field: 'samplesEn', headerName: 'samplesEn', width: 180 },
  { field: 'samplesTr', headerName: 'samplesTr', width: 180 },
  { field: 'developerNote', headerName: 'developerNote', width: 180 },
  { field: 'architectNote', headerName: 'architectNote', width: 180 },
  { field: 'isDeprecated', headerName:'isDeprecated', width:150},
  { field: 'isLost', headerName:'isLost', width:150},
  
];
export default function Mui() {
  return (
    <div style={{ height: '97vh'}}>
      <DataGridPremium 
        rows={rows} columns={columns} 
        disableRowSelectionOnClick
        initialState={{
          rowGrouping: {
            model: ['Name'],
          },
        }}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        />
    </div>
  );
}