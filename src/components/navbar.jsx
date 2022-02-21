import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
      const {totalCounters, totalProducts}=this.props;
    return (
      <nav class="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
            <span className="badge badge-pill badge-secondary">{totalProducts}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
