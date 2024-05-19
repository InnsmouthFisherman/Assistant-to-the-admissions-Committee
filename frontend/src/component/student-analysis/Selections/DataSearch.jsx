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
import './styles.css'; // Import the CSS file

const url = "http://127.0.0.1:5000/analytics/brief_analytics";

const DataSearch = () => {
  const [data, setData] = useState({
    ages: [],
    cities: [],
    docEdu: [],
    sumEge: [],
    avgEge: [],
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
        const docEduData = resp.data.doc_edu || {};
        const sumEgeData = resp.data.sum_ege || {};
        const avgEgeData = resp.data.ege || {};

        const ages = Object.keys(ageData).map(age => `${age} (${ageData[age]})`);
        const cities = Object.keys(cityData).map(city => `${city} (${cityData[city]})`);
        const schools = Object.keys(schoolData).map(school => `${school} (${schoolData[school]})`);
        const priorities = Object.keys(prioritiesData).map(priority => `${priority} (${prioritiesData[priority]})`);
        const docEdu = Object.keys(docEduData).map(doc => `${doc} (${docEduData[doc]})`);
        const sumEge = Object.keys(sumEgeData).map(sum => `${sum} (${sumEgeData[sum]})`);
        const avgEge = Object.keys(avgEgeData).map(avg => `${avg} (${avgEgeData[avg]})`);

        setData({
          ages,
          cities,
          docEdu,
          sumEge,
          avgEge,
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
    data.docEdu.length,
    data.sumEge.length,
    data.avgEge.length,
    data.schools.length,
    data.priorityDirections.length
  );

  return (
    <div className="background-container">
      <CssBaseline />
      <div className="triangle-left"></div>
      <div className="triangle-right"></div>
      <div className="content">
        <div className="heading">Быстрая аналитика</div> {/* Вставляем заголовок */}
        <div className="button-container">
          <Button
            onClick={handleSearch}
            variant="contained"
            style={{ marginBottom: 20 }}
          >
            Поиск
          </Button>
        </div>
        
        <div className="table-container">
          <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>ВОЗРАСТ (КОЛ-ВО)</TableCell>
                  <TableCell align="right">ГОРОДА (КОЛ-ВО)</TableCell>
                  <TableCell align="right">ДОК. ОБ ОБРАЗОВАНИИ (КОЛ-ВО)</TableCell>
                  <TableCell align="right">СУММА БАЛЛОВ ЗА ЕГЭ (КОЛ-ВО)</TableCell>
                  <TableCell align="right">СРЕДНИЙ БАЛЛ ЕГЭ (КОЛ-ВО)</TableCell>
                  <TableCell align="right">ШКОЛЫ (КОЛ-ВО)</TableCell>
                  <TableCell align="right">ПРИОРИТ-ЫЕ НАПРАВЛЕНИЯ (КОЛ-ВО)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: maxLength }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.ages[index] || ''}</TableCell>
                    <TableCell align="right">{data.cities[index] || ''}</TableCell>
                    <TableCell align="right">{data.docEdu[index] || ''}</TableCell>
                    <TableCell align="right">{data.sumEge[index] || ''}</TableCell>
                    <TableCell align="right">{data.avgEge[index] || ''}</TableCell>
                    <TableCell align="right">{data.schools[index] || ''}</TableCell>
                    <TableCell align="right">{data.priorityDirections[index] || ''}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DataSearch;
