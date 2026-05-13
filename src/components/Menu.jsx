import { NavLink } from "react-router";

export default function Menu() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="lifestyle">Lifestyle</NavLink>
      </li>
    </>
  );
}
