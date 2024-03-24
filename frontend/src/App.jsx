import { Routes, Route, Link } from "react-router-dom";
import Registration from "./component/RegistrationSection";
import Application from "./component/Application";
import Analysis from "./component/student-analysis/Analysis";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/analysis" element={<Analysis />} />
    </Routes>
  );
}
