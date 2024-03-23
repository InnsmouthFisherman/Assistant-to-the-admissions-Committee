import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function Analysis() {
  return (
    <>
      <Box
        maxWidth="415px"
        width="100%"
        boxShadow="0px 6px 50px rgba(217, 229, 225, 0.7)"
        borderRadius="20px"
        paddingLeft="30px"
        paddingRight="30px"
        paddingTop="38px"
        paddingBottom="38px"
      >
        <Typography variant="h6" fontWeight="100">
          Выберите файл
        </Typography>
        <Button variant="outlined" style={{ marginBottom: 20 }}>
          добавить файл
        </Button>

        <Typography variant="h6" fontWeight="100">
          Введите желаемое кол-во баллов
        </Typography>
        <TextField
          margin="dense"
          id="points"
          label="Баллы"
          type="number"
          fullWidth
        />

        <Typography fontWeight="100" variant="h6">
          Олимпиады
        </Typography>
        <TextField
          margin="dense"
          id="points"
          label="Введите предмет и занятое место"
          type="text"
          fullWidth
        />

        <Typography variant="h6" fontWeight="100">
          Направление и университет
        </Typography>
        <TextField
          margin="dense"
          id="points"
          label="Введите университет"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="points"
          label="Введите направление"
          type="text"
          fullWidth
        />

        <Button variant="contained" fullWidth style={{ marginTop: 20 }}>
          Подтвердить
        </Button>
      </Box>
    </>
  );
}
