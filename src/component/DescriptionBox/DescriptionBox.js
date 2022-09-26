import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import line from "../../image/line.png";
import Visac from "../../image/Visac.png";
import covids from "../../image/covids.png";
import air from "../../image/air.png";
import travels from "../../image/travels.png";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <Box>
      <section>
        <Box className="containers descriptionBox-card">
          <Grid container spacing={6} marginTop="4rem" marginBottom="4rem">
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Box className="visa-card1">
                <Box className="visaImg1">
                  <img src={Visac} alt="visa1" />
                </Box>

                <Box className="visa-cont1">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "16px",
                        md: "14px",
                        lg: "16px",
                        xl: "19px",
                      },
                      fontWeight: 500,
                      color: "#dc143c",
                    }}
                  >
                    Smooth Booking Platform
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "11px",
                        md: "11px",
                        lg: "11px",
                        xl: "13px",
                      },
                      color: "#003566",
                    }}
                    style={{ textAlign: "justify" }}
                  >
                    Long years experience in this trade helps us in making a
                    convenient booking platform for our valuable
                    agents/partners. You can get easy access to worldwide
                    suppliers and services just putting your simple details on
                    our platform.
                  </Typography>
                </Box>
              </Box>
              {/* </Card> */}
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3}>
              {/* <Card
                style={{
                  borderRadius: "5px",
                }}
              > */}
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={travels} alt="visa" />
                </Box>
                <Box className="visa-cont">
                  {/* <h4>Professional Travel Assistance</h4> */}
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "16px",
                        md: "14px",
                        lg: "16px",
                        xl: "19px",
                      },
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    Professional Travel Assistance
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "11px",
                        md: "11px",
                        lg: "11px",
                        xl: "13px",
                      },
                      color: "#DAD6D6",
                    }}
                    style={{ textAlign: "justify" }}
                  >
                    You can consult with our concerned support team for any kind
                    of travel related advice or consultancy. Our support team
                    will ensure you the best possible travel solutions which
                    will help you to deal with your customer with utmost care.
                  </Typography>
                </Box>
              </Box>
              {/* </Card> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              {/* <Card style={{ borderRadius: "5px" }}> */}
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={air} alt="visa" />
                </Box>

                <Box className="visa-cont">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "16px",
                        md: "14px",
                        lg: "16px",
                        xl: "19px",
                      },
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    User friendly Customizable UI
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "11px",
                        md: "11px",
                        lg: "11px",
                        xl: "13px",
                      },
                      color: "#DAD6D6",
                    }}
                    style={{ textAlign: "justify" }}
                  >
                    We are offering a customizable user interface where you can
                    experience our smooth B2B portal & our dashboard where the
                    access of world class inventories will be at your hand.
                    care.
                  </Typography>
                </Box>
              </Box>
              {/* </Card> */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              {/* <Card style={{ borderRadius: "5px" }}> */}
              <Box className="visa-card">
                <Box className="visaImg">
                  <img src={covids} alt="visa" />
                </Box>
                <Box className="visa-cont">
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "16px",
                        md: "14px",
                        lg: "16px",
                        xl: "19px",
                      },
                      fontWeight: 500,
                      color: "#fff",
                    }}
                  >
                    24*7 Online & Offline Services
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "11px",
                        md: "11px",
                        lg: "11px",
                        xl: "13px",
                      },
                      color: "#DAD6D6",
                    }}
                    style={{ textAlign: "justify" }}
                  >
                    Get our 24*7 Online & Offline Service assistance in
                    providing excellent service to your valuable clients. Our
                    experts are always there to help you grow your business.
                    hand. care.
                  </Typography>
                </Box>
              </Box>
              {/* </Card> */}
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className="new-explore-more-body descriptionBox">
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            mt: { xs: 12, sm: 12, md: 12 },
          }}
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
                <Button className="explore-more-btn">Explore More</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={1} lg={2} className="hide-section"></Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} className="client-card">
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
    </Box>
  );
};

export default DescriptionBox;
