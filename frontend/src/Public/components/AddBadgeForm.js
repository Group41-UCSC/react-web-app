import React, {useState, useEffect}from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import { useForm } from "react-hook-form";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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

    imageInput:{
        border:'none',
        borderColor:'white'
      },
}));

export default function AddBadgeForm() {
    const classes = useStyles();

    const [state,setState]=useState({file:'',badge_media:'',message:'',success:false})
    const [ badge_name,setBadge]=useState("");
    const [description,setDescription]=useState("");

    const {handleSubmit} = useForm();
    


    const submitForm =() =>{
        // e.preventDefault();
          
         if(state.file)
         {
           let formData=new FormData();
           formData.append('file',state.file)
    
        axios.post('http://localhost:17152/imageUpload',formData,{
             'content-Type':'multipart/form-data',
           })
    
        axios.post('http://localhost:17152/addBadges', {
         
           
             image:state.file.name,
            badge_name: badge_name,
            description:description,
            
            
            
          }).then(()=>{
            alert('Badge added successfully');
            window.location.reload();
          })
         
    
     }else{
       setState({
         ...state,
         message:'please select image'
       })
     
     }
    
    }
    
      const handleInput =(e) =>{
        let reader =new FileReader();
        let file=e.target.files[0]
        reader.onloadend =() =>{
          setState({
            ...state,
            file:file,
            badge_media:reader.result,
            message:""
          })
        }
        reader.readAsDataURL(file);
      }

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Add New Badge
                </Typography>
                    <Grid container spacing={2}>

                    <form className={classes.form} noValidate onSubmit={handleSubmit(submitForm)}
>
                        <Grid item xs={12} >
                            <TextField
                                autoComplete="bname"
                                name="badgeName"
                                required
                                fullWidth
                                id="badgeName"
                                label="Badge Name"
                                autoFocus
                                onChange={(event)=> {setBadge(event.target.value); }}
                            />
                        </Grid>
                        <br></br>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Badge Description"
                                name="description"
                                autoFocus
                                onChange={(event)=> {setDescription(event.target.value); }}
                            />
                        </Grid>
                        <br></br>
                        
                        <div style={{display:'flex'}}>
                        <Grid item xs={12} sm={6} style={{color:'grey', fontSize:'16px'}}>
                            Badge Media :
                        </Grid>
                         <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                                className={classes.imageInput} onChange={handleInput}
                            />

                            <Button color="primary" variant="contained" component="span" >
                                Upload Image
                            </Button>
                        </label>
                        </div>

                        {state.message && <h6 className={classes.mess}>{state.message}</h6>}            
                        <div style={{marginLeft:'227px'}}>
                        {state.badge_media && (<img src={state.badge_media}  width="20%" height="20%"  alt="preview" />)}
                        </div><br/>
                         

                    <Button
                        style={{ background: '#2E3B55', color: '#ffffff' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                        
                    >
                        Add Badge
                    </Button>
                </form>

                    </Grid>
                    
            </div>
        </Container>
    );
}