// project state

const initialState = {
  project: {
    name: "Spring Break",
    services: [
      { name: "Product", slug: "product" },
      { name: "Products List", slug: "product-list" },
      { name: "Feed", slug: "feed" },
      { name: "Homepage", slug: "homepage" }
    ],
    service: {
      slug: "product",
      design: {
        name: { title: "name", attribute: { data_type: "string" } },
        barcode: { title: "barcode", attribute: { data_type: "string" } },
        price: { title: "price", attribute: { data_type: "integer" } },
        brand_id: { title: "brand_id", attribute: { data_type: "string" } }
      }
    }
  }
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
