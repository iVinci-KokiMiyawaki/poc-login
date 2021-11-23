import React, { useState, useEffect } from 'react';
import Amplify, { API, Auth } from 'aws-amplify'
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
    const getUserList = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const token = user.signInUserSession.idToken.jwtToken;
      const APIName = 'pocapi'
      const path = '/items'
      const myInit = {
        headers: {
          Authorization: token,
        },
      };
      const res = await API.get(APIName, path, myInit);
      setList(res.list)
    }
    getUserList();
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
