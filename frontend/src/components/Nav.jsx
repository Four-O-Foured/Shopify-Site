import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Nav = () => {
  const user = useSelector((state) => state.users.user);




  return (
    <nav className="text-xl flex justify-center gap-8 text-[#37353E] font-semibold p-7">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""
        }
        to="/"
      >
        Home
      </NavLink>

      {!user && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""
          }
          to="/login"
        >
          Login
        </NavLink>
      )}

      {user?.isAdmin && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""
          }
          to="/admin/createProduct"
        >
          Create Product
        </NavLink>
      )}

      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""
          }
          to="/user/userprofile"
        >
          Settings
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
