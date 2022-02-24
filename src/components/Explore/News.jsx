import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./style.css";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

function News() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 70;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/Poster")
            .then((res) => res.json())
            .then((data) => {
                console.log("data.editor",data)
                {
                    data.map((e) => {
                        setcoming(e.news);
                    })
                }

                //setcoming(data)
                console.log("coming",coming);
            })
    }

    return (
        <div>
            <div className="head vl">
                <h2 >Top News </h2>
            </div>
            <div style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={3}
                    gutter={10}
                    leftChevron={<button className="control">{'<'}</button>}
                    rightChevron={<button className="control">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {coming.map((e) => (
                        <div>
                            <a href={e.link} target="_blank">
                                <div className="crousel" style={{ width: 440, height: 200, background: '#000' }}>
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