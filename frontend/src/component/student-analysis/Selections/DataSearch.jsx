import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "18 (1200 чел.)",
    "Тюмень (1337 чел.)",
    "0 (9999 чел)",
    "ПТУ (99999 чел)",
    "Информационные системы и технологии (1 чел.)"
  ),
  createData(
    "22 (228 чел.)",
    "Сургут (1 чел.)",
    "-1 (чееел)",
    "Шаражкина контора",
    "Бизнес информатика (37 чел.)"
  ),
];

export default function DataSearch() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 1500, color: "#4471f3" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ВОЗРАСТ</TableCell>
            <TableCell align="right">ГОРОД</TableCell>
            <TableCell align="right">БАЛЛЫ</TableCell>
            <TableCell align="right">ШКОЛА</TableCell>
            <TableCell align="right">ПРИОРИТ-ЫЕ НАПРАВЛЕНИЯ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
