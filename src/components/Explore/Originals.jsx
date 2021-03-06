import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./explore.css";
import { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Originals() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 120;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/ImdbOriginals")
            .then((res) => res.json())
            .then((data) => {
                setcoming(data);
            })
    }

    return (
        <div>
            <div className="head vl">
                <h1 >IMDb Originals <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            /></h1>
            </div>
            <p className="head-p">Celebrity interviews, trending entertainment stories, and expert analysis</p>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={10}
                    leftChevron={<button className="control-l">{'<'}</button>}
                    rightChevron={<button className="control-r">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {coming.map((e) => (
                        <div>
                            <a href={e.link} target="_blank">
                                <div className="crousel" style={{ width: 440, height: 320, background: '#000' }}>
                                    <div>
                                        <i className="play_btn fa fa-play-circle-o fa-2x"></i>
                                        <h4 className="play_txt">{e.duration}</h4>
                                        <img className="original_img" src={e.thumbnail} /></div>
                                    <h5 className="original_txt">{e.title}</h5>
                                </div>
                            </a>
                        </div>
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Originals;