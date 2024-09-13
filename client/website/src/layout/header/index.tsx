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
            <MenuItem label="Home" link=""/>
            <MenuItem label="Catalog" link="/catalog"/>
            <MenuItem label="Contact" link=""/>
            <MenuItem label="Blog" link=""/>
            <MenuItem label="Pages" list={["Login", "Register"]} link=""/>
          </ul>
        </nav>
      </div>
      <div className="user">E</div>
    </header>
  );
};

export default Header;
