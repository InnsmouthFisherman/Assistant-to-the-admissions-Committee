import { Typography, Box, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

export default function FormName() {
  // const classes = useStyles();
  return (
    <Box
      maxWidth="379px"
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
        ФИО
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Имя"
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="firstName"
        label="Фамилия"
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="surname"
        label="Введите отчество"
        type="text"
        fullWidth
      />
    </Box>
  );
}
