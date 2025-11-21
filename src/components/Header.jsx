import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 90;

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Tableau de bord
        </Typography>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
