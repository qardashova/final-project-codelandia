import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import { sidebarItems } from "../../constants/sidebar-list";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { logout } from "../../redux/reducers/authReducer";

const Sidebar = () => {
  const { userInfo } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Drawer
      sx={{
        width: "280px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "280px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography variant="h5" component="h4">
          {userInfo?.fullname}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {sidebarItems.map(({ id, title, icon, pathName }) => (
          <ListItem key={id} disablePadding onClick={() => navigate(pathName)}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => dispatch(logout())}>
            <ListItemIcon>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
