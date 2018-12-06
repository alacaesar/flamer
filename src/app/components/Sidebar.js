import React, { Component } from "react";

/* regex türlçe karekter problemine çözüm */
const LOWERCASE = {
  charMap: {
    Ç: "c",
    Ö: "o",
    Ş: "s",
    İ: "i",
    I: "i",
    Ü: "u",
    Ğ: "g",
    ç: "c",
    ö: "o",
    ş: "s",
    ı: "i",
    ü: "u",
    ğ: "g"
  },
  change: k => {
    return k.replace(/\s+/g, "").toLowerCase();
  },
  get: val => {
    var _t = LOWERCASE,
      str_array = val.split("");
    for (var i = 0, len = str_array.length; i < len; i++)
      str_array[i] = _t.charMap[str_array[i]] || str_array[i];
    val = str_array.join("");
    return _t.change(val);
  }
};

class Main extends Component {
  state = {
    items: [],
    searchTerm: null,
    search: false
  };

  _filterItems = searchTerm => {
    const { items } = this.state;
    const filteredItems = [];
    items.forEach(item => {
      const parts = searchTerm.trim().split(/[ \-:]+/);
      const regex = new RegExp(LOWERCASE.get(`(${parts.join("|")})`), "ig");
      if (regex.test(LOWERCASE.get(item))) {
        filteredItems.push(item);
      }
    });
    return filteredItems;
  };

  _onSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  _onSearchToggle = () => {
    this.setState({
      search: !this.state.search,
      searchTerm: null
    });
  };

  componentDidMount() {
    this.setState({
      items: ["Product", "Products List", "Homepage", "Feed"]
    });
  }

  render() {
    let { items, searchTerm, search } = this.state;
    let _items = [];
    let filteredItems = searchTerm ? this._filterItems(searchTerm) : items;

    filteredItems.forEach((element, index) =>
      _items.push(<li key={"p-" + index}>{element}</li>)
    );

    let _head = search ? (
      <div className="mini-search">
        <input type="text" onChange={this._onSearchTerm.bind(this)} autoFocus />
        <button onClick={this._onSearchToggle}>
          <i className="icon close" />
        </button>
      </div>
    ) : (
      <h3>
        Models
        <button onClick={this._onSearchToggle}>
          <i className="icon search" />
        </button>
      </h3>
    );

    return (
      <div className="app-sidebar">
        <div className="inside">
          <div className="sidebar-head">{_head}</div>
          <div className="sidebar-body">
            <ul>{_items}</ul>
            <button className="default blue">
              Add Service <i className="icon plus-circle" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
