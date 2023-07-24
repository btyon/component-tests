// import * as React from 'react';
// import Box from '@mui/material/Box';
// import {
//   DataGridPremium,
//   GridToolbar,
//   useGridApiRef,
//   useKeepGroupedColumnsHidden,
// } from '@mui/x-data-grid-premium';
// import { useDemoData } from '@mui/x-data-grid-generator';

// export default function Mui() {
//   const { data, loading } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     editable: true,
//     visibleFields: [
//       'commodity',
//       'quantity',
//       'filledQuantity',
//       'status',
//       'isFilled',
//       'unitPrice',
//       'unitPriceCurrency',
//       'subTotal',
//       'feeRate',
//       'feeAmount',
//       'incoTerm',
//     ],
//   });
//   const apiRef = useGridApiRef();

//   const initialState = useKeepGroupedColumnsHidden({
//     apiRef,
//     initialState: {
//       ...data.initialState,
//       rowGrouping: {
//         ...data.initialState?.rowGrouping,
//         model: ['commodity'],
//       },
//       sorting: {
//         sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
//       },
//     },
//   });

//   return (
//     <Box sx={{ height: 520, width: '100%' }}>
//       <DataGridPremium
//         {...data}
//         apiRef={apiRef}
//         loading={loading}
//         disableRowSelectionOnClick={false}
//         initialState={initialState}
//         slots={{ toolbar: GridToolbar }}
//       />
//     </Box>
//   );
// }


import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {
     DataGridPremium
   } from '@mui/x-data-grid-premium';
   import {data} from '../data'
const rows: GridRowsProp = 
 // { id: 1, col1: 'Hello', col2: 'World' },
data.map((row)=>{
   return({id: row.id, Name:row.name})
});

const columns: GridColDef[] = [
  { field: 'Name', headerName: 'Name', width: 150 }
];

export default function Mui() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGridPremium rows={rows} columns={columns} />
    </div>
  );
}