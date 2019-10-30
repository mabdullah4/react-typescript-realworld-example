import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Setting from "./container/Setting";
import NewPost from "./container/NewPost";
import Profile from "./container/Profile";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/setting" component={Setting} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
