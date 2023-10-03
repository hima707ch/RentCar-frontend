import { useEffect } from "react";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function SearchPage() {
  const nav = useNavigate();
  const sug = useSelector(s=>s.sug);

  useEffect(() => {
    if (sug.length === 0) nav("/");
  }, [sug]);

  return (
    <div className="cars">
      {sug.map((ele) => (
        <CarCard data={ele} />
      ))}
    </div>
  );
}
