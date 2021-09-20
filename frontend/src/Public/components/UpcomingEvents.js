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

    const getEvent = async () => {
        try{
            const data = await axios.get("http://localhost:8080/events");
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
        <CardContent  key= {product.event_Id}>
            <div>
            {product.eventTitle}
            </div>
            <div  variant="h6" component="h4">
            {product.eventStatus}
            </div>
            <div  variant="h6" component="h4">
            {product.eventCatagory}
            </div>
        </CardContent>
           ))}
    </Card>
    </div>
            )
    
        }
