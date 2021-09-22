import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import { green, red } from '@material-ui/core/colors';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function UserTable() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getUsersList = async () => {
      try{
          const data = await axios.get("http://localhost:17152/view-users");
          console.log(data.data);
          setProduct(data.data);
      } catch (e){
          console.log(e);
      }
  };

  const deleteUser = (userid) => {
    axios.get("http://localhost:17152/delete-user", {
      params: {
        userid: userid,
      }
    }).then((response) => {
      window.location.reload();
    })
  };


  useEffect(() => {
      getUsersList();
  }, []);

  return (
    <TableContainer component={Paper}>
    {/* <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{
        setSearch(e.target.value);}}/> */}

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">First name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Contact Num</StyledTableCell>
            <StyledTableCell align="left">User Role</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
              {product.filter((item) => {
            if(search == ""){
                return item;
            }
            else if (item.itemName.toLowerCase().includes(search.toLowerCase())){
                return item;
            }}).
            map((item) => {
                return (
              <StyledTableRow key={item.userid}>
              <StyledTableCell align="left" component="th" scope="row">{item.first_name}</StyledTableCell>
              <StyledTableCell align="left">{item.last_name}</StyledTableCell>
              <StyledTableCell align="left">{item.address}</StyledTableCell>
              <StyledTableCell align="left">{item.phone}</StyledTableCell>
              <StyledTableCell align="left">{item.user_role}</StyledTableCell>
              <StyledTableCell align="center"> 
              <Button m={1}
                target="_blank"
                component ={Link}
                to={location=> `/ViewUserInfoRoute/${item.userid}`}
                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                startIcon={<VisibilityIcon />}
                >
                View
              </Button></StyledTableCell>
              <StyledTableCell align="center">
                <Button m={1}
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    onClick={() => { deleteUser(item.userid) }}
                    className={classes.button}
                    startIcon={<DeleteIcon />}>
                    Delete
                    </Button>
              </StyledTableCell>
              </StyledTableRow>
                );
            })
        }
        </TableBody>
      </Table>
    </TableContainer>
 );
};
