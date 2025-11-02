import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="text-xl flex justify-center gap-8 text-[#37353E] font-semibold p-7">
        <NavLink className={({ isActive }) => isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""} to="/products">Products</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-[#37353E] border-b-2 border-[#37353E]" : ""} to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav