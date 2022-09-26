import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeComponent from "../../component/HomeComponent/HomeComponent";
import "./Home.css";

const Home = () => {
  return (
    <Box className="homePage-parent">
      <Container>
        {/* <Header />
        <DescriptionBox />
        <Footer /> */}
        <HomeComponent />
      </Container>
    </Box>
  );
};

export default Home;
