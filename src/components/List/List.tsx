import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const cloneDeep = require('clone-deep');

// type list = {
//   id: number,
//   name: string,
//   user_id: number,
//   message: string,
//   created_at: string,
// }

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user_id',
    headerName: 'User Id',
    width: 150,
    editable: true,
  },
  {
    field: 'message',
    headerName: 'Massage',
    width: 150,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    width: 160,
  },
];

export const List = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('/fetch', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setList(data)
    });
  }, [])
  // セルの更新
  const changeCell = (v: any) => {
    let newValue = cloneDeep(list); /* lodashでstateをディープコピー */
    let idx = list.findIndex((d: any) => d.id === v.id);  /* 該当データのindexを取得 */
    newValue[idx][v.field] = v.value;
    setList(newValue)  /* 編集されたデータを置き換える */
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={changeCell}
      />
    </div>
  );
}
