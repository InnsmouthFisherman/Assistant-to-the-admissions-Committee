import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const url = "http://127.0.0.1:5000/analytics/brief_analytics";

const DataSearch = () => {
  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    try {
      const resp = await axios.get(url);
      console.log("Ответ получен:", resp.data);
      if (resp.data && typeof resp.data === 'object' && !Array.isArray(resp.data)) {
        const ageData = resp.data.age || {};
        const cities = Object.keys(resp.data.city || {});
        const schools = Object.keys(resp.data.school || {});
        const priorities = resp.data.priotity || {};
        const scoresData = resp.data.ege["Сумма баллов"] || {};

        const priorityArray = Object.keys(priorities);
        
        const data = [];
        let index = 1;

        Object.keys(ageData).forEach(age => {
          const count = ageData[age];
          for (let i = 0; i < count; i++) {
            const city = cities[i % cities.length]; // Берем город по индексу
            const school = schools[i % schools.length]; // Берем школу по индексу
            const scores = scoresData[age] || 0; // Получаем баллы для данного возраста
            const priority_directions = priorityArray[i % priorityArray.length]; // Берем одно приоритетное направление

            data.push({
              index: index++,
              age,
              city,
              school,
              scores,
              priority_directions,
            });
          }
        });

        setRows(data);
      } else {
        console.error("Неверный формат данных:", resp.data);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div>
      <CssBaseline />
      <Button
        onClick={handleSearch}
        variant="contained"
        style={{ marginBottom: 38 }}
      >
        Поиск
      </Button>

      <div style={{ maxHeight: 400, overflowY: "auto" }}> {/* Контейнер с фиксированной высотой и прокруткой */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1500, color: "#4471f3" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ПОРЯДКОВЫЙ НОМЕР</TableCell>
                <TableCell>ВОЗРАСТ</TableCell>
                <TableCell align="right">ГОРОД</TableCell>
                <TableCell align="right">БАЛЛЫ</TableCell>
                <TableCell align="right">ШКОЛА</TableCell>
                <TableCell align="right">ПРИОРИТ-ЫЕ НАПРАВЛЕНИЯ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.index}
                  </TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.scores}</TableCell>
                  <TableCell align="right">{row.school}</TableCell>
                  <TableCell align="right">{row.priority_directions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataSearch;
