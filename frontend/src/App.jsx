import { Routes, Route, Link } from "react-router-dom";
import Registration from "./component/RegistrationSection";
import SelectionFunction from "./component/student-analysis/SelectionFunction";
import Application from "./component/Application";
import PortraitApplican from "./component/student-analysis/Selections/PortraitApplicant";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DataSearch from "./component/student-analysis/Selections/DataSearch";
import Filter from "./component/student-analysis/Selections/filter/Filter";
import InstallTably from "./component/student-analysis/InstallTablу";
import FilterResult from "./component/student-analysis/Selections/filter/FilterResult";
import Enter from "./component/student-analysis/Selections/EnterSection"
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Registration />} />
    <Route path="/Enter/:type" element={<Enter />} />
    <Route path="/install/:type" element={<InstallTably />} />
    <Route path="/selectFunc" element={<SelectionFunction />} />
    <Route path="/portrait" element={<PortraitApplican />} />
    <Route path="/filter" element={<Filter />} />
    <Route path="/dataSearch" element={<DataSearch />} />
  </Routes>
    // <DataSearch theme={darkTheme}>
    //   <CssBaseline />
    //   <Analysis />
  );
}
