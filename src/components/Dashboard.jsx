import { Box } from "@mui/material";
import SummaryCard from "./SummaryCard";
import Chart from "./Chart";
import OrdersTable from "./OrdersTable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}

