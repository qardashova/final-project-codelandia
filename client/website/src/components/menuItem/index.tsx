import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
interface MenuItemTypes {
  label: string;
  list?: string[];
  link?: string;
}

const MenuItem = ({ label, list, link }: MenuItemTypes) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMouseEnter = () => setOpenMenu(true);
  const handleMouseLeave = () => setOpenMenu(false);

  return (
    <div className="menu-item">
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {label}
        <Link to={link} />
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
