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

const dateOnly = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} - ${month} - ${day}`;
};

export default function BadgeLogTable() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  // const getItemlogPendingList = async () => {
  //     try{
  //         const data = await axios.get("http://localhost:8080/itemlogs/pending");
  //         console.log(data.data);
  //         setProduct(data.data);
  //     } catch (e){
  //         console.log(e);
  //     }
  // };


  // useEffect(() => {
  //     getItemlogPendingList();
  // }, []);

  useEffect(()=>{
    axios.get("http://localhost:17152/view-badgelog").then((response)=>{
      setProduct(response.data)
      console.log(response.data)
    })
    
  },[])

  return (
    <TableContainer component={Paper}>
    <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{
        setSearch(e.target.value);}}/>
  <center><Typography component="h1" variant="h5">
                    Badge Log Table
                </Typography></center>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Badge Name</StyledTableCell>
            <StyledTableCell align="left">Requested By</StyledTableCell>
            <StyledTableCell align="left">Requested Date</StyledTableCell>
            <StyledTableCell align="left">Approved Date</StyledTableCell>
            <StyledTableCell align="left">Completed Date Date</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            
            <StyledTableCell align="left"></StyledTableCell> 
          </TableRow> 
        </TableHead> 
        <TableBody>
            {product.filter((itemlog) => {
            if(search == ""){
                return itemlog;
            }
            // 
        }).
            map((record) => {
                return (
              <StyledTableRow >
              <StyledTableCell align="left" component="th" scope="row">{record.badge_name}</StyledTableCell>
              <StyledTableCell align="left">{record.first_name}</StyledTableCell>
              <StyledTableCell align="left">{dateOnly(record.badgelog_requested_date)}</StyledTableCell>
              <StyledTableCell align="left">{ record.badgelog_approved_date == "NULL" ? <Button>Not_Applicable</Button> : dateOnly(record.badgelog_approved_date)}</StyledTableCell>
              <StyledTableCell align="left">{record.badgelog_completed_date == "NULL" ? <Button>Not_Applicable</Button> : dateOnly(record.badgelog_completed_date)}</StyledTableCell>
              <StyledTableCell align="left">{record.badgelog_status}</StyledTableCell>
              
              </StyledTableRow>
                );
            })
        }
        </TableBody>
      </Table>
    </TableContainer>
 );
}

