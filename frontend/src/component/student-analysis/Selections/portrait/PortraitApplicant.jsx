import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import axios from "axios";
import { Typography, Box, TextField, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const filterUrl = "http://127.0.0.1:5000/analytics/portrait";

export default function PortraitApplican() {
  const [options, setOptions] = useState([]);
  const [inputValues, setInputValues] = useState({
    average_exam_score: "",
    the_method_of_submitting_documents: "",
  });

  const handleChange = (event) => {
    setOptions([...options, event.target.value]);
  };

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [options[options.length - 1]]: event.target.value,
    });
  };

  const handleSubmitFilter = async () => {
    const data = {
      average_exam_score: inputValues.average_exam_score,
      the_method_of_submitting_documents:
        inputValues.the_method_of_submitting_documents,
      // Добавьте остальные параметры и их значения здесь
    };

    try {
      const resp = await axios.post(filterUrl, data);
      console.log(resp.data);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box bgcolor="FBFAE7">
        <Typography
          variant="h1"
          fontWeight="500"
          fontSize="30px"
          lineHeight="23px"
          margin="38px 0 0 0"
        >
          Параметры
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 250, margin: "38px 0 38px 0" }}>
          <InputLabel id="select-label-options">Добавить Параметр</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select-options"
            label="Добавить Параметр"
            onChange={handleChange}
          >
            <MenuItem value={"average_exam_score"}>средний балл</MenuItem>
            <MenuItem value={"the_method_of_submitting_documents"}>
              Способ подачи док-ов
            </MenuItem>
          </Select>
        </FormControl>
        {options.map((option) => (
          <Box
            key={option}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            margin="0 10px 0 15px"
          >
            <Typography sx={{ marginTop: 5 }}>{option}</Typography>
            <TextField
              sx={{ width: "100%" }}
              placeholder={option}
              onChange={handleInputChange}
            ></TextField>
          </Box>
        ))}
        <Button
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
          onClick={handleSubmitFilter}
        >
          Составить портрет
        </Button>
      </Box>
    </>
  );
}
