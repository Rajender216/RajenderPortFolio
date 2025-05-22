import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Pcontext } from "../../context/Pcontext";
import { FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userLoggedIn, navigate } = useContext(Pcontext);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black shadow-lg border-b border-gray-700 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-teal-400 cursor-pointer transition-all duration-300 hover:text-purple-500 hover:scale-105">
                RC
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLinks />
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center">
              {userLoggedIn ? <ProfileDropdown /> : <ContactButton />}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-teal-400 hover:text-purple-500 focus:outline-none transition-colors duration-300"
              >
                {isOpen ? <ImCross size={25} /> : <TiThMenu size={25} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-2xl border-l border-gray-700`}
      >
        <div className="flex flex-col items-start p-6 space-y-8 mt-16">
          <NavLinks mobile setIsOpen={setIsOpen} />
          {userLoggedIn ? (
            <ProfileDropdown mobile setIsOpen={setIsOpen} />
          ) : (
            <ContactButton mobile setIsOpen={setIsOpen} />
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </>
  );
};

const NavLinks = ({ mobile, setIsOpen }) => {
  const commonStyles =
    "text-teal-400 hover:text-purple-500 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:font-bold relative group";

  const handleClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <>
      {["home", "projects", "skills", "about", "contact"].map((item) => (
        <Link
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`${commonStyles} ${mobile ? "text-xl" : ""}`}
          activeClass="text-purple-500 font-bold"
          onClick={handleClick}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
          )}
        </Link>
      ))}
    </>
  );
};

const ContactButton = ({ mobile }) => {
  return (
    <a
      href="/register"
      className={`relative inline-flex items-center px-6 py-2 border border-green-500 text-sm font-medium rounded-md text-gray-100 bg-transparent hover:bg-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] overflow-hidden group ${
        mobile ? "mt-4 text-base" : ""
      }`}
    >
      <span className="relative z-10">Get Started</span>
      <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </a>
  );
};

const ProfileDropdown = ({ mobile, setIsOpen }) => {
  const [open, setOpen] = useState(false);

  const commonStyles =
    "px-4 py-2 flex items-center gap-2 hover:bg-purple-600 hover:text-white cursor-pointer transition-all";

  const handleLogout = async () => {
    // Clear token / localStorage and refresh or redirect
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);

      if (response.data.success) {
        localStorage.removeItem("user");
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div
      className={`relative ${mobile ? "w-full" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`flex items-center gap-2 text-teal-400 hover:text-purple-500 transition duration-300 ${
          mobile ? "text-xl mt-2" : "text-2xl"
        }`}
      >
        <FaUserCircle />
      </button>

      {open && (
        <div
          className={`absolute ${
            mobile ? "relative mt-2 w-full" : "right-0 mt-2"
          } bg-black border border-gray-700 shadow-lg rounded-md z-50`}
        >
          <div
            className={commonStyles}
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
              // Navigate to profile page
              window.location.href = "/profile";
            }}
          >
            <FaUser />
            <span>Profile</span>
          </div>
          <div className={commonStyles} onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
