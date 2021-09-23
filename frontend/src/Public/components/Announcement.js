import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Announcement() {
    const classes = useStyles();
    const [product, setProduct] = useState([]);

    const getAnnouncement = async () => {
        try{
            const data = await axios.get("http://localhost:17152/view-announcement");
            console.log(data.data);
            setProduct(data.data);
        } catch (e){
            console.log(e);
        }
    };
  
  
    useEffect(() => {
        getAnnouncement();
    }, []);

    return (
        <div>
        <Card className={classes.root}>
            {product.map((product,announcement_Id) => (
            <CardContent  key= {product.announcement_Id}>
            <div>
            <Typography style={{ color: "#3f51b5" }}>
                    Announcement Topic  -  {product.announcement_title}</Typography>
           
            </div>
            <div >
            <Typography style={{ fontSize: "12px" }}  gutterBottom>
                     Date  -  {product.announcement_date}</Typography>
            
            </div>
            <div  >
            
            <Typography style={{ fontSize: "12px" }}  gutterBottom>
                Author  -  {product.announcement_author}</Typography>
            </div>
            <div  >
            
            <Typography >
                    Announcemnt Body
                    -  {product.announcement_body}
                    <br /></Typography>
            </div>
        </CardContent>
        
           ))}
    </Card>
    </div>
            )
    
        }


