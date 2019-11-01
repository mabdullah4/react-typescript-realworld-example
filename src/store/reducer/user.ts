import User from "../../model/IUser";
import Action from "../../model/IAction";

const initial: User = {
  username: "jake",
  bio: "I work at statefarm",
  image: "https://static.productionready.io/images/smiley-cyrus.jpg",
  following: false,
  email: "jake@jake.jake",
  token: "jwt.token.here"
};

const user = (state: User | object = initial, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default user;
