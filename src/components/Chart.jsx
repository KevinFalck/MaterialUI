import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Chart() {
  const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yData = [2, 5.5, 2, 4, 8.5, 6, 3, 1.5, 3, 5];

  return (
    <Box sx={{ marginBottom: 3, width: "fit-content" }}>
      <Typography
        variant="h2"
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: 20 }}
      >
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
    </Box>
  );
}
