import axios from "axios";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const NewTest = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:8080/items"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {/* {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} - {item.price}
            </p>
          );
        })} */}

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Item Name</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="left">Avail.Qty</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <StyledTableRow key={item.itemId}>
              <StyledTableCell align="left" component="th" scope="row">{item.itemName}</StyledTableCell>
              <StyledTableCell align="left">{item.itemQuantity}</StyledTableCell>
              <StyledTableCell align="left">{item.itemDescription}</StyledTableCell>
              <StyledTableCell align="left">{item.itemStatus}</StyledTableCell>
              </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewTest;