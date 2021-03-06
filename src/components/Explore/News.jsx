import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./explore.css";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function News() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 120;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/ImdbNews")
            .then((res) => res.json())
            .then((data) => {
                setcoming(data);
            })
    }

    return (
        <div>
            <div className="head vl">
                <h1 >Top News <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            /></h1>
            </div>
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
                                <div className="crousel" style={{ width: 420, height: 200, background: '#000' }}>
                                    <div className="news_div">
                                        <img className="news_img" src={e.image} /><h5 className="news_txt">{e.text}</h5>
                                    </div>

                                </div>
                            </a>
                        </div>
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default News;