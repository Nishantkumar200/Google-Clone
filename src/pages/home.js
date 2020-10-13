import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/icons/AccountCircle";
import Googlelogo from "../images/googl_logo.png";
import Search from "../components/Search";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="home_header">
            <div className="header_left">
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>
            </div>

            <div className="header_right">
              <Link to="/gmail">Gmail</Link>
              <Link to="/images">Images</Link>
              <AppsIcon />
              <Avatar />
            </div>
          </div>

          <div className="home_body">
            <img src={Googlelogo} alt="Google Logo" />
           <div className="searchbar_container">
           <Search hidebutton />
           </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
