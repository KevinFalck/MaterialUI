import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary.main",
        zIndex: 1300,
        marginLeft: "64px",
        width: "calc(100% - 64px)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          Tableau de bord
        </Typography>
        <IconButton color="inherit" sx={{ color: "white" }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
