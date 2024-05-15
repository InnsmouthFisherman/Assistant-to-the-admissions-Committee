// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Typography, colors } from "@mui/material";
// import Button from "@mui/material/Button";
// import axios from "axios";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const url = "http://127.0.0.1:5000/auth/register"

// const rows = [
//   createData(
//     "18 (1200 чел.)",
//     "Тюмень (1337 чел.)",
//     "0 (9999 чел)",
//     "ПТУ (99999 чел)",
//     "Информационные системы и технологии (1 чел.)"
//   ),
//   createData(
//     "22 (228 чел.)",
//     "Сургут (1 чел.)",
//     "-1 (чееел)",
//     "Шаражкина контора",
//     "Бизнес информатика (37 чел.)"
//   ),
// ];
// // const [rows, setRows] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const resp = await axios.post(url, {
//         // Add any data you want to send with the request
//       });
//       // Assuming the response contains an array of data
//       setRows(resp.data);
//     } catch (error) {
//       console.error("Ошибка при отправке запроса:", error);
//     }
//   };
// export default function DataSearch() {
//   return (
//     <div>
//       <CssBaseline />
      
//       <Button 
//     onClick={handleSearch}
//     variant="contained"
//     style={{ marginBottom:38 }}
//     >Поиск</Button>

//       <TableContainer component={Paper}>
//       <Table
//         sx={{ minWidth: 1500, color: "#4471f3" }}
//         aria-label="simple table"
//       >
//         <TableHead>
//           <TableRow>
//             <TableCell>ВОЗРАСТ</TableCell>
//             <TableCell align="right">ГОРОД</TableCell>
//             <TableCell align="right">БАЛЛЫ</TableCell>
//             <TableCell align="right">ШКОЛА</TableCell>
//             <TableCell align="right">ПРИОРИТ-ЫЕ НАПРАВЛЕНИЯ</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
    

//   </div>
//   );
// }
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

const url = "http://127.0.0.1:5000/auth/register";

const DataSearch = () => {
  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    console.log("хуй")
    try {
      const resp = await axios.post(url, {
      });
      setRows(resp.data);
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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1500, color: "#4471f3" }} aria-label="simple table">
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
    </div>
  );
};

export default DataSearch;
