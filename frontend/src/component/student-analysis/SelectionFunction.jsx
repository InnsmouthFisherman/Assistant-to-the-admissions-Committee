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
  Container,
} from "@mui/material";
import { Link, Router, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectionFunction() {
  const navigate = useNavigate();
  const handleNavigatePortrait = async () => {
    navigate("/portrait");
  };
  const handleNavigateFilter = async () => {
    navigate("/filter");
  };
  const handleNavigateSearch = async () => {
    navigate("/dataSearch");
  };
  return (
    <>
      <CssBaseline />
      <Box display="flex" bgcolor="#fbfae7">
        <Box marginRight="300px">
          <Typography
            variant="h1"
            color="#000000"
            fontWeight="500"
            fontSize="100px"
            lineHeight="23px"
            marginBottom="68px"
          >
            Меню
          </Typography>
          <Box
            maxWidth="415px"
            width="100%"
            borderRadius="20px"
            paddingLeft="60px"
            paddingRight="60px"
            paddingTop="38px"
            paddingBottom="38px"
          >
            <Typography
              variant="h1"
              color="#C4D1D4"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Выберите действие
            </Typography>
            <Button
              variant="contained"
              fullWidth
              style={{ marginTop: 20 }}
              onClick={handleNavigatePortrait}
            >
              Составить портрет
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              onClick={handleNavigateFilter}
              fullWidth
            >
              Отфильтровать
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              onClick={handleNavigateSearch}
              fullWidth
            >
              Поиск данных
            </Button>
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography
              variant="h1"
              color="#3F69FF"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Составить портрет:
            </Typography>
            <Typography
              variant="h1"
              color="#000000"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Находит среднее значение для выбранной группы людей
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              color="#3F69FF"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Отфильтровать:
            </Typography>
            <Typography
              variant="h1"
              color="#000000"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Находит людей по определенному признаку (баллы, город, школа ...)
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              color="#3F69FF"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Быстрая аналитика:
            </Typography>
            <Typography
              variant="h1"
              color="#000000"
              fontWeight="500"
              fontSize="30px"
              lineHeight="23px"
              marginBottom="38px"
            >
              Основные данные "выборки"(табл которую загружают)
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
