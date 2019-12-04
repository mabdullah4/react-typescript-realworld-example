import ITags from "../../model/ITag";
import IAction from "../../model/IAction";

const initial: ITags = {
    tags: ["reactjs", "angularjs"]
};

const tags = (state: ITags = initial, action: IAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default tags;
