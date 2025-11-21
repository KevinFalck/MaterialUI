import { Box, Typography, Paper } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import SummaryCard from "./SummaryCard";
import OrdersTable from "./OrdersTable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";

export default function DashboardContent() {
  const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yData = [2, 5.5, 2, 4, 8.5, 6, 3, 1.5, 3, 5];

  return (
    <Box sx={{ flex: 1, padding: 3, minHeight: "calc(100vh - 64px)" }}>
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

      <Paper sx={{ padding: 2, marginBottom: 3, width: "fit-content" }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Graphique (avec @mui/x-charts)
        </Typography>
        <LineChart
          width={600}
          height={400}
          xAxis={[{ data: xData, scaleType: "linear", min: 1, max: 10 }]}
          series={[
            {
              data: yData,
              color: "#26a69a",
              curve: "natural",
              showMark: true,
            },
          ]}
          yAxis={[{ min: 0, max: 10 }]}
        />
      </Paper>

      <OrdersTable />
    </Box>
  );
}
