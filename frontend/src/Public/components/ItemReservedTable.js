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
import { blue, red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

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

export default function ItemRequestTable() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getItemlogPendingList = async () => {
      try{
          const data = await axios.get("http://localhost:8080/itemlogs/pending");
          console.log(data.data);
          setProduct(data.data);
      } catch (e){
          console.log(e);
      }
  };


  useEffect(() => {
      getItemlogPendingList();
  }, []);

  return (
    <TableContainer component={Paper}>
    <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{
        setSearch(e.target.value);}}/>
      <center><Typography component="h1" variant="h5">
                    Reserved Item List
                </Typography></center>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Item Log ID</StyledTableCell>
            <StyledTableCell align="center">Item Name</StyledTableCell>
            <StyledTableCell align="center">Requested Quantity</StyledTableCell>
            <StyledTableCell align="center">Requester name</StyledTableCell>
            <StyledTableCell align="center">Requesting Date</StyledTableCell>
            <StyledTableCell align="center">Returning Date</StyledTableCell>
            <StyledTableCell colspan="2" align="center">Action</StyledTableCell>
           
          </TableRow> 
        </TableHead> 
        <TableBody>
            {product.filter((itemlog) => {
            if(search == ""){
                return itemlog;
            }
            // 
        }).
            map((itemlog) => {
                return (
              <StyledTableRow key={itemlog.itemlogId}>
              <StyledTableCell align="left" component="th" scope="row">Fake</StyledTableCell>
              <StyledTableCell align="left" component="th" scope="row">fake</StyledTableCell>
              <StyledTableCell align="left">fake</StyledTableCell>
              <StyledTableCell align="left">fake</StyledTableCell>
              <StyledTableCell align="left">fake</StyledTableCell>
              <StyledTableCell align="left">fake</StyledTableCell>
   
              <StyledTableCell align="center"> 
              <Button m={1}
               
                style={{ backgroundColor: blue[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                >
                Issue
              </Button></StyledTableCell>
              <StyledTableCell align="center">
                <Button m={1}
                    href="delete-item"
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<DeleteIcon />}>
                    Cancel
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
}

