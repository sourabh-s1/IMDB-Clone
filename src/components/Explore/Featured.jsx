import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./explore.css";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Featured() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 450;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/featured")
            .then((res) => res.json())
            .then((data) => {
                setcoming(data)
                //setcoming(data)
            })
    }

    return (
        <div >
            <div className="head vl">
                <h1 >Featured Today <ArrowForwardIosIcon
              // sx={{ color: "#F5C519" }}
              className="arrowColor"
            /></h1>
            </div>
            <div id="featured" style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={10}
                    leftChevron={<button className="control-fl">{'<'}</button>}
                    rightChevron={<button className="control-fr">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {coming ? coming.map((e) => (
                        <div>
                            <a href={e.link} target="_blank">
                                <div className="crousel" style={{ width: 440, height: 300, background: '#000' }}>
                                    <div>
                                        <i className={e.faclass}></i>
                                        <h4 className="caption">{e.caption}</h4>
                                        <img className="editor_img" src={e.image1} />
                                        <img className="editor_img" src={e.image2} />
                                        <img className="editor_img" src={e.image3} />
                                    </div>
                                    <h5 className="editor_txt">{e.title}</h5>
                                </div>
                            </a>
                        </div>
                    )) : null }
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Featured;