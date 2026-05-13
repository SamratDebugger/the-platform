import { Link } from "react-router";
import Menu from "./Menu";
import { CiSearch } from "react-icons/ci";
import NavModal from "./NavModal";
import { useRef } from "react";

export default function Nav() {
  const searchRef = useRef();
  return (
    <>
      <NavModal ref={searchRef} />
      <div className="navbar max-md:gap-5 bg-base-100 shadow-sm max-w-360 mx-auto px-5">
        <div className="navbar-start max-md:w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Menu />
            </ul>
          </div>
          <Link to="/" className="">
            <img
              className="max-w-25"
              src="/assets/images/logo.webp"
              alt="logo"
            />
          </Link>
          <ul className="menu menu-horizontal px-1 max-md:hidden ml-10">
            <Menu />
          </ul>
        </div>

        <div className="navbar-end gap-5 max-md:w-auto max-md:flex-1">
          <label className="input rounded-full focus:outline-0 focus-within:outline-0 w-full max-xs:hidden">
            <input type="search" required placeholder="Search" />
            <CiSearch />
          </label>
          <button
            onClick={() => searchRef.current.showModal()}
            className="btn btn-circle xs:hidden"
          >
            <CiSearch />
          </button>
          <a className="btn rounded-full ">Account</a>
        </div>
      </div>
    </>
  );
}
