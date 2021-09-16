import React from "react";
import { Pie } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventBusyIcon from '@material-ui/icons/EventBusy';

function PieChart() {

  const data = {
    labels: [
      'Completed Badges',
      'Incompleted Badges'
    ],
    datasets: [{
      data: [150,150],
      backgroundColor: [
        '#3f51b5',
        '#ff9800'
      ],
      hoverOffset: 4
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
    //   value: percentage1,
      icon: EventAvailableIcon,
      color: '#3f51b5'
    },
    {
      title: 'Incomplete Badges',
    //   value: percentage2,
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
            title
            // value
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
                {/* {value}  */}  %
              </Typography>
            </Box> 
           ))}
        </Box>
      </CardContent>
    </Card>
  );
};


export default PieChart;