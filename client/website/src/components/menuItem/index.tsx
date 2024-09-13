import { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
interface MenuItemTypes {
  label: string;
  list?: string[];
  link: string;
}

const MenuItem = ({ label, list, link }: MenuItemTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMouseEnter = () => setOpenMenu(true);
  const handleMouseLeave = () => setOpenMenu(false);

  return (
    <div className="menu-item">
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavLink
          to={link}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {label}
        </NavLink>
      </li>
      {openMenu && list && (
        <ul
          className="list"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {list.map((link) => {
            return <MenuItem label={link} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
