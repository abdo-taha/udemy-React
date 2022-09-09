import "./assets/styles/App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import NavBar from "./components/widgets/NavBar";
import Footer from "./components/widgets/Footer";
import Course from "./components/pages/Course";
import FullDataContext from "./Hooks/FullDataContext";
import { useEffect, useState } from "react";
import { getFullData } from "./api/FullData";

const App = () => {
  const [fullData, setFullData] = useState({ loading: true });

  useEffect(() => {
    getFullData().then((data) => setFullData(data));
  }, []);

  return (
    <FullDataContext.Provider value={fullData}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course/:id" element={<Course />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </FullDataContext.Provider>
  );
};

export default App;
