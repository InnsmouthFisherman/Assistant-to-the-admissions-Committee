import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react"; 
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom"; 
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const url = "http://127.0.0.1:5000/auth/jwt/login ";

export default function Enter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigate("/install/:type");

    try {
      const resp = await axios.post(url, {
        email,
        password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
      });
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  

  

  const emailValidate = (e) => {
    setEmail(e.target.value); 
  };

  const passwordValidate = (e) => {
    setPassword(e.target.value); 
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
          Вход
        </Typography>
        {/* <TextField
          autoFocus
          margin="dense"
          id="firstName"
          label="Фамилия"
          type="text"
          fullWidth
        /> */}
        
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Adress"
          type="email"
          fullWidth
          name="email"
          onChange={emailValidate} 
        />

        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          name="password"
          onChange={passwordValidate} 
        />

        
        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Войти
        </Button>

      </Box>
    </>
  );
}
