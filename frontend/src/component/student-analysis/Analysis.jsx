import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Analysis() {
  const [options, setOptions] = useState("");

  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  return (
    // <>
    //   <Box
    //     maxWidth="415px"
    //     width="100%"
    //     boxShadow="0px 6px 50px rgba(217, 229, 225, 0.7)"
    //     borderRadius="20px"
    //     paddingLeft="30px"
    //     paddingRight="30px"
    //     paddingTop="38px"
    //     paddingBottom="38px"
    //   >
    //     <Typography variant="h6" fontWeight="100">
    //       Выберите файл
    //     </Typography>
    //     <Button variant="outlined" style={{ marginBottom: 20 }}>
    //       добавить файл
    //     </Button>

    //     <Typography variant="h6" fontWeight="100">
    //       Введите желаемое кол-во баллов
    //     </Typography>
    //     <TextField
    //       margin="dense"
    //       id="points"
    //       label="Баллы"
    //       type="number"
    //       fullWidth
    //     />

    //     <Typography fontWeight="100" variant="h6">
    //       Олимпиады
    //     </Typography>
    //     <TextField
    //       margin="dense"
    //       id="points"
    //       label="Введите предмет и занятое место"
    //       type="text"
    //       fullWidth
    //     />

    //     <Typography variant="h6" fontWeight="100">
    //       Направление и университет
    //     </Typography>
    //     <TextField
    //       margin="dense"
    //       id="points"
    //       label="Введите университет"
    //       type="text"
    //       fullWidth
    //     />
    //     <TextField
    //       margin="dense"
    //       id="points"
    //       label="Введите направление"
    //       type="text"
    //       fullWidth
    //     />

    //     <Button variant="contained" fullWidth style={{ marginTop: 20 }}>
    //       Подтвердить
    //     </Button>
    //   </Box>
    // </>
    <>
      <CssBaseline />
      <Box
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        margin="38px 0 0 38px"
      >
        <Typography
          variant="h1"
          fontWeight="500"
          fontSize="20px"
          lineHeight="23px"
          sx={{ borderBottom: 1 }}
          // position={"fixed"}
        >
          Параметры
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 250, margin: "38px 0 150px 0" }}>
          <InputLabel id="select-label-options">Добавить Параметр</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select-options"
            value={options}
            label="Добавить Параметр"
            onChange={handleChange}
          >
            <MenuItem value={10}>Баллы</MenuItem>
            <MenuItem value={20}>Город</MenuItem>
            <MenuItem value={30}>Что-то ещё</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Добавить Параметр</Button>
      </Box>
    </>
  );
}
