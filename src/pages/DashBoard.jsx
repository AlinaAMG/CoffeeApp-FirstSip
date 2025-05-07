import React, { useState } from "react";
import CoffeeTable from "../components/DataTable/CoffeeTable";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState("coffees");

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{
          width: collapsed ? "80px" : "250px",
          transition: "width 0.3s ease",
          overflowX: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <button className="btn btn-outline-light my-2 w-100" onClick={toggleSidebar}>
          {!collapsed ? <span className="ms-2"> Dashboard</span> : <i className="bi bi-list"></i>}
        </button>

        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="btn btn-outline-secondary my-1 w-100 d-flex align-items-start" onClick={() => setPage("coffees")}>
              {/* Icon column */}
              <div style={{ width: "30px" }} className="text-center">
                <i className="bi bi-cup-hot"></i>
              </div>

              {/* Text column (conditionally rendered) */}
              {!collapsed && <div className="flex-grow-1">Coffees</div>}
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-outline-secondary my-1 w-100 d-flex align-items-start" onClick={() => setPage("box")}>
              {/* Icon column */}
              <div style={{ width: "30px" }} className="text-center">
              <i className="bi bi-box-seam"></i>
              </div>

              {/* Text column (conditionally rendered) */}
              {!collapsed && <div className="flex-grow-1">Coffee Box</div>}
            </button>
          </li>
          <li className="nav-item">
          <button className="btn btn-outline-secondary my-1 w-100 d-flex align-items-start" onClick={() => setPage("users")}>
              {/* Icon column */}
              <div style={{ width: "30px" }} className="text-center">
              <i className="bi bi-person"></i>
              </div>

              {/* Text column (conditionally rendered) */}
              {!collapsed && <div className="flex-grow-1">Users</div>}
            </button>
  
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Page Content */}
        <div className="p-1 m-0">
          {page === "coffees" && <CoffeeTable />}
          {page === "box" && <div>📦 Coffee Box content coming soon...</div>}
          {page === "users" && <div>👤 Users content coming soon...</div>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
