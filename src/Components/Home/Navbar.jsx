import { FaBed, FaPlaneDeparture } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="flex">
            <div className="flex items-center mr-[30px]">
              <div className="mr-2">
                <FaPlaneDeparture />
              </div>
              <div>
                <p className="font-semibold">Find Flight</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
              <FaBed />
              </div>
              <div>
                <p className="font-semibold">Find Stays</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div>
            <img src="https://i.ibb.co/x7MhNb7/Group-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="navbar-end flex">
          <div className="mr-2 px-6 py-[10px] bg-white">
            <button>Login</button>
          </div>
          <div className="px-6 py-[10px] bg-white">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
