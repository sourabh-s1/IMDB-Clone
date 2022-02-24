import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./style.css";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

function Crousel() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 90;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://localhost:3001/editor")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                setcoming(data)
            })
    }

    return (
        <div>
            <div className="head vl">
                <h2 >Editor Picks </h2>
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
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Crousel;