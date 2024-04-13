import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Input,
  stepContentClasses,
} from "@mui/material";
import { Link, Router, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectionFunction() {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    navigate("/portrait");
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
          fontSize="20px"
          lineHeight="23px"
          marginBottom="38px"
        >
          Выберите действие
        </Typography>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Составить портрет
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Отфильтровать
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Поиск данных
        </Button>
      </Box>
    </>
  );
}
