import React, { useState, useEffect } from "react";
import axios from "axios";
import IntensityChart from "./IntensityChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import RelevanceBubbleChart from "./Relevance";
import TopicsRadarChart from "./TopicChart";
import PieChart from "./SectorChart";
import CountryChart from "./Country";
import LikelihoodRadarChart from "./LikelihoodChart";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "http://localhost:2525";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <Navbar />

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} m={50}>
      
      <Box>
        <PieChart data={data} />
      </Box>
      <Box>
        <LikelihoodRadarChart data={data} />
      </Box>
    </Grid>

      <Box m={50}>
      <CountryChart data={data} />
    </Box>
      
    
      <Box m={50}>
        <RelevanceBubbleChart data={data} />
      </Box>
  
      <Box m={50}>
        <IntensityChart data={data} />
      </Box>
     
      <Flex direction={{ base: "column", md: "row" }} m={50} justifyContent="space-between">
      <Box
        flex={{ base: "1", md: "0.5" }}
        p={5}
        m={2}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        borderRadius={20}
        width="100%"
      >
        <RegionChart data={data} />
      </Box>
      <Box
        flex={{ base: "1", md: "0.5" }}
        p={5}
        m={2}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        borderRadius={20}
        width="100%"
      >
        <TopicsRadarChart data={data} />
      </Box>
    </Flex>
    </ChakraProvider>
  );
};

export default Main;
