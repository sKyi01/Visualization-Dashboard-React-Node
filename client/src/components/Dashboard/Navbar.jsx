import React from "react";


import {
  Box,
  Flex,
  Container,
  Input,
  Link,
  ButtonSpinner,
} from "@chakra-ui/react";
import Button from "../Button";

const Navbar = () => {
  return (
    <Box
      py={4}
      bg="#FF9B59"  // Dark background color
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
      <Button/>
      
        <Flex justify="flex-end" align="center">
          <Link href="/" style={{ textDecoration: 'none',textAlign:"center" }}>
            <h1 style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>Visualization Board</h1>
          </Link>
       
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
