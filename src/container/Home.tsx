import * as React from "react";
import Banner from "../components/Home/Banner";
import FeedTabs from "../components/Home/FeedTabs";
import ArticleList from "../components/Article/ArticleList";
import TagList from "../components/Tag/TagList";
import { Switch, Route } from "react-router";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <Banner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedTabs />
                        <Switch>
                            <Route exact path="" component={ArticleList} />
                            <Route path="/:user/feed" component={ArticleList} />
                        </Switch>
                    </div>
                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>
                            <TagList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
