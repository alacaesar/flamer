// project state

const initialState = {
  items: [
    {
      name: "Products",
      type: "null",
      children: [
        {
          name: "name",
          type: "string"
        },
        {
          name: "barcode",
          type: "number"
        },
        {
          name: "sizes",
          type: "array",
          children: [
            {
              name: "title",
              type: "string"
            },
            {
              name: "short-code",
              type: "number"
            }
          ]
        },
        {
          name: "price",
          type: "number"
        }
      ]
    }
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
