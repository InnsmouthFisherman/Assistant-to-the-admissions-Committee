import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, Router, useNavigate } from "react-router-dom";

export default function InstallTably() {
  const navigate = useNavigate();
  const handleSelectionFunction = async () => {
    navigate("/selectFunc");
  };
  return (
    <>
      <CssBaseline />
      <Box>
        <Typography
          variant="h1"
          color="#30507d"
          fontWeight="500"
          fontSize="25px"
          lineHeight="23px"
          marginBottom="38px"
        >
          Загрузите таблицу для обработки
        </Typography>
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSelectionFunction}
        >
          Загрузить файл
        </Button>
      </Box>
    </>
  );
}
