import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const orders = [
  { id: 1, nom: "Nom 1", date: "24-04-2025", statut: "En cours" },
  { id: 2, nom: "Nom 2", date: "16-04-2025", statut: "Payée" },
  { id: 3, nom: "Nom 3", date: "10-04-2025", statut: "Terminée" },
  { id: 4, nom: "Nom 5", date: "02-04-2025", statut: "Terminée" },
];

export default function OrdersTable() {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Dernières commandes
      </Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: "white" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.nom}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.statut}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
