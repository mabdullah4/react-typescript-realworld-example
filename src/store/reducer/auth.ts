import IAction from "../../model/IAction";
import IAuth from "../../model/IAuth";

const initialState: IAuth = {
    isLoggedIn: false
};

const auth = (state: IAuth = initialState, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default auth;
