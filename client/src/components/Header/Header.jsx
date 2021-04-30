import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

import "./Header.css";
import { useCurrentUserStore } from "../../stores/currentUserStore";

function Header(props) {
  const { logout, currentUser } = useCurrentUserStore();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };
  return (
    <div id="header">
      {currentUser.id ? (
        <>
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
        </>
      ) : (
        <Link to="/" className="logo-link">
          <h2 id="logo">Impression</h2>
        </Link>
      )}
    </div>
  );
}

export default Header;
