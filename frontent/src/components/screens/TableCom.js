import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableCom({ data }) {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SN</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">SN</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">Admission No</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Father Name</TableCell>
            <TableCell align="right">Mother Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Father Mobile</TableCell>
            <TableCell align="right">Admission Date</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Roll No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((student) => (
            <TableRow
              key={student.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="right">{student.First_Name}</TableCell>
              <TableCell align="right">{student.Admission_No}</TableCell>
              <TableCell align="right">{student.DOB}</TableCell>
              <TableCell align="right">{student.Father_Name}</TableCell>
              <TableCell align="right">{student.Mother_Name}</TableCell>
              <TableCell align="right">{student.Address}</TableCell>
              <TableCell align="right">{student.Father_Mobile}</TableCell>
              <TableCell align="right">{student.Admission_Date}</TableCell>
              <TableCell align="right">{student.Class}</TableCell>
              <TableCell align="right">{student.Section}</TableCell>
              <TableCell align="right">{student.Roll_No}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
