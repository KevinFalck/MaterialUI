import { Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import Chart from "./components/Chart";
import OrdersTable from "./components/OrdersTable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
          <SummaryCard
            icon={<AttachMoneyIcon sx={{ fontSize: 40 }} />}
            value="1000"
            label="Ventes"
          />
          <SummaryCard
            icon={<GroupIcon sx={{ fontSize: 40 }} />}
            value="300"
            label="Clients"
          />
          <SummaryCard
            icon={<MessageIcon sx={{ fontSize: 40 }} />}
            value="5"
            label="Messages"
          />
        </Box>

        <Chart />

        <OrdersTable />
      </Box>
    </Box>
  );
}

export default App;
