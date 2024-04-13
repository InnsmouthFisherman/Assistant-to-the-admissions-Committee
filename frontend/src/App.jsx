import { Routes, Route, Link } from "react-router-dom";
import Registration from "./component/RegistrationSection";
import SelectionFunction from "./component/student-analysis/SelectionFunction";
import Application from "./component/Application";
import PortraitApplican from "./component/student-analysis/PortraitApplicant";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SelectionFunction />} />
      <Route path="/portrait" element={<PortraitApplican />} />
    </Routes>
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    //   <Analysis />
    // </ThemeProvider>
  );
}
