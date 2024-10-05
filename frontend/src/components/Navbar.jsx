import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-400 items-center sapce-x-2 flex"
        >
          E-Commerce
        </Link>

        <nav className="flex flex-wrap items-center gap-4">
          <Link
            to={"/"}
            className="text-gray-300 font-medium hover:text-emerald-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>

          {user && (
            <Link
              to={"/cart"}
              className="relative group text-gray-300 transition duration-300 ease-in-out"
            >
              <ShoppingCart
                className="inline-block mr-1 group-hover:text-emerald-400"
                size={20}
              />
              <span className="hidden sm:inline group-hover:text-emerald-400 font-medium">
                Cart
              </span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -left-2 bg-emerald-500 rounded-full px-2 py-0.5 text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          )}

          {isAdmin && (
            <Link
              className="bg-emerald-700 hover:bg-emerald-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
              to={"/secret-dashboard"}
            >
              <Lock className="inline-block mr-1" size={20} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          )}

          {user ? (
            <button
              className="bg-gray-700 hover:bg-gray-500 text-white px-3 py-1 rounded-md flex items-center transition duration-300 ease-in-out"
              onClick={logout}
            >
              <LogOut size={20} />
              <span className="hidden sm:inline ml-2">Log Out</span>
            </button>
          ) : (
            <>
              <Link
                to={"/signup"}
                className="bg-emerald-700 hover:bg-emerald-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
              >
                <UserPlus className="mr-2" size={20} />
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="bg-gray-700 hover:bg-gray-500 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
              >
                <LogIn className="mr-2" size={20} />
                Log In
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
