import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

export default function Filter() {
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
            type="text"
            fullWidth
            name={"Points"}
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
          />

          <Button variant="contained" fullWidth style={{ marginTop: 20 }}>
            Отфильтровать
          </Button>
        </Box>
      </Box>
    </>
  );
}
