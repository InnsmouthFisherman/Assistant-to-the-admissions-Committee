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
  const [data, setData] = useState({
    ages: [],
    cities: [],
    scores: [],
    schools: [],
    priorityDirections: [],
  });

  const handleSearch = async () => {
    try {
      const resp = await axios.get(url);
      console.log("Ответ получен:", resp.data);
      if (resp.data && typeof resp.data === 'object' && !Array.isArray(resp.data)) {
        const ageData = resp.data.age || {};
        const cityData = resp.data.city || {};
        const schoolData = resp.data.school || {};
        const prioritiesData = resp.data.priotity || {};
        const scoresData = resp.data.ege["Сумма баллов"] || {};

        const ages = Object.keys(ageData).map(age => `${age} (${ageData[age]})`);
        const cities = Object.keys(cityData).map(city => `${city} (${cityData[city]})`);
        const schools = Object.keys(schoolData).map(school => `${school} (${schoolData[school]})`);
        const priorities = Object.keys(prioritiesData).map(priority => `${priority} (${prioritiesData[priority]})`);
        const scores = Object.keys(scoresData).map(score => `${score} (${scoresData[score]})`);

        setData({
          ages,
          cities,
          scores,
          schools,
          priorityDirections: priorities,
        });
      } else {
        console.error("Неверный формат данных:", resp.data);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const maxLength = Math.max(
    data.ages.length,
    data.cities.length,
    data.scores.length,
    data.schools.length,
    data.priorityDirections.length
  );

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

      <div style={{ maxHeight: 400, overflowY: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1500, color: "#4471f3" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ВОЗРАСТ (КОЛ-ВО)</TableCell>
                <TableCell align="right">ГОРОДА (КОЛ-ВО)</TableCell>
                <TableCell align="right">СУММА БАЛЛОВ (КОЛ-ВО)</TableCell>
                <TableCell align="right">ШКОЛЫ (КОЛ-ВО)</TableCell>
                <TableCell align="right">ПРИОРИТ-ЫЕ НАПРАВЛЕНИЯ (КОЛ-ВО)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: maxLength }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>{data.ages[index] || ''}</TableCell>
                  <TableCell align="right">{data.cities[index] || ''}</TableCell>
                  <TableCell align="right">{data.scores[index] || ''}</TableCell>
                  <TableCell align="right">{data.schools[index] || ''}</TableCell>
                  <TableCell align="right">{data.priorityDirections[index] || ''}</TableCell>
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
  