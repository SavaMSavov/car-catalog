import { NavLink } from "react-router-dom";

const CategoryNavigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/categories/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/categories/3-Series">3 Series</NavLink>
        </li>
        <li>
          <NavLink to="/categories/5-Series">5 Series</NavLink>
        </li>
        <li>
          <NavLink to="/categories/6-Series">6 Series</NavLink>
        </li>
        <li>
          <NavLink to="/categories/7-Series">7 Series</NavLink>
        </li>
        <li>
          <NavLink to="/categories/Other">Other</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
