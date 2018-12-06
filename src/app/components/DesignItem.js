import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { SelectBox } from "../UI";

const Main = SortableElement(({ value }) => {
  let tree = [];
  let select;
  let rootClass = " root";

  if (!value.root) {
    rootClass = "";

    let options = [
      { title: "Select", value: "0" },
      { title: "String", value: "string" },
      { title: "Array", value: "array" },
      { title: "Integer", value: "integer" },
      { title: "Boolean", value: "boolean" }
    ];

    select = (
      <SelectBox
        options={options}
        selected={value.attribute.data_type}
        callback={val => {
          console.log(val);
        }}
      />
    );

    let k = value.n;
    while (k--) {
      tree.push(<span className={"tree branch-" + k} key={k + "item"} />);
    }
  }

  return (
    <li className={"design-item" + rootClass}>
      {tree}
      <div>
        <input type="text" value={value.title} onChange={() => {}} />
        {select}
        <button>
          <i className="icon plus-circle" />
        </button>
        <button>
          <i className="icon ellipses" />
        </button>
      </div>
    </li>
  );
});

export default Main;
