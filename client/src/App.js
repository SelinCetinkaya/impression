import "./App.css";
import Home from "./screens/Home/Home";
import Register from "./screens/Register/Register";
import Header from "./components/Header/Header";
import Posts from "./screens/Posts/Posts";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </div>
  );
}

export default App;
