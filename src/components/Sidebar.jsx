import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { icon: <HomeIcon />, label: "Accueil" },
  { icon: <AppsIcon />, label: "Applications" },
  { icon: <AddIcon />, label: "Ajouter" },
  { icon: <GroupIcon />, label: "Groupe" },
  { icon: <BarChartIcon />, label: "Graphiques" },
  { icon: <SettingsIcon />, label: "Paramètres" },
];

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        width: 90,
        "& .MuiDrawer-paper": {
          width: 90,
        },
      }}
      variant="permanent"
    >
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <ListItemIcon sx={{ justifyContent: "center", minWidth: 0 }}>
                {item.icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
