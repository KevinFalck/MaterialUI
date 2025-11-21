import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Header />
      <Sidebar />
      <Box sx={{ flexGrow: 1, marginLeft: "64px", marginTop: "64px" }}>
        <DashboardContent />
      </Box>
    </Box>
  );
}

export default App;
