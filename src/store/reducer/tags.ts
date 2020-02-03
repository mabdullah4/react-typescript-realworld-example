import Tags from "../../model/ITag";
import Action from "../../model/IAction";

const initial: Tags = ["reactjs", "angularjs"];

const tags = (state: Tags = initial, action: Action): Tags => {
    switch (action.type) {
        default:
            return state;
    }
};

export default tags;
