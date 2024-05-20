// App.js

import { Routes, Route } from "react-router-dom";
import Registration from "./component/RegistrationSection";
import SelectionFunction from "./component/student-analysis/SelectionFunction";
import Application from "./component/Application";
import PortraitApplican from "./component/student-analysis/Selections/PortraitApplicant";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DataSearch from "./component/student-analysis/Selections/DataSearch";
import Filter from "./component/student-analysis/Selections/filter/Filter";
import InstallTably from "./component/student-analysis/installTably/InstallTablу";
import FilterResult from "./component/student-analysis/Selections/filter/FilterResult";
import Enter from "./component/student-analysis/Selections/EnterSection";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBFAE7;
    margin: 0; /* Установка отступов по умолчанию для body */
    padding: 0; /* Установка отступов по умолчанию для body */
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Enter/:type" element={<Enter />} />
        <Route path="/install/:type" element={<InstallTably />} />
        <Route path="/selectFunc" element={<SelectionFunction />} />
        <Route path="/portrait" element={<PortraitApplican />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/dataSearch" element={<DataSearch />} />
      </Routes>
    </>
  );
}
