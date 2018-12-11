// general state

const initialState = {
  items: "general",
  projects: [
    { name: "Springbreak", slug: "springbreak", services: 3 },
    { name: "Stripes", slug: "stripes", services: 12 },
    { name: "Flames App", slug: "flames-app", services: 5 }
  ]
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
