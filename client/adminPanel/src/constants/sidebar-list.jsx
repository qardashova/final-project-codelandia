import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

export const sidebarItems = [
  {
    id: 1,
    title: "Users",
    icon: <GroupOutlinedIcon />,
    pathName: "/",
  },
  {
    id: 2,
    title: "Blogs",
    icon: <BookOutlinedIcon />,
    pathName: "/blogs",
  },
  {
    id: 3,
    title: "Products",
    icon: <ProductionQuantityLimitsOutlinedIcon />,
    pathName: "/products",
  },
  {
    id: 4,
    title: "FAQ",
    icon: <QuizOutlinedIcon />,
    pathName: "/faq",
  },
];
