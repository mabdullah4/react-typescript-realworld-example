import User from "../../model/IUser";
import Action from "../../model/IAction";

const user = (state: User, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default user;
