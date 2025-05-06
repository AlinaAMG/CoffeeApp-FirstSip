import React, { useState } from 'react';
import CoffeeTableWithModal from '../components/DataTable/CoffeeTableWithModal';

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 vh-100 ${collapsed ? 'd-none d-md-block' : 'd-block'}`}
        style={{ width: '250px' }}
      >
        <h4>Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Coffees</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Coffee Box</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
          {/* Page Content */}
        <div className="p-1 m-0">
           <CoffeeTableWithModal />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
