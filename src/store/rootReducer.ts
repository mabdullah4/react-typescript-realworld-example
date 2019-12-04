import { combineReducers } from "redux";

import articles from "./reducer/articles";
import tags from "./reducer/tags";
import auth from "./reducer/auth";

export default combineReducers({ articles, tags, auth });
