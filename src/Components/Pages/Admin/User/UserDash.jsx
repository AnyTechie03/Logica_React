import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { tableCellClasses  } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const UserDash = ({ isFinialCall, setFinialCall }) => {

    const [UserList, setList] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
   
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize:18,
        
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 16,   
        color: theme.palette.common.white,
      },
    }));
  
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
     backgroundColor:theme.palette.grey.A700,
     color: theme.palette.common.white,
    }));
    
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    useEffect(() => {
      fetch("https://angry-moon-10536.pktriot.net/fetchUser", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setList(data.data);
          console.log("Before set",isFinialCall)
          console.log("Before set",setFinialCall)
          
          console.log("After set",setFinialCall)
          console.log("After set",isFinialCall)
  
          // console.log(data.length, "UserData");
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
                <StyledTableCell>Team Name</StyledTableCell>
                <StyledTableCell align="left">Team Email</StyledTableCell>
                <StyledTableCell align="left">Round 1 Selected</StyledTableCell>
                <StyledTableCell align="left">Round 1 Score</StyledTableCell>
                <StyledTableCell align="left">Round 2 Selected</StyledTableCell>
                <StyledTableCell align="left">Round 2 Score</StyledTableCell>
                <StyledTableCell align="left">Round 3 Selected</StyledTableCell>
                <StyledTableCell align="left">Round 3 Score</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {UserList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((i) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{i.teamName}</StyledTableCell>
                    <StyledTableCell>{i.email}</StyledTableCell>
                    <StyledTableCell align = 'center'>{i.Level_1 ? <CheckIcon/> : <ClearIcon/>}</StyledTableCell>
                    <StyledTableCell align = 'center'>{i.Level_1_Score}</StyledTableCell>
                    <StyledTableCell  align = 'center'>{i.Level_2 ? <CheckIcon/> : <ClearIcon/>}</StyledTableCell>
                    <StyledTableCell align = 'center'>{i.Level_2_Score}</StyledTableCell>
                    <StyledTableCell  align = 'center'>{i.Level_3 ? <CheckIcon/> : <ClearIcon/>}</StyledTableCell>
                    <StyledTableCell align="center">{i.Level_3_Score}</StyledTableCell>
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
    </div>
  )
}

export default UserDash