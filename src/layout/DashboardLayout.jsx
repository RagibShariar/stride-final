import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <div className="drawer lg:drawer-open max-w-7xl m-auto mt-12 rounded-lg">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ml-8 border-dashed border-2">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="text-center  mt-28 mb-6 p-2">
              <div className="w-24 h-24 rounded-full mx-auto  p-1 bg-gradient-to-r from-cyan-500 to-blue-500">
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <h1 className="mt-3 font-bold text-xl">{user?.displayName}</h1>
              <p className="text-md font-semibold">{user?.email}</p>
            </div>
            {/* Sidebar content here */}
            <li className="my-2">
              <NavLink
                to="profile"
                className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700"
              >
                <CgProfile size={30} className="mr-4" />
                View Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="add-product"
                className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700"
              >
                <IoMdAddCircleOutline size={30} className="mr-4" />
                Add Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
