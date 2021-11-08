import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type list = {
  name: string,
  user_id: number,
  message: string,
  created_at: string,
}

export const List = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/fetch', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        setList(data)
    });
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserId</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">CreatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row: list) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}