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
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
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

export default function BadgeRequestList() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getUsersList = async () => {
      try{
          const data = await axios.get("http://localhost:17152/view-badge-request");
          console.log(data.data);
          setProduct(data.data);
      } catch (e){
          console.log(e);
      }
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
              <StyledTableCell align="left">{item.contact}</StyledTableCell>
              <StyledTableCell align="left">{item.user_role}</StyledTableCell>
              <StyledTableCell align="center"> 
              <Button m={1}
                href="/edit-item-form"
                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                startIcon={<VisibilityIcon />}
                >
                Accept
              </Button></StyledTableCell>
              <StyledTableCell align="center">
                <Button m={1}
                    href="delete-item"
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<DeleteIcon />}>
                    Reject
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
