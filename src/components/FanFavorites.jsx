import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

export const FanFavorites = () => {
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
      .get(`https://imdb-api.com/en/API/YouTubeTrailer/k_q6wh5gi6/${id}`)
      .then((res) => {
        setMovieData(res);
      });
  }
  function getData(page = 1) {
    axios
      .get(`http://localhost:3001/items1?_page=${page}&_limit=${limit}`)
      .then((res) => {
        setData(res.data);
        setCount(res.headers["x-total-count"] - page * limit);
      });
  }
  return (
    <div id="dataContainer">
      <div>
        <h1>
          | Fan faorites <ArrowForwardIosIcon />
        </h1>
        <p>This week's top TV and movies</p>
      </div>
      <div className="cardContainer">
        {data.map((e, i) => (
          <div className="dataCard" key={i}>
            <div className="poster">
              <img src={e.image} />
            </div>
            <div className="posterData">
              <div className="rating">
                <div className="ratingT">
                  <StarIcon sx={{ color: "#ffc400" }} />
                  <p>{e.imDbRating}</p>
                </div>
                <button>
                  <StarBorderIcon />
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
                  className="ratingT"
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