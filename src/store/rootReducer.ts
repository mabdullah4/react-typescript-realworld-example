import { combineReducers } from "redux";

import articles from "./reducer/articles";
import tags from "./reducer/tags";
import user from "./reducer/user";

export default combineReducers({ articles, tags, user });
