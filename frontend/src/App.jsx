import { Routes, Route, Link } from "react-router-dom";
import Registration from "./component/RegistrationSection";
import Application from "./component/Application";
import Analysis from "./component/student-analysis/Analysis";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Registration />} />
    //   <Route path="/analysis" element={<Analysis />} />
    // </Routes>
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    //   <Analysis />
    // </ThemeProvider>
    <Registration />
  );
}
