import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const url = "http://127.0.0.1:5000/add_applicant ";

export default function Registration() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const handleSubmit = () => {
    axios.post(url, { id, name, surName, email, password });
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
          id="email"
          label="Email Adress"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
        />

        <Button onClick={handleSubmit} variant="contained" fullWidth>
          Регистрация
        </Button>
      </Box>
    </>
  );
}
