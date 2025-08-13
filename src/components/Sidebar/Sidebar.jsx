import React from "react";
import { Link } from "react-router-dom";
import { assests } from "../../assets/assests";
function Sidebar({sidebarVisible}) {
  return (
    <div>
      <div className={`border-end bg-white ${sidebarVisible ? '':'d-none'}`} id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <img src={assests.logo} height={40} width={40}></img>
        </div>
        <div className="list-group list-group-flush">
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/add"
          >
           <i className="bi bi-plus-circle me-2"></i> Add Food
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/list"
          >
           <i className="bi bi-list-ul me-2"></i> List Foods
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/orders"
          >
            <i className="bi bi-cart me-2"></i> Orders
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
