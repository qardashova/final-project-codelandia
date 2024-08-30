import { useLocation, Link } from "react-router-dom";
import data from "../../../breadcrumbs.json";
import "./style.scss";

type breadCrumbsProps = {
  name?: string;
};

const BreadCrumbs = ({ name }: breadCrumbsProps) => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb: string) => crumb !== "")
    .map((crumb: string) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          {/* @ts-ignore */}
          {!isNaN(crumb) ? <Link to={currentLink}>{data[`${name}`]}</Link> : <Link to={currentLink}>{data[`${crumb}`]}</Link>}
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <div className="crumb">
        <Link to={"/"}>Home</Link>
      </div>
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;
