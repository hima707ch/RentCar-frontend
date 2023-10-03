import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";

import { useDispatch,useSelector } from "react-redux";
import {setSug} from "../Slices/sugSlice"; 

export default function Navbar() {
  const [inp, setInp] = useState("");

  const sug = useSelector((s) => s.sug);
  const dispatch = useDispatch();  

  const nav = useNavigate();

  const handlechange = (e) => {
    setInp(e.target.value);
  };

  useEffect(() => {
    if (inp === "") {
      dispatch(setSug([]));
      return;
    }
    const temp1 = data
      .filter((ele) => {
        if (ele.name.toLowerCase().includes(inp.toLowerCase())) {
          return true;
        }
        return false;
      })
      .reduce((acc, curr) => {
        const isExist = acc.find((obj) => {
          return obj.name === curr.name;
        });
        if (!isExist) acc.push(curr);
        return acc;
      }, []);

    dispatch(setSug(temp1));
    
    nav("/search/" + inp);
  }, [inp, nav]);

  return (
    <div className="nav-cont">
      <div>
        <input placeholder="Search..." onChange={handlechange} value={inp} />
        <div className="sug-cont">
          {sug.map((e) => (
            <p
              className="sug"
              onClick={() => {
                setInp(e.name);
              }}
            >
              {" "}
              {e.name}{" "}
            </p>
          ))}
        </div>
      </div>

      <h1
        className="home"
        onClick={() => {
          nav("/");
        }}
      >
        Home
      </h1>
    </div>
  );
}
