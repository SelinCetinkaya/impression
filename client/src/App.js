import "./App.css";
import Home from "./screens/Home/Home";
import Register from "./screens/Register/Register";
import Header from "./components/Header/Header";
import Posts from "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
import { Route } from "react-router-dom";
import { currentUserStore } from "./stores/currentUserStore";
import { useEffect } from "react";

function App() {
  const { currentUser, verify } = currentUserStore();

  useEffect(() => {
    verify();
  }, [verify]);
  return (
    <div className="App">
      <Header />
      {currentUser.id ? (
        <>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </>
      )}
    </div>
  );
}

export default App;
