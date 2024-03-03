import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';

const TopicsPolarAreaChart = ({ data }) => {
  const topics = data.map(item => item.topic);

  // Generate a dynamic color palette based on the number of topics
  const colorPalette = generateColorPalette(topics.length);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map(item => item.relevance),
        backgroundColor: colorPalette.backgroundColor,
        borderColor: colorPalette.borderColor,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <PolarArea data={chartData} options={chartOptions} />
    </Box>
  );
};

// Function to generate a dynamic color palette
const generateColorPalette = (numColors) => {
  const backgroundColor = [];
  const borderColor = [];

  for (let i = 0; i < numColors; i++) {
    const hue = (i * 360) / numColors;
    backgroundColor.push(`hsla(${hue}, 60%, 70%, 0.6)`);
    borderColor.push(`hsla(${hue}, 60%, 70%, 1)`);
  }

  return { backgroundColor, borderColor };
};

export default TopicsPolarAreaChart;
