import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./container/Home";
import Register from "./container/Register";
import Login from "./container/Login";
import Setting from "./container/Setting";
import NewPost from "./container/NewPost";
import Profile from "./container/Profile";
import auth from "./store/reducer/auth";
import ProtectedRoute from "./ProtectedRoutes";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute>
                    <Route path="/setting" component={Setting} />
                    <Route path="/new-post" component={NewPost} />
                </ProtectedRoute>
                <Route path="/profile/:user/" component={Profile} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
