import { useState, useEffect } from 'react';
import { DataGrid, GridCellEditCommitParams, GridCellValue, GridColDef } from '@mui/x-data-grid';
import cloneDeep from 'clone-deep';

type list = {
  id: number,
  name: string,
  user_id: number,
  message: string,
  created_at: string,
  [key: string]: GridCellValue,
}

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

export const List: React.FC = () => {
  const [list, setList] = useState<Array<list>>([])
  useEffect(() => {
    fetch('api/fetch', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setList(data)
    });
  }, [])
  // セルの更新
  const changeCell = (v: GridCellEditCommitParams) => {
    setList((oldState) => {
      const newValue = cloneDeep(list);
      const idx = list.findIndex((d) => d.id === v.id);
      newValue[idx][v.field] = v.value;
      return oldState;
    });
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
