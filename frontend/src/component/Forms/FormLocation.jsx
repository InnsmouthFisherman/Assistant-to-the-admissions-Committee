import { Typography, Box, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FormLocation() {
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
        Место проживания
      </Typography>
      <TextField
        autoFocus
        margin="dense"
        id="region"
        label="Введите область"
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="city"
        label="Введите город"
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="Street"
        label="Введите улицу"
        type="text"
        fullWidth
      />
    </Box>
  );
}
