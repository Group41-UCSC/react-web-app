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
import { Link } from 'react-router-dom';

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

export default function ItemView() {
  const classes = useStyles();
  const [event, setEvent] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:17152/view-upcoming-events").then((response)=>{
      setEvent(response.data)
    })
  },[])

  const deleteUpcomingEvent = (event_id) => {
    axios.get("http://localhost:17152/delete-event", {
      params: {
        event_id: event_id,
      }
    }).then((response) => {
      window.location.reload();
    })
  };

  return (
    <TableContainer component={Paper}>
   {} <TextField fullLength placeholder="Search Here" id="outlined-basic" variant="outlined" type="text" 
    onChange={(e)=>{

        setSearch(e.target.value);}}/>
      <center><Typography component="h1" variant="h5">
                     Upcoming Event List
                </Typography></center>

<br/>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Event ID</StyledTableCell>
            <StyledTableCell align="center">Event Title</StyledTableCell>
            <StyledTableCell align="center">Start Date</StyledTableCell>
            <StyledTableCell align="center">End Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell> 
          </TableRow> 
        </TableHead> 
        <TableBody>
            {event.filter((record) => {
            if(search == ""){
                return event;
            }
            else if (event.event_title.toLowerCase().includes(search.toLowerCase())){
                return event;
            }}).
            map((event) => {
                return (
              <StyledTableRow key={event.event_id}>
               <StyledTableCell align="center" component="th" scope="row">{event.event_id}</StyledTableCell>
              <StyledTableCell align="center" component="th" scope="row">{event.event_title}</StyledTableCell>
              <StyledTableCell align="center">{event.start_date}</StyledTableCell>
              <StyledTableCell align="center">{event.end_date}</StyledTableCell>
              {/* <StyledTableCell align="center"> 
              <Button m={1}
              target="_blank"
               component ={Link}
                to={location=> `/ItemInfoRoute/${event.event_id}`} 
                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                variant="contained"
                className={classes.button}
                startIcon={<VisibilityIcon />}
                >
                View
              </Button></StyledTableCell> */}
              <StyledTableCell align="center">
                <Button m={1}
                    style={{ backgroundColor: red[500], color: '#FFFFFF' }}
                    variant="contained"
                    className={classes.button}
                    onClick={() => { deleteUpcomingEvent(event.event_id) }} 
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
}