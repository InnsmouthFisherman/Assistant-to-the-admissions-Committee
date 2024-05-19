import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import axios from "axios";

const tableStyle = {
  minWidth: 650,
  maxHeight: "70vh", // Вы можете изменить этот параметр по вашему усмотрению
};

const containerStyle = {
  maxWidth: "13%",
  margin: "0",
};

export default function FilterResult() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:5000/analytics/filter", { items })
      .then((res) => {
        setIsLoaded(true);
        setItems(res.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <>
        <TableContainer
          component={Paper}
          style={{ ...containerStyle, maxHeight: "80vh" }}
        >
          <Table style={tableStyle}>
            <TableHead>
              <TableRow>
                {Object.keys(items[0]).map((key) => (
                  <TableCell key={key}>
                    <strong>{key}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  {Object.values(item).map((value, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}
