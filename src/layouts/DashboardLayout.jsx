import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 bg-gray-800 text-white p-8">
        <ul className="space-y-4">
          <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            <Link to={"home"} className="block text-lg font-semibold">
              Dashboard
            </Link>
          </li>
          <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            <Link to={"all-products"} className="block text-lg font-semibold">
              All Products
            </Link>
          </li>
          <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            <Link to={"add-products"} className="block text-lg font-semibold">
              Add Product
            </Link>
          </li>
          <li className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
            <Link to={"/"} className="block text-lg font-semibold">
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 bg-gray-100 p-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
