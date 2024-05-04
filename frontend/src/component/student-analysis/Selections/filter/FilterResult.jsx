import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "@mui/material";
import axios from "axios";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Margin } from "@mui/icons-material";

export default function FilterResult() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const tableStyle = {
    minWidth: 650,
    overflowY: "auto",
    maxHeight: "150vh",
  };

  const containerStyle = {
    maxWidth: "13%",
    margin: "auto",
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/analytics/filter_result")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
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
    );
  }
}
