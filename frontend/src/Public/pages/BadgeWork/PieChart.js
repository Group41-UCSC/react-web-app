import React, { useState,useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  Typography,
} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import axios from 'axios'

function PieChart() {
  let user_id = localStorage.getItem('user_id');
  user_id = JSON.parse(user_id)
  const [completetask,setCompletetask]=useState([])
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('http://localhost:17152/completeprogress', {
              params: {
                  user_id: user_id,
              }
          });
          setCompletetask(response.data)
          // console.log(response.data[0]);
      };
      fetchData();
    }, []);

    const [totaltask,settotaltask]=useState([])
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('http://localhost:17152/totalbadge', {
              // params: {
              //     user_id: user_id,
              // }
          });
          settotaltask(response.data)

      };
      fetchData();
    }, []);

    const count1=completetask.map(record=>record.count);
    const count2=totaltask.map(record=>record.count);
    // const count3= (count2-count1);

    const c = parseInt(count1);
    const t = parseInt(count2);
    const p = parseInt(count2)- parseInt(count1);

    const percentageC= c / t * 100 ;
    const percentageP= p / t * 100 ;

    const c1 = parseInt(percentageC);
    const p1 = parseInt(percentageP);

  const data = {
    labels: [
      'Completed Badges',
      'Incompleted Badges'
    ],
    datasets: [{
      data: [c,p],
      backgroundColor: [
        '#3f51b5',
        '#ff9800'
      ],
      hoverOffset: 4,
      borderWidth: 8,
      borderColor: colors.common.white,
      hoverBorderColor: colors.common.white
    }]
  };

  const options = {
    animation: false,
    cutoutPercentage: 0,
    layout: { padding: 0 },
    legend: {
      display: true
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      borderWidth: 1,
      enabled: true,
      intersect: false,
      mode: 'index',
    }
  };

  const pic= [
    {
      title: 'Completed Badges',
      value: c1,
      icon: EventAvailableIcon,
      color: '#3f51b5'
    },
    {
      title: 'Incomplete Badges',
      value: p1,
      icon: EventBusyIcon,
      color: '#ff9800'
    }
  ];

  return (
    <Card>
      <CardHeader title="Badge Progress" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Pie
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {pic.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 2,
                textAlign: 'center'
              }}
            >
              <Icon  
              style={{ color }}
              iconSize="large"/>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                 {value} %
              </Typography>
            </Box> 
           ))}
        </Box>
      </CardContent>
    </Card>
  );
};


export default PieChart;