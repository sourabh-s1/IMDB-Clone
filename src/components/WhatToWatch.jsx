import { FanFavorites } from "./FanFavorites";
import { TopPicks } from "./TopPicks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";
import "../style.css";

export const WhatToWatch = () => {
  return (
    <>
      <div>
        <h1>What to watch</h1>
        <Link className="ratingT" to="/">
          <p>Get more recommendations </p>
          <ArrowForwardIosIcon className="arow" fontSize="small" />
        </Link>
      </div>
      <TopPicks />
      <FanFavorites />
    </>
  );
};
