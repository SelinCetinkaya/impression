import React from "react";
import "./Home.css";
import SignIn from "../../components/SignIn/SignIn";

function Home(props) {
  return (
    <div>
      <h1>Impression</h1>
      <h3>Share photos and get connected.</h3>
      <SignIn />
    </div>
  );
}

export default Home;
