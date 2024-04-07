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
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Analysis() {
  const [options, setOptions] = useState([]);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(false);
  }, [isUpdate]);

  const handleChange = (event) => {
    let tempArray = options;
    if (!tempArray.includes(event.target.value)) {
      tempArray.push(event.target.value);
    } else {
      tempArray = tempArray.filter((i) => i !== event.target.value);
    }
    setOptions(tempArray);
    setUpdate(true);
  };

  const handleClick = (event) => {
    setComfirmed(true);
  };
  // const handleClick = ()
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
      <Typography
        variant="h1"
        fontWeight="500"
        fontSize="20px"
        lineHeight="23px"
        sx={{ borderBottom: 1 }}
        margin="38px 0 0 38px"
        // position={"fixed"}
      >
        Параметры
      </Typography>
      <Box
        height={"100vh"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        margin="38px 0 0 38px"
      >
        <FormControl sx={{ m: 1, minWidth: 250, margin: "38px 0 38px 0" }}>
          <InputLabel id="select-label-options">Добавить Параметр</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select-options"
            label="Добавить Параметр"
            onChange={handleChange}
          >
            <MenuItem value={"Баллы"}>Баллы</MenuItem>
            <MenuItem value={"Город"}>Город</MenuItem>
            <MenuItem value={"Что-то еще"}>Что-то ещё</MenuItem>
          </Select>
        </FormControl>
        {/* <Button
          variant="contained"
          onClick={handleClick}
          // disabled={isConfirmed}
        >
          Добавить Параметр
        </Button> */}
        {options &&
          options.map((option) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              margin="0 10px 0 15px"
            >
              <Typography sx={{ marginTop: 5 }}>{option}</Typography>
              <TextField
                sx={{ width: "100%" }}
                placeholder={option}
              ></TextField>
            </Box>
          ))}
      </Box>
    </>
  );
}
