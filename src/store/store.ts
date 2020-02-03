import { createStore } from "redux";

import rootReducer from "./rootReducer";

export type IStore = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
