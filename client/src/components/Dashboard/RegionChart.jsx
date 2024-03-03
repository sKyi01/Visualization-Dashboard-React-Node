import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const RegionChart = ({ data }) => {
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const colorPalette = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4CAF50',
    '#FF9800',
    '#9C27B0',
    '#3F51B5',
    '#2196F3',
    '#FF5722',
    '#E91E63',
    '#673AB7',
    '#607D8B',
    '#795548',
    '#8BC34A',
    '#FFC107',
    '#009688',
    '#FF5252',
    '#FF9F00',
    '#9E9E9E',
  ];

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: colorPalette.slice(0, Object.keys(regionCounts).length),
        hoverBackgroundColor: colorPalette.slice(0, Object.keys(regionCounts).length),
      },
    ],
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default RegionChart;
