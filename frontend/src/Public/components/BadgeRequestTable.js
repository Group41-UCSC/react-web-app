import React , { useEffect, useState } from 'react';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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


export default function BadgeRequestTable() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Badge Name</StyledTableCell>
            <StyledTableCell align="left">Requested By</StyledTableCell>
            <StyledTableCell align="left">Requested Date</StyledTableCell>
            
            <StyledTableCell colSpan="2" align="center">Action</StyledTableCell>
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
            map((itemlog) => {
                return (
              <StyledTableRow key={itemlog.itemlogId}>
              <StyledTableCell align="left" component="th" scope="row">{itemlog.itemlogId}</StyledTableCell>
          
              <StyledTableCell align="left">{itemlog.itemlogQuantity}</StyledTableCell>
              <StyledTableCell align="left">{itemlog.itemlogIssuedto}</StyledTableCell>
              
              
              <StyledTableCell align="center"> 
              <Button m={1}
                // onClick={handleClickOpen}
                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                >
                Accept
              </Button></StyledTableCell>
              <StyledTableCell align="center">
                <Button m={1}
                    onClick={handleClickOpen}
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    className={classes.button}
                    startIcon={<DeleteIcon />}>
                    Reject
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">        Requested Badge Rejected. Provide a valid reason for rejection       </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Reason For rejection
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Reason"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
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
