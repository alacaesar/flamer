import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    searchTerm: null,
    search: false
  };

  _filterItems = searchTerm => {
    let { services } = this.props.project;
    const filteredItems = [];
    services.forEach(item => {
      const parts = searchTerm.trim().split(/[ \-:]+/);
      const regex = new RegExp(LOWERCASE.get(`(${parts.join("|")})`), "ig");
      if (regex.test(LOWERCASE.get(item.name))) {
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
    console.log("toggle");
    this.setState({
      search: !this.state.search,
      searchTerm: null
    });
  };

  render() {
    let { searchTerm, search } = this.state;
    let { services } = this.props.project;
    let _items = [];
    let filteredItems = searchTerm ? this._filterItems(searchTerm) : services;

    filteredItems.forEach((element, index) =>
      _items.push(
        <li key={"p-" + index}>
          <Link to={element.slug}>{element.name}</Link>
        </li>
      )
    );

    let _head = search ? (
      <div className="mini-search">
        <input
          type="text"
          onChange={this._onSearchTerm.bind(this)}
          autoFocus
          onBlur={this._onSearchToggle}
        />
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

// filter state
function mapStateToProps(state) {
  return state.project;
}

export default connect(mapStateToProps)(Main);
