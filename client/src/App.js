import "./App.css";
import Home from "./screens/Home/Home";
import Register from "./screens/Register/Register";
import Header from "./components/Header/Header";
import Posts from "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
import PostDetails from "./screens/PostDetails/PostDetails";
import { Route } from "react-router-dom";
import { useCurrentUserStore } from "./stores/currentUserStore";
import { usePostsStore } from "./stores/postsStore";
import { useEffect } from "react";

function App() {
  const { currentUser, verify } = useCurrentUserStore();
  const { fetchPosts, clearPosts } = usePostsStore();

  useEffect(() => {
    console.log("what", currentUser);
    if (currentUser.id) {
      fetchPosts();
    } else {
      clearPosts();
    }
  }, [fetchPosts, currentUser, clearPosts]);

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <div className="App">
      <Header />
      {currentUser.id ? (
        <>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/my-posts">
            <Posts isMyPosts />
          </Route>
          <Route path="/create">
            <CreatePost />
          </Route>
          <Route path="/posts/:id">
            <PostDetails />
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
