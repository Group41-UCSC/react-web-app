import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function RoleSelector() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        role: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Role</InputLabel>
                <Select
                    native
                    required
                    fullWidth
                    value={state.role}
                    onChange={handleChange}
                    label="Role"
                    inputProps={{
                        name: 'scout_role',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="scout_role" />
                    <option value={1}>Junior Scout</option>
                    <option value={2}>Senior Scout</option>
                    <option value={3}>Scout Leader</option>
                </Select>
            </FormControl>

        </div>
    );
}
