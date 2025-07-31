import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col justify-start h-screen bg-gray-100">
      <div className="flex border-b border-b-gray-300 h-14">
        <div className="p-2 bg-gray-600 hover:bg-gray-800 w-1/6 flex items-center justify-center m-2 rounded-lg">
          <i className="bi bi-basket-fill text-white cursor-pointer"></i>
        </div>
        <div className="flex flex-col p-1 justify-center">
          <div className="text-xs font-bold">TEMAAM PRACTICE</div>
          <div className="text-xs text-gray-600">Admin Panel</div>
        </div>
      </div>

      <div className="p-2 flex flex-col gap-2 overflow-auto">
        <span className="text-xs m-2">Main Menu</span>
        <ul className="flex gap-2 flex-col">
          <li className="flex justify-between p-1.5 items-center gap-2 text-sl font-medium bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer">
            <Link to="/dashboard" className="flex gap-2 w-full">
              <span><i className="bi bi-house"></i></span>
              <h5>Dashboard</h5>
            </Link>
            <span className="bg-gray-300 rounded-lg text-sl p-1.6 h-5 w-5 flex items-center justify-center">5</span>
          </li>
          <li className="flex p-1.5 gap-2 text-sl font-medium bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer">
            <Link to="/products" className="flex gap-2 w-full">
              <span><i className="bi bi-box"></i></span>
              <h5>Products</h5>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
