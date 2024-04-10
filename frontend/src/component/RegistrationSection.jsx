import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";

const url = "http://127.0.0.1:5000/auth/register ";

export default function Registration() {
  const [userName, setUserName] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("хуй ");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passworError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const userNameValidate = (e) => {
    if (setUserNameDirty() == true) {
      setUserNameError("хуй");
    }

    // if (setUserName(e.Target.value) == "") {
    //   setUserNameError("хуй");
  };

  const emailValidate = (e) => {
    setEmail(e.target.value);
    setEmailError("хуй");
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
          Регистрация
        </Typography>
        <TextField
          error={userNameError}
          onBlure={(e) => blurHandler(e)}
          autoFocus
          margin="dense"
          id="userName"
          label="Имя"
          type="text"
          fullWidth
          name={"userName"}
          // helperText={userNameError}
          // onChange={(e) => userNameValidate(e)}
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
          // error={ }
          onBlure={(e) => blurHandler(e)}
          autoFocus
          margin="dense"
          id="email"
          label="Email Adress"
          type="email"
          fullWidth
          name={"email"}
          // onChange={(e) => emailValidate(e)}
        />

        <TextField
          autoFocus
          onBlure={(e) => blurHandler(e)}
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          name={"password"}
          // onChange={(e) => setPassword(e.target.value)}
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
