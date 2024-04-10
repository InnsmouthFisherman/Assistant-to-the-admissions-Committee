import { Typography, Box, TextField, Grid } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormName from "./Forms/FormName";
import FormLocation from "./Forms/FormLocation";
import FormPersonalData from "./Forms/FormPersonalData";
import { DisplaySettings } from "@mui/icons-material";

const url = "http://127.0.0.1:5000/add_applicant ";
export default function Application() {
  // const [id, setId] = useState(null);
  // const [name, setName] = useState("");
  // const [surName, setSurName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(null);

  // const handleSubmit = () => {
  //   axios.post(url, {
  //     id,
  //     name,
  //     firstName,
  //     surname,
  //     password,
  //     region,
  //     city,
  //     Street,
  //     inn,
  //     scool,
  //     ball,
  //   });
  // };

  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          fontWeight="400"
          fontSize="48px"
          lineHeight="23px"
          marginBottom="38px"
          align="center"
          paddingLeft="30px"
          paddingRight="30px"
          paddingTop="38px"
          paddingBottom="38px"
        >
          Заявка абитуриента
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <FormName />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormLocation />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormPersonalData />
          </Grid>
        </Grid>
        <div className="button" style={{ textAlign: "center", marginTop: 30 }}>
          <Button
            variant="contained"
            style={{
              borderRadius: 10,
              height: 45,
              width: 300,
            }}
          >
            Отправить
          </Button>
        </div>
      </Box>
    </>
  );
}
