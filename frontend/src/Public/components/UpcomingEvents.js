import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 150,
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

export default function UpcomingEvent() {
    const classes = useStyles();
    const [product, setProduct] = useState([]);
    const bull = <span className={classes.bullet}>•</span>;

    const dateOnly = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year} - ${month} - ${day}`;
    };

    const getEvent = async () => {
        try{
            const data = await axios.get("http://localhost:17152/view-upcoming-events");
            console.log(data.data);
            setProduct(data.data);
        } catch (e){
            console.log(e);
        }
    };
  
  
    useEffect(() => {
        getEvent();
    }, []);


    return (
    //map((product) => (
        <div>
             <Card className={classes.root}>
             {product.map((product,event_Id) => (
            <CardContent   key= {product.event_Id}>
            <div>
            <Typography style={{ color: "#3f51b5" }}>
                    Title  -   {product.event_title}</Typography>
           
            </div>
            <div >
            <Typography style={{ fontSize: "12px" }}  gutterBottom>
                    Description  -  {product.event_description}</Typography>
            
            </div>
            <div  >
            
            <Typography style={{ fontSize: "12px" }}  gutterBottom>
                Start Date  -  {dateOnly(product.start_date)}</Typography>
            </div>
            <div  >
            
            <Typography style={{ fontSize: "12px" }}  gutterBottom>
                    End Date
                    -  {dateOnly(product.end_date)}
                    <br /></Typography>
            </div>
        </CardContent>
        
           ))}
    </Card>
        
    </div>
            )
    
        }
