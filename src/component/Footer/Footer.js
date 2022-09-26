import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import logo from "../../image/dsh-img/WhiteLogoedit.png";
import payment from "../../image/payment.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import authorized from "../../image/footer/authorized.png";
import AtabNew from "../../image/footer/AtabNew.png";
import toabNew from "../../image/footer/ToabNew.png";
import pataNew from "../../image/footer/pataNew.png";
import bimanNew from "../../image/footer/BimanNew.png";
import "./Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box>
      <section className="footer-bgs">
        <Container className="footer-container" maxWidth="xl">
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4} lg={2.5}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box className="f-logo">
                      <img src={logo} alt="logo" />{" "}
                    </Box>
                    <Typography
                      color="#fff"
                      fontSize="15px"
                      pt="12px"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "200",
                        lineHeight: "23px",
                      }}
                    >
                      Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229.
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={12} md={12}>
                    <Box className="icon">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookSquare
                          style={{
                            fontSize: "30px",
                            color: "#fff",
                            marginRight: "10px",
                          }}
                        />
                      </a>

                      <a
                        href="https://bd.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin
                          style={{
                            fontSize: "30px",
                            color: "#fff",
                            marginRight: "10px",
                          }}
                        />
                      </a>

                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaYoutubeSquare
                          style={{
                            fontSize: "30px",
                            color: "#fff",
                            marginRight: "10px",
                          }}
                        />
                      </a>

                      <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaWhatsappSquare
                          style={{
                            fontSize: "30px",
                            color: "#fff",
                          }}
                        />
                      </a>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={1.5}
                className="f-parent-content"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box className="company-contenttc">
                      <h5 style={{ fontSize: "15px" }}>Company</h5>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box className="company-link">
                      <p>
                        <Link to="/paymentmethod">
                          <Button>Payment Method</Button>
                        </Link>
                      </p>
                      <p>
                        <Link to="/terms">
                          <Button>Terms and Condition</Button>
                        </Link>
                      </p>
                      <p>
                        <Link to="/privacy">
                          <Button>Privacy Policy</Button>
                        </Link>
                      </p>
                      <p>
                        <Link to="/refund">
                          <Button>Refund Policy</Button>
                        </Link>
                      </p>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={4.5}
                className="f-parent-content"
              >
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <Box className="company-contenttc">
                      <h5 style={{ fontSize: "15px" }}>Certifications</h5>
                    </Box>
                  </Grid>

                  <Grid
                    container
                    rowGap={1}
                    columnGap={{ xs: "15px", sm: "0px" }}
                  >
                    <Grid md={4}>
                      <Box>
                        <img src={authorized} />
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box>
                        <img src={AtabNew} />
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box>
                        <img src={toabNew} />
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box>
                        <img src={pataNew} />
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box>
                        <img src={bimanNew} />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                lg={3.5}
                className="f-parent-content subscribe-f"
              >
                <Box className="company-contentts">
                  <h5>Send us massage via Email</h5>
                  <p className="email-p">
                    It is a long established fact that a reader will be by
                    content.
                  </p>

                  <Box className="companay-centent-child">
                    <Box className="message-input">
                      <input type="text" placeholder="Enter your Email" />
                    </Box>
                    <Box>
                      <Box className="custom-footer-btns">
                        <Button variant="contained">SUBSCRIBE</Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <hr
            style={{
              margin: "auto",
              marginTop: "42px ",
              marginBottom: "20px",
              width: "100%",
            }}
            width="90%"
          />
          <Box className="payment-img">
            <img src={payment} width="100%" alt="payments" />
          </Box>

          <Box className="reserve-right">
            <p>
              &copy; {date} All Right Reserved By Fly Far International &
              Developed By{" "}
              <b style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgba(255, 255, 255, 0.95)",
                  }}
                  href="https://flyfar.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fly Far Tech
                </a>
              </b>
            </p>
          </Box>
        </Container>
      </section>
    </Box>
  );
};

export default Footer;
