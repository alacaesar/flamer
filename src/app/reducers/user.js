// user state

const initialState = {
  items: "user"
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case "HELLO_WORLD":
      return {
        ...state,
        ...action.value
      };
    default:
      return state;
  }
}
