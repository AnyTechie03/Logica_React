import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import "./UserDash.css";
import * as XLSX from "xlsx/xlsx";

const UserDash = ({ isFinialCall, setFinialCall }) => {
  const [UserList, setList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let serialNumber = page * rowsPerPage;

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(UserList);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Participants Details");
    XLSX.writeFile(wb, "participants_details.xlsx");
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: theme.palette.common.white,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.grey.A700,
    color: theme.palette.common.white,
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handledisqualify = (e) => {
    console.log(e);
  };

  useEffect(() => {
    fetch("https://angry-moon-10536.pktriot.net/fetchUser", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
      },
      credentials:'include'
    })
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
      });
  }, []);

  return (
    <div className="UserListContainer">
      <div className="ListTitle mx-auto">
        <h1>Participants Details</h1>
      </div>

      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="Participants Details">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Sr. No.</StyledTableCell>
                <StyledTableCell align="center">Team Name</StyledTableCell>
                <StyledTableCell align="center">Team Email</StyledTableCell>
                <StyledTableCell align="center">Team Leader</StyledTableCell>
                <StyledTableCell align="center">Team Member</StyledTableCell>
                <StyledTableCell align="center">College</StyledTableCell>
                <StyledTableCell align="center">City</StyledTableCell>
                <StyledTableCell align="center">Payment</StyledTableCell>
                <StyledTableCell align="center">Round 1 </StyledTableCell>
                <StyledTableCell align="center">Round 2 </StyledTableCell>
                <StyledTableCell align="center">Round 3 </StyledTableCell>
                <StyledTableCell align="center">
                  Disqualify Participant
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {UserList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((i, index) => {
                serialNumber++;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{serialNumber}</StyledTableCell>
                    <StyledTableCell align="center">
                      {i.teamName ? i.teamName : "------"}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{i.email}</StyledTableCell>
                    <StyledTableCell align='center'>{i.firstName}</StyledTableCell>
                    <StyledTableCell align='center'>{i.teamMembers[0].firstName1}</StyledTableCell>
                    <StyledTableCell align='center'>{i.collegeName}</StyledTableCell>
                    <StyledTableCell align='center'>{i.city}</StyledTableCell>
                    <StyledTableCell align="center">
                      {i.PaymentStatus ? <CheckIcon /> : <ClearIcon />}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {i.Level_1 ? <CheckIcon /> : <ClearIcon />}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {i.Level_2 ? <CheckIcon /> : <ClearIcon />}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {i.Level_3 ? <CheckIcon /> : <ClearIcon />}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <button onClick={() => handledisqualify(i.email)}>
                        Disqualify
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="Pagination"
          // style={{color:'white'}}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={UserList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
};

export default UserDash;
