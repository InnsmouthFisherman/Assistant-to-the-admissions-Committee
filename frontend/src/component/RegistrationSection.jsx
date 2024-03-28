import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const url = "http://127.0.0.1:5000/auth/register ";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const resp = await axios.post(url, {
      email,
      password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
      username,
    });
    navigate("/analysis");
  };

  // axios({
  //   method: "post",
  //   url: url,
  //   data: {
  //     id: Number,
  //     name: name,
  //     Surname: surName,
  //     Email: email,
  //     Password: password,
  //   },
  // });

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
          Регистрация
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Имя"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          style={{ marginTop: 20 }}
        >
          Регистрация
        </Button>
      </Box>
    </>
  );
}
