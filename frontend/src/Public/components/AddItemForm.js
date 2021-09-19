import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StatusSelector from './StatusSelector';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function AddItemForm() {


    const classes = useStyles();
    const [itemQuantity, setitemQuantity] = useState("");
    const [itemName, setitemName] = useState("");
    const [inventoryId, setinventoryId] = useState("");
    const [itemDescription, setitemDescription] = useState("");

    const addItem = () => {

        const data = {
            itemName: itemName,
            inventoryId: inventoryId,
            itemQuantity: itemQuantity,
            itemDescription: itemDescription
        };
   
        setitemQuantity("");
        setitemName("");
        setinventoryId("");
        setitemDescription("");

        if(validateForm()){
            const postLog = data => {
                axios
                .post("http://localhost:8080/add-item", data)
                .then((d) =>{
                    if(d.data != null){
                        console.log(d);
                        alert("Item saved successfully");
                        window.location.reload();
                    }
                })
            };

            postLog(data);
        }
 
        else{

    // console.log(errors);
  }
}

const validateForm=()=>{
    let errors=[];
    let isValid = true;



   // if (!dateValue) {
    //    isValid = false;
     //   errors["date"] = "Please select a date.";
    //  }

  if (!itemDescription) {
    isValid = false;
    errors["description"] = "Please enter a description.";
  }


  if (!itemName) {
    isValid = false;
    errors["name"] = "Please enter the amount.";
  }

  if (!itemQuantity) {
    isValid = false;
    errors["quatity"] = "Please enter the amount.";
  }

  if (!inventoryId) {
    isValid = false;
    errors["inventoryid"] = "Please enter the inventory ID.";
  }


//  setErros(errors);

  return isValid;

}


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add New Item
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                        autoFocus
                        margin="dense"
                        value={inventoryId}
                        onChange={(e) => { setinventoryId(e.target.value) }}
                        label="Inventory ID"
                        name="inventory"
                        // helperText={errors['inventory']}
                        fullWidth
                        required
                    />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        value={itemName}
                        onChange={(e) => { setitemName(e.target.value) }}
                        label="Item Name"
                        name="name"
                        // helperText={errors['name']}
                        fullWidth
                        required
                    />
                        </Grid>
                        
                        <Grid item xs={12}>
                            
                        <TextField
                        autoFocus
                        margin="dense"
                        value={itemQuantity}
                        onChange={(e) => { setitemQuantity(e.target.value) }}
                        label="Quantity"
                        name="quantity"
                        // helperText={errors['quantity']}
                        fullWidth
                        required
                    />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        value={itemDescription}
                        onChange={(e) => { setitemDescription(e.target.value) }}
                        label="Description"
                        name="description"
                        // helperText={errors['description']}
                        fullWidth
                        required
                    />
                        </Grid>
                        
                    </Grid>
                    <Button
                        style={{ background: '#2E3B55', color: '#ffffff' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                         onClick={(e) => addItem(e)}
                        // color="primary"
                        className={classes.submit}
                    >
                        Add Item
                    </Button>
                </form>
            </div>
        </Container>
    );
}