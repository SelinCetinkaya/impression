import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Header.css";

function Header(props) {
  return (
    <div id="header">
      <h2 id="logo">Impression</h2>
      <div class="header-links">
        <Link class="link" to="/create">
          New Post
        </Link>
        <Link class="link" to="/my-posts">
          My Posts
        </Link>
        <Button>Log out</Button>
      </div>
    </div>
  );
}

export default Header;
