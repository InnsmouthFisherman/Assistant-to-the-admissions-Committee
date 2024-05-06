import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Router, useNavigate } from "react-router-dom";

const filterUrl = "http://127.0.0.1:5000/analytics/filter";

export default function Filter() {
  const [point, setPoint] = useState("");
  const [way, setWay] = useState("");
  const points = Number(point);

  const navigate = useNavigate();

  const handleSubmitFilter = async () => {
    const resp = await axios.post(filterUrl, { points, way });
    console.log(resp);

    navigate("/filterResult");
    console.log(resp);
  };

  return (
    <>
      <CssBaseline />
      <Box
        maxWidth="415px"
        width="100%"
        bgcolor="#ffffff"
        boxShadow="0px 6px 50px rgba(217, 229, 225, 0.7)"
        borderRadius="20px"
        paddingLeft="30px"
        paddingRight="30px"
        paddingTop="38px"
        paddingBottom="38px"
      >
        <Typography
          variant="h1"
          color="#30507d"
          fontWeight="500"
          fontSize="25px"
          lineHeight="23px"
          marginBottom="38px"
        >
          Фильтр
        </Typography>
        <Box>
          <Typography
            variant="h1"
            color="#30507d"
            fontWeight="500"
            fontSize="20px"
            lineHeight="23px"
          >
            Баллы
          </Typography>
          <TextField
            autoFocus
            margin="normal"
            id="Points"
            label="Points"
            type="number"
            fullWidth
            name={"Points"}
            value={point}
            onChange={(e) => setPoint(e.target.value)}
          />
          <Typography
            variant="h1"
            color="#30507d"
            fontWeight="500"
            fontSize="20px"
            lineHeight="23px"
          >
            Способ подачи док-ов
          </Typography>
          <TextField
            autoFocus
            margin="normal"
            id="way"
            label="Способ"
            type="text"
            fullWidth
            name={"way"}
            value={way}
            onChange={(e) => setWay(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: 20 }}
            onClick={handleSubmitFilter}
          >
            Отфильтровать
          </Button>
        </Box>
      </Box>
    </>
  );
}
