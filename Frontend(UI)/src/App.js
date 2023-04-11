/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.css";
import logo from "../src/images/logo.png";
import search1 from "../src/images/search1.png";
import search2 from "../src/images/search2.png";
import search3 from "../src/images/search3.png";
import search4 from "../src/images/search4.png";
import "./App.css";
import { Search, Linkedin, Facebook, Instagram, Twitter } from "react-feather";
import { Card } from "react-bootstrap";
import { Tab, Tabs, InputAdornment, TextField } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <a className="menu-item">HomePage</a>
          <a className="menu-name">All Venues</a>
          <a className="menu-name">Our Mission</a>
          <a className="menu-name">Contact Us</a>
        </div>
        <div>
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>
      <body className="body">
        <div className="section-1">
          {/* <img className="section1-image" src={new1}/> */}
          <div className="main-content">
            <div className="content">
              <h6>Game on:</h6>
              <h1 className="content-headind">
                Book Your Next Sports <br /> Adventure Today!
              </h1>
              <h5 className="content-h4">
                Find new training partners and opponents
                <br /> for your favorite sports
              </h5>
              <button className="findvenue-button">Find Venue</button>
            </div>
            <div className="content-image">{/* <img src={low} /> */}</div>
          </div>
        </div>
        <div className="section-2">
          <div className="bg-section2">
            <div className="section2-container">
              <h3 className="section2-title">
                Book Your Dream Venue Today: Find, Reserve, and Play with Ease!
              </h3>
              <div className="search-group">
                <div className="search-input">
                  <TextField
                    id="input-with-icon-textfield"
                    label=""
                    fullWidth="true"
                    placeholder="Venue Type"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </div>
                <div className="search-date">
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Date"
                    defaultValue="EUR"
                    // helperText="Please select your currency"
                    variant="standard"
                    fullWidth="true"
                  >
                    {/* {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                  </TextField>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Location"
                    defaultValue="EUR"
                    // helperText="Please select your currency"
                    variant="standard"
                    fullWidth="true"
                  >
                    {/* {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))} */}
                  </TextField>
                </div>
                <button className="search-button">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div className="section3-container">
            <Tabs
              // value={value}
              // onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab style={{ color: "white" }} label="All" />
              <Tab style={{ color: "white" }} label="Basketball" />
              <Tab style={{ color: "white" }} label="Tennis" />
              <Tab style={{ color: "white" }} label="Ping Pong" />
              <Tab style={{ color: "white" }} label="soccer" />
              <Tab style={{ color: "white" }} label="Rugby" />
              <Tab style={{ color: "white" }} label="Golf" />
              <Tab style={{ color: "white" }} label="Swimming" />
              <Tab style={{ color: "white" }} label="Baseball" />
              <Tab style={{ color: "white" }} label="Chess" />
            </Tabs>
          </div>
        </div>
        <div className="section-4">
          <div className="section4-container">
            <Card className="search-card">
              <img style={{ marginBottom: "10px" }} src={search1} />
              <h6>Victory Park Sports Complex</h6>
              <h7 style={{ color: "#8b8d84" }}>Golf</h7>
              <h7 style={{ color: "#8b8d84" }}>Downtown</h7>
              <p>$20 hour</p>
            </Card>

            <Card className="search-card">
              <img style={{ marginBottom: "10px" }} src={search2} />
              <h6>Spin City Tennis Club</h6>
              <h7 style={{ color: "#8b8d84" }}>Tennis</h7>
              <h7 style={{ color: "#8b8d84" }}>Eastside</h7>
              <p>$45 hour</p>
            </Card>
            <Card className="search-card">
              <img style={{ marginBottom: "10px" }} src={search4} />
              <h6>NetBusters Basketball Arena</h6>
              <h7 style={{ color: "#8b8d84" }}>Basketball / Rubgy</h7>
              <h7 style={{ color: "#8b8d84" }}>West End</h7>
              <p>$25 hour</p>
            </Card>
            <Card className="search-card">
              <img style={{ marginBottom: "10px" }} src={search3} />
              <h6>Field of Dreams Soccer Fields</h6>
              <h7 style={{ color: "#8b8d84" }}>Soccer / Basketball</h7>
              <h7 style={{ color: "#8b8d84" }}>North Shore</h7>
              <p>$42 hour</p>
            </Card>
          </div>
        </div>
        <div className="section-5">
          <div className="section5-container">
            <div className="secion5-part1">
              {" "}
              <img src={logo} className="bottom-logo" alt="logo" />
              <h6 style={{ color: "white", marginTop: "10px" }}>
                Book, Play, connect - Elevate Your Game!
              </h6>
              <div className="social-container">
                <div className="social-link">
                  <Linkedin className="social-logo" />
                </div>
                <div className="social-link">
                  <Facebook />
                </div>
                <div className="social-link">
                  <Instagram />
                </div>
                <div className="social-link">
                  <Twitter />
                </div>
              </div>
            </div>
            <div>
              <h6 style={{ color: "white" }}>HomePage</h6>
              <h6 style={{ color: "white", marginTop: "30px" }}>All Venues</h6>
              <h6 style={{ color: "white", marginTop: "30px" }}>Our Mission</h6>
              <h6 style={{ color: "white", marginTop: "30px" }}>Contact Us</h6>
            </div>
            <div className="subscribtion-box">
              <h6 style={{ color: "white", fontSize: "15px" }}>
                We’ll send you a nice letter once per week. No spam, we promise.
              </h6>
              <div className="email-box">
                <div className="email-text">
                  {/* <TextField
                    id="email"
                    placeholder="Enter Your Email"
                    fullWidth="true"
                    
                  /> */}
                  <input
                    className="input-email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <button className="signup-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-container">
            <p style={{ color: "#8b8d84", fontSize: "15px" }}>
              Copyright © 2023 SportVen LLC. All rights Reserved.
            </p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
