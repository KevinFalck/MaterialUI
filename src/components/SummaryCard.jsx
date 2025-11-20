import { Card, CardContent, Box, Typography } from "@mui/material";

export default function SummaryCard({ icon, value, label }) {
  return (
    <Card sx={{ flex: 1, minWidth: 200, backgroundColor: "white" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ fontSize: 40 }}>{icon}</Box>
          <Box>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
