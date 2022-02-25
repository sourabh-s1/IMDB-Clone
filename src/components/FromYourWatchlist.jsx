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
import { API_KEY, API_URL } from "../Config/config";

export const FromYorWatchlist = () => {
  const [data, setData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  let limit = 6;
  useEffect(() => {
    getData(page);
  }, [page]);
  function getMovieData(id) {
    axios
      .get(`${API_URL}/Title/${API_KEY}/${id}/FullActor,Posters,Trailer`)
      .then((res) => {
        setMovieData(res);
      });
  }
  function getData(page = 1) {
    axios
      .get(
        `https://secure-tor-86460.herokuapp.com/Wishlist?_page=${page}&_limit=${limit}`
      )
      .then((res) => {
        setData(res.data);
        setCount(res.headers["x-total-count"] - page * limit);
      });
  }
  return (
    <div id="dataContainer">
      <div>
        <div className="head">
          <h1>
            From Your Watchlist
            <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            />
          </h1>
        </div>
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
                  //   onClick={() => {
                  //     addToWishlist(e);
                  //   }}
                >
                  <StarBorderIcon sx={{ color: "#5478A7" }} className="start" />
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
              <div className="rating text">
                <button
                  className="ratingT trailerBtn"
                  onClick={() => {
                    //   getMovieData(e.id);
                  }}
                >
                  <PlayArrowIcon />
                  <p>Trailer</p>
                </button>
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
        <ArrowBackIosIcon />
      </button>
      <button id="fwd" disabled={count <= 0} onClick={() => setPage(page + 1)}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
