import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

import { useDispatch, useSelector } from "react-redux";
import { next, prev, set } from "../Slices/pageSlices";

export default function Footer() {

  const pageNo = useSelector((s) => s.pageNo);
  const dispatch = useDispatch();

  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }

  return (
    <div className="nav-cont footer">
      <p> {pageNo} of 10 </p>
      <div className="pages">
        <button onClick={() => {
              dispatch(prev())
            }}>
          {" "}
          <KeyboardBackspaceOutlinedIcon
            fontSize="tiny"
          />{" "}
        </button>

        {arr.map((ele) => (
          <button
            style={{
              backgroundColor: pageNo === ele && "rgb(41, 41, 41)",
              color: pageNo === ele && "white"
            }}
            onClick={() => {
              dispatch(set(ele))
            }}
          >
            {ele}
          </button>
        ))}

        <button onClick={() => {
              dispatch(next())
            }} >
          <EastOutlinedIcon
            fontSize="tiny"
          />
        </button>
      </div>
    </div>
  );
}
