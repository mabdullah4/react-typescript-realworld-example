import Tags from "../../model/Tag";
import Action from "../../model/Action";

const initial: Tags = {
  tags: ["reactjs", "angularjs"]
};

const tags = (state: Tags = initial, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tags;
