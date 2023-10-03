import "./carCard.css";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";

export default function CarCard({ data }) {
  return (
    <div className="container">
      <img src={data.imgUrl} />
      <div className="car-details-cont">
        <div className="details">
          <div className="details-head">
            <p className="title">{data.name}</p>
            <p className="year">{data.year}</p>
          </div>
          <div className="spec">
            <p>
              <PersonAddAltIcon className="icon" /> {data.person}
            </p>
            <p>
              <EvStationOutlinedIcon className="icon" /> {data.fuel}
            </p>
            <p>
              <SpeedIcon className="icon" /> {data.avrage}
            </p>
            <p>
              <DriveEtaOutlinedIcon className="icon" /> {data.auto}
            </p>
          </div>
        </div>
        <div className="line" />
        <div className="price">
          <p className="title">{data.price}$ /month</p>
          <p className="action">
            <button className="fav">
              <FavoriteBorderTwoToneIcon />
            </button>
            <button className="rent-now">Rent Now</button>
          </p>
        </div>
      </div>
    </div>
  );
}
