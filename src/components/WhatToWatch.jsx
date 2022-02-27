import { FanFavorites } from "./FanFavorites";
import { TopPicks } from "./TopPicks";
import { FromYorWatchlist } from "./FromYourWatchlist";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@mui/material";
import "../style.css";
import Crousel from "./Explore/Crousel";
import Editor from "./Explore/Editor";
import News from "./Explore/News";
import Originals from "./Explore/Originals";
import { TopBox } from "./Explore/Topbox";
import Featured from "./Explore/Featured"
import { useDispatch, useSelector } from "react-redux";
import {logoutInitiate} from "./SignIn/redux/actions"

export const WhatToWatch = () => {
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(currentUser){
      dispatch(logoutInitiate());
    }
    };

  return (
    <div>
      <Featured/>
      <div className="left">
        <h1 style={{ color: "#F5C519" }}>What to watch</h1>
        <Link className="ratingT" to="/">
          <p >Get more recommendations </p>
          <ArrowForwardIosIcon className="arow" fontSize="small" />
        </Link>
      </div>
      <TopPicks />
      <FanFavorites />
      <FromYorWatchlist />
      <div className="left">
      <h1 style={{ color: "#F5C519" }}>Exclusive Videos</h1>
      </div>
      <Originals />
      <div className="left">
      <h1 style={{ color: "#F5C519" }}>Explore Movies and TV Shows</h1>
      </div>
      <TopBox />
      <Crousel />
      <div className="left">
      <h1 style={{ color: "#F5C519" }}>More to Explore</h1>
      </div>
      <Editor />
      <News />


    </div>
  );
};
