import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

import "./Header.css";
import { currentUserStore } from "../../stores/currentUserStore";

function Header(props) {
  const { logout } = currentUserStore();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <div id="header">
      <Link to="/posts" className="logo-link">
        <h2 id="logo">Impression</h2>
      </Link>
      <div className="header-links">
        <Link className="link" to="/create">
          New Post
        </Link>
        <Link className="link" to="/my-posts">
          My Posts
        </Link>
        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </div>
  );
}

export default Header;
