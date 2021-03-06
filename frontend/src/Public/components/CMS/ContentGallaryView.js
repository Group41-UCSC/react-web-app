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
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green ,red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import { FormatBold } from '@material-ui/icons';

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
    minWidth: 400,
  },
});

export default function ContentGallaryView() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getItemList = async () => {
      try{
          const data = await axios.get("http://localhost:8080/items");
          console.log(data.data);
          setProduct(data.data);
      } catch (e){
          console.log(e);
      }
  };


  useEffect(() => {
      getItemList();
  }, []);

  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
      
    <TableContainer component={Paper}>
    {/* <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{
        setSearch(e.target.value);}}/> */}
 <center><Typography component="h1" variant="h5">
                    Content Gallary Post
                </Typography></center>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Item Gallary ID</StyledTableCell>
            <StyledTableCell align="center">Item Gallary Name</StyledTableCell>
            <StyledTableCell  colSpan= '2' align="center">Action</StyledTableCell>
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
              <StyledTableRow key={item.itemId}>
              <StyledTableCell align="left" component="th" scope="row">{item.itemName}</StyledTableCell>
              
              <StyledTableCell align="left">{item.itemName}</StyledTableCell>
              <StyledTableCell align="center"> 
              <Button m={1}
                onClick={handleClickOpen}
                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                startIcon={<VisibilityIcon />}
                >
                View                                              
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Description</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{  fontWeight:'bold', fontSize:16 }}>
                        Item Description
                    </DialogContentText>
                    <Grid item>
                    <div>
            
            <Card className={classes.root}>
               {product.map((product,itemId) => (
            <CardContent  key= {product.itemId}>
                <div>
                <Typography style={{ color: "#3f51b5" , fontSize:16 }}>Title  -  {product.itemName}</Typography>
                <Typography style={{   fontSize:16 }}>Status  -  {product.itemName}</Typography>
                <Typography style={{ fontSize:16 }}>Catogory  -  {product.itemName}</Typography>
                </div>
                
            </CardContent>
               ))}
        </Card>
        </div>
                            </Grid>
                </DialogContent>
               
            </Dialog>
            </StyledTableCell>

            <StyledTableCell align="center" >
                <Button m={1}
                    href="delete-item"
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
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
