import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EmployeeData } from "../types"
import EmployeeDataService from "../employee.service";
import { Pagination } from "@mui/material";

type Props = {};
// type State = EmployeeData & {
//   submitted: boolean
// };


export default function BasicTable() {

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [employeeList, setEmployeeList] = useState<EmployeeData[]>([]);

  useEffect(() => {
    EmployeeDataService.getAll("?page=1&limit=2").then((res: any) => {
      setEmployeeList(res?.data?.employees)
      setCount(res?.data?.count)
    })
  }, [])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    EmployeeDataService.getAll(`?page=${value}&limit=2`).then((res: any) => {
      setEmployeeList(res?.data?.employees)
    })
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Date Of Birth</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Date Of Employment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((row: EmployeeData, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.dateOfBirth}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.dateOfEmployment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Pagination count={count / 2} page={page} onChange={handleChange} />
      </Table>
    </TableContainer>
  );
}