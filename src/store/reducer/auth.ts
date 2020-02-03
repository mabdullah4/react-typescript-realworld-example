import Action from "../../model/IAction";
import IAuth from "../../model/IAuth";

const initial: IAuth = {
    isLoggedIn: false
};

const user = (state: IAuth = initial, action: Action): IAuth => {
    switch (action.type) {
        default:
            return state;
    }
};

export default user;
