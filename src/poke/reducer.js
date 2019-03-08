const initial = {
  type: "SEARCH",
  name: "pikachu"
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case "SEARCH":
      console.log("search called", action.name);
      return action.name;
    default:
      return state.name;
  }
}
