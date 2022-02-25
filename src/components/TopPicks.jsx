import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { API_KEY, API_URL } from "../Config/config"
import { style } from "@mui/system";

export const TopPicks = () => {
  const [data, setData] = useState([]);
  const [tempdata, setTempdata] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const [wishlist, setWishlist] = useState([]);

  let limit = 6;
  useEffect(() => {
    getData(page);

    //dataNew(page);
    //console.log("tempdata",tempdata);
  }, [page]);
  function getMovieData(id) {
    axios.get(`${API_URL}/Title/${API_KEY}/${id}`).then((res) => {
      setMovieData(res);
    });
  }
  function getData(page = 1) {
    axios
      .get(
        `https://secure-tor-86460.herokuapp.com/Top250Movies?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setData(res.data);
        setCount(res.data.items.length - page * limit);

        console.log(data);
      });
  }
  function addToWishlist(data) {
    // console.log("data", data);
    axios
      .post("https://secure-tor-86460.herokuapp.com/Wishlist", { data })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function dataNew(page) {
    setTempdata([]);
    for (let i = page * limit - limit; i <= page * limit; i++) {
      tempdata.push(data[i]);
    }
  }
  return (
    <div id="dataContainer">
      <div>
        <div className="head">
          <h1>
            Top picks{" "}
            <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            />
          </h1>
        </div>
        <p className="left">TV shows and movies just for you</p>
      </div>
      <div className="cardContainer left">
        {data.map((e, i) => (
          <div className="dataCard" key={i}>
            <Link to={{ pathname: `/${e.id}` }}>
              <div className="poster">
                <img src={e.image} />
              </div>
            </Link>
            <div className="posterData">
              <div className="rating">
                <div className="ratingT">
                  <StarIcon sx={{ color: "#F5C519" }} />
                  <p>{e.imDbRating}</p>
                </div>
                <button
                  className="startBtn"
                  onClick={() => {
                    addToWishlist(e);
                    alert("Movie is successfully added to watchlist");
                  }}
                >
                  <StarBorderIcon sx={{ color: "#5478A7" }} className="star" />
                </button>
              </div>
              <div className="title">
                <h4>{e.title}</h4>
              </div>
              <button className="posterBtn">
                <div className="ratingT text">
                  <AddIcon />
                  <p>Watch</p>
                </div>
              </button>
              <div className="rating">
                <button
                  className="ratingT trailerBtn"
                  onClick={() => {
                    //   getMovieData(e.id);
                  }}
                >
                  <PlayArrowIcon />
                  <p>Trailer</p>
                </button>
                <InfoOutlinedIcon />
                {/* <iframe
                width={300}
                height={300}
                src={movieData.videoUrl}
              ></iframe> */}
              </div>
            </div>
          </div>

        ))}
      </div>

      <button id="bck" disabled={page === 1} onClick={() => setPage(page - 1)}>
        <ArrowBackIosIcon className="arrowColor" />
      </button>
      <button id="fwd" disabled={count <= 0} onClick={() => setPage(page + 1)}>
        <ArrowForwardIosIcon className="arrowColor" />
      </button>
    </div>
  );
};
