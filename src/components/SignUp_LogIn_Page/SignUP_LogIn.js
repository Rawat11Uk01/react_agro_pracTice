import React from "react";
import "./SignUP_LogIn.css";
import heroImg from "../../assets/Images/Rectangle 7227.png";
import smallImg from "../../assets/Images/small.png";
import mediumImg from "../../assets/Images/MacBook Air M2 - 1.png";
import { Button, Grid, Typography } from "@mui/material";

const SignUP_LogIn = () => {
  return (
    <div className="Log_in_container">
      <Grid container className="form_card" rowGap="2rem" direction="column">
        <Grid item xs={12}>
          <Typography className="form_heading">Welcome</Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid container>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <label className="form_Typography">Email</label>
                  <input className="form_input" type="email" />
                </Grid>
                <Grid
                  container
                  direction="column"
                  style={{ marginTop: "1rem" }}
                >
                  <label className="form_Typography">Password</label>
                  <input className="form_input" type="text" />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: ".5rem" }}>
                <Typography className="form_subheading txtAlignEnd">
                  Forgot Password?
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "2rem" }}>
                <Button className="log_in_btn">Login</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12}>
          <Typography className="form_subheading txtAlignCenter">
            Don't have account?<span className="sign_up">Sign up</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUP_LogIn;
