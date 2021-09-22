import React, { useState,useEffect } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import axios from "axios";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { NoteTwoTone } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SiteAnnouncementCreator() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    // const [date, setdate] = useState("");
    const [author, setauthor] = useState("");
    const [topic, settopic] = useState("");
    const [body, setbody] = useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


        const addItem = () => {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            today = yyyy + '-' + mm + '-' + dd;


        const data = {
            announcement_date: today,
            announcement_author: author,
            announcement_title: topic,
            announcement_body: body
        };
   
        // setdate("");
        setauthor("");
        settopic("");
        setbody("");

        if(validateForm()){
            const postLog = data => {
                axios
                .post("http://localhost:17152/createAnnouncement", data)
                .then((d) =>{
                    if(d.data != null){
                        console.log(d);
                        alert("Announcement Posted successfully");
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

//   if (!date) {
//     isValid = false;
//     errors["date"] = "Please enter a date.";
//   }


  if (!topic) {
    isValid = false;
    errors["topic"] = "Please enter the title.";
  }

  if (!author) {
    isValid = false;
    errors["author"] = "Please enter the author.";
  }

  if (!body) {
    isValid = false;
    errors["body"] = "Please enter the body";
  }


//  setErros(errors);

  return isValid;

}



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create Site Announcement
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <Grid item xs={12}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Author"
                                value={author}
                                onChange={(e) => { setauthor(e.target.value) }}
                                fullWidth
                                defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Topic"
                                value={topic}
                                onChange={(e) => { settopic(e.target.value) }}
                                fullWidth
                                defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="body"
                                fullWidth
                                value={body}
                                onChange={(e) => { setbody(e.target.value) }}
                                multiline
                                rows={10}
                                defaultValue="Default Value"
                                variant="outlined"
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
                        Post Now
                    </Button>
                </form>
            </div>
        </Container>
    );
}