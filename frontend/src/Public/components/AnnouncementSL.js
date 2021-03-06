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
import { red } from '@material-ui/core/colors';

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

  const getNoticeList = async () => {
      try{
          const data = await axios.get("http://localhost:17152/view-announcement");
          console.log(data.data);
          setProduct(data.data);
      } catch (e){
          console.log(e);
      }
  };

  const dateOnly = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year} - ${month} - ${day}`;
};

const deleteProduct = (announcement_id) => {
    axios.get("http://localhost:17152/delete-announcement", {
      params: {
        announcement_id: announcement_id,
      }
    }).then((response) => {
      window.location.reload();
    })
  };




  useEffect(() => {
      getNoticeList();
  }, []);

  return (
    <TableContainer component={Paper}>
    {/* <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{
        setSearch(e.target.value);}}/> */}
        <TableHead>
            <StyledTableRow>
              <StyledTableCell colSpan={3} align="center">Site Announcement</StyledTableCell>
             </StyledTableRow> 
        </TableHead>

      <Table className={classes.table} aria-label="customized table">
         {product.filter((item) => {
            if(search == ""){
                return item;
            }
            else if (item.itemName.toLowerCase().includes(search.toLowerCase())){
                return item;
            }}).
            map((item) => {
                return (
        <TableBody>     
              <StyledTableRow key={item.announcement_id}>
              <StyledTableCell align="left" component="th" scope="row">{item.announcement_title}</StyledTableCell>
              <StyledTableCell align="left">{dateOnly(item.announcement_date)}</StyledTableCell>
              <StyledTableCell align="left">{item.announcement_author}</StyledTableCell>
              <StyledTableCell align="right">
                <Button m={1}
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    className={classes.button}
                    onClick={() => { deleteProduct(item.announcement_id) }}
                    startIcon={<DeleteIcon />}>
                    Remove
                </Button>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell colSpan={3} align="left">{item.announcement_body}</StyledTableCell>
            </StyledTableRow> 
               
        </TableBody>
         );
            })
        }
      </Table>
    </TableContainer>
 );
};
