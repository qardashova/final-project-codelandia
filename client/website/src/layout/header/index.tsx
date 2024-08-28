import MenuItem from "../../components/menuItem";
import "./style.scss";

interface HeaderTypes {
  bgImage?: string;
}

const Header = ({ bgImage }: HeaderTypes) => {
  return (
    <header style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="navigation">
        <img
          src="https://colora-1.myshopify.com/cdn/shop/files/logo.png?v=1613157349"
          alt=""
        />
        <nav>
          <ul className="nav-container">
            <MenuItem label="Home" />
            <MenuItem label="Contact" />
            <MenuItem label="Blog" />
            <MenuItem label="Pages" list={["Login", "Register"]} />
          </ul>
        </nav>
      </div>
      <div className="user">E</div>
    </header>
  );
};

export default Header;
