import "./App.css";
import VacanciesPage from "../pages/VacanciesPage/VacanciesPage";
import VacancyPage from "../pages/VacancyPage/VacancyPage";
import { Routes, Route, Navigate } from "react-router";
import Layout from "./Layout";
import NotFoundPage from "../pages/NotFoundPage/NotToundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to={"/vacancies"} />}></Route>
          <Route path="vacancies" element={<VacanciesPage />} />
          <Route path="vacancies/:id" element={<VacancyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
