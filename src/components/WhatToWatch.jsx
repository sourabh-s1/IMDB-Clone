import { FanFavorites } from "./FanFavorites";
import { TopPicks } from "./TopPicks";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";
import "../style.css";
import Crousel from "./Explore/Crousel";
import Editor from "./Explore/Editor";
import News from "./Explore/News";
import Originals from "./Explore/Originals";
import {TopBox} from "./Explore/Topbox";

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
      <Crousel/>
      <Editor/>
      <News/>
      <Originals/>
      <TopBox />
    </>
  );
};
