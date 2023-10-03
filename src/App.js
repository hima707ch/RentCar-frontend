import {
  BrowserRouter,
  Router,
  useNavigate,
  Routes,
  Route
} from "react-router-dom";

import CarCard from "./components/CarCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles.css";
import data from "./data";
import { useState, useEffect } from "react";
import SearchPage from "./components/SearchPage";
import Home from "./components/Home";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const pageNo = useSelector((s) => s.pageNo);
  const dispatch = useDispatch();

  const nav = useNavigate();

  //set skip
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    console.log("page change")
    setSkip((pageNo - 1) * 6);
    nav("/page/" + pageNo);
  }, [pageNo]);

  // Render Page
  function RenderPage() {
    return (
      <div className="cars">
        {data.slice(skip, skip + 6).map((ele) => {
          return <CarCard data={ele} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="car-cont">
        <Navbar  />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path={`/page/:page`}
            element={
              <div>
                <RenderPage /> <Footer />
              </div>
            }
          />
          <Route path={`/search/:search`} element={<SearchPage/>} />
        </Routes>
      </div>
    </div>
  );
}
