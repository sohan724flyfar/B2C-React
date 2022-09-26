import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import line from "../../image/line.png";
import liner from "../../image/liner.png";
import Buy from "../../image/notable.png";
import Visac from "../../image/Visac.png";
import covids from "../../image/covids.png";
import air from "../../image/air.png";
import travels from "../../image/travels.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeSlider from "../HomeSlider/HomeSlider";
import "./HomeComponent.css";

const HomeComponent = () => {
  return (
    <Box className="allbodycolor">
      <Header />
      <section>
        <HomeSlider />
      </section>
      <section
        style={{
          margin: "85px 0px",
        }}
      >
        <Box className="containers">
          <Box color="white" textAlign="center">
            <Box className="img-text">
              <img src={liner} alt="line" /> <span>Our Service</span>
            </Box>

            <h1 className="h2-text">What We Are Offering?</h1>
          </Box>
          <Grid container spacing={6} marginTop="4rem" marginBottom="4rem">
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={Visac} alt="visa" />
                </Box>

                <Box className="visa-cont">
                  <h4>Smooth Booking Platform</h4>

                  <article>
                    Our long years experience in this trade helps us in making a
                    convenient booking platform for our valuable
                    agents/partners. You can get easy access to worldwide
                    suppliers and services just putting your simple details on
                    our platform.
                  </article>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={travels} alt="visa" />
                </Box>
                <Box className="visa-cont">
                  <h4>Professional Travel Assistance</h4>

                  <article>
                    You can consult with our concerned support team for any kind
                    of travel related advice or consultancy. Our support team
                    will ensure you the best possible travel solutions which
                    will help you to deal with your customer with utmost care.
                  </article>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={air} alt="visa" />
                </Box>

                <Box className="visa-cont">
                  <h4>User friendly Customizable UI</h4>

                  <article>
                    We are offering a highly customizable user interface where
                    you can experience our smooth B2B portal & our dashboard
                    where the access of world class inventories will be at your
                    hand.
                  </article>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={covids} alt="visa" />
                </Box>
                <Box className="visa-cont">
                  <h4>24*7 Online & Offline Services</h4>

                  <article>
                    Get our 24*7 Online & Offline Service assistance in
                    providing excellent service to your valuable clients. Our
                    experts are always there to help you grow your business.
                  </article>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>

      {/* Buy Air Ticket With Lowest Price. */}
      <section
        style={{
          margin: "150px 0px",
        }}
      >
        <Box className="containers" marginBottom="70px">
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            container
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {/* <Box className="Buy-air-ticket"> */}
              <Grid className="Buy-air-tickets bbbb">
                <Grid>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "30px",
                        color: "#fff",
                      }}
                    >
                      OUR{" "}
                      <span style={{ color: "#dc143c", fontSize: "35px" }}>
                        NOTABLE
                      </span>{" "}
                      CUSTOMER SUPPORT
                    </h1>

                    <article className="article">
                      <Box className="list-bullet">
                        <li style={{ color: "#fff" }}>365 Assistance</li>
                      </Box>

                      <Box className="customerSupport">
                        <p>
                          Our dedicated support team is prepared at any time to
                          guide you to confirm your service. We are actively
                          operational everyday, 365 days in a year (from 09 am -
                          01 am) except weekend and government holidays.
                        </p>
                      </Box>

                      <Box className="list-bullet">
                        <li style={{ color: "#fff" }}>Need Tourism Support?</li>
                      </Box>

                      <Box className="customerSupport">
                        <p>
                          We are giving service not only for flights and hotels,
                          if you need Visa processing, Tour package, simply call
                          Fly Far Agent support team.
                        </p>
                      </Box>
                      <Box className="list-bullet">
                        <li style={{ color: "#fff" }}>Offline Support</li>
                      </Box>

                      <Box className="customerSupport">
                        <p style={{ paddingBottom: "0px" }}>
                          Our dedicated support team will try to ensure offline
                          support for you excluding regular operational hours.
                        </p>
                      </Box>
                    </article>

                    <Box className="get-ticket-button">
                      <a
                        href="https://www.facebook.com/FlyFarInternational/"
                        target="_blank"
                        style={{
                          textDecoration: "none",
                        }}
                        rel="noreferrer"
                      >
                        <Button className="get-ticket-btn">
                          Get My Ticket Now
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              {/* </Box> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="our-spacial-service"
            >
              <Box>
                <img src={Buy} alt="Buy ticket" width="80%" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>
      {/* Why Fly Far International Section */}
      <section className="explore-more-body">
        {/* <Container> */}
        <Grid
          sx={{ display: "flex", alignItems: "center" }}
          className="containers"
          container
          spacing={1}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            display="flex"
            alignItems="center"
          >
            <Box>
              <Box className="img-text3">
                <img src={line} alt="line" /> <span>Why Choose Us</span>
              </Box>
              <h1 className="h1-text">Why Fly Far International?</h1>
              <Typography
                className="finest"
                color={"#fff"}
                mt={1}
                mb={1}
                fontSize={"19px"}
              >
                Finest Rates, User friendly/Flexible interface, Unlimited
                resource inventory
              </Typography>
              <article className="article">
                We are giving you the chance to grow your agency business in the
                market, as you wi ll get the competitive air ticket rates of any
                international routes from us. Also, you can get unlimited hotel
                choosing option where you can choose the best hotels with
                affordable rates. Our user friendly interface will help you to
                confirm any service from us with shortest possible time.
              </article>
              <br />
              <br />
              <Box className="get-ticket-button">
                <a
                  href="https://www.facebook.com/FlyFarInternational/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                  rel="noreferrer"
                >
                  <Button className="explore-more-btn">Explore More</Button>
                </a>
              </Box>
            </Box>
          </Grid>
          <Grid item md={1} lg={3} className="hide-section">
            {/* <Box>
                <h1>Why Fly Far International?</h1>
              </Box> */}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={3} className="client-card">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Paper className="explore-card">
                <Box>
                  <Box className="c-card">120+</Box>Client
                </Box>
              </Paper>
              <Paper className="explore-card">
                <Box>
                  <Box className="c-card">12k+</Box> Direct Contract
                </Box>
              </Paper>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Paper className="explore-card">
                <Box>
                  <Box className="c-card">100k+</Box> Agent Parmanent
                </Box>
              </Paper>
              <Paper className="explore-card">
                <Box>
                  <Box className="c-card">220+</Box> Customers
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
      </section>
      <Footer />
    </Box>
  );
};

export default HomeComponent;
