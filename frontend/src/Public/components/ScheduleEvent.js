import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextareaAutosize } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const tasks= [
    'Hill Climbing',
    'Camping',
    'Knots',
    'Cricket',
    'Camp fire',
    'Swiming',
    'Singing',
    'Dancing',
    'Cooking',
    'Wrestling',
  ];

  const groups= [
    'Reds',
    'Blues',
    'Whites',
    'Blacks',
    'Yellows',
    'Violets',
    'Limes',
    'Butters',
    'Greens',
    'Magentas',
  ];

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
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: theme.spacing.unit / 4,
      },
}));

export default function ScheduleEvent() {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [TaskName, setTaskName] = React.useState([]);

    function handleChange(event) {
      setTaskName(event.target.value);
    }

    const [GroupName, setGroupName] = React.useState([]);

    function handleChange1(event) {
      setGroupName(event.target.value);
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="title"
                                name="eventTitle"
                                variant="outlined"
                                required
                                fullWidth
                                id="eventTitle"
                                label="Event Title"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextareaAutosize
                                aria-label="eventDescription"
                                name="eventDescription"
                                required
                                variant="outlined"
                                id="eventDescription"
                                minRows={3}
                                placeholder="Please add a description regading the event"
                                style={{ width: "100%" }}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <Grid item xs={12}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Event Start Date"
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
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justifyContent="space-around">
                                <Grid item xs={12}>
                                    <KeyboardDatePicker
                                        fullWidth
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Event End Date"
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
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel htmlFor="select-multiple-chip">Tasks</InputLabel>
                            <Select
                            multiple
                            fullWidth
                            required
                            variant="outlined"
                            value={TaskName}
                            onChange={handleChange}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            >
                            {tasks.map(name => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                        <InputLabel htmlFor="select-multiple-chip">Add User Groups</InputLabel>
                            <Select
                            multiple
                            fullWidth
                            required
                            variant="outlined"
                            value={GroupName}
                            onChange={handleChange1}
                            input={<Input id="select-multiple-chip" />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                {selected.map(value => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            >
                            {groups.map(name => (
                                <MenuItem key={name} value={name}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <Button
                        style={{ background: '#2E3B55', color: '#ffffff' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Create Event
                    </Button>
                </form>
            </div>
        </Container>
    );
}