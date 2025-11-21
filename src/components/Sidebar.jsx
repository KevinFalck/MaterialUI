import { Drawer, Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 100;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "100vh",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 2,
          gap: 1,
        }}
      >
        <IconButton sx={{ color: "grey.600" }}>
          <HomeIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }}>
          <AppsIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }}>
          <AddIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }}>
          <GroupIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }}>
          <BarChartIcon />
        </IconButton>
        <IconButton sx={{ color: "grey.600" }}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
}
