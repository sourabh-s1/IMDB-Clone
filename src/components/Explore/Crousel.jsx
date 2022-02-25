import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
import "./explore.css";
import { useEffect } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Crousel() {
    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [coming, setcoming] = useState([]);
    const chevronWidth = 120;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/ComingSoon")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                setcoming(data)
            })
    }

    return (
        <div>
            <div className="head vl">
                <h1 >Coming Soon to Theatres <ArrowForwardIosIcon
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
                            <div className="crousel" style={{ width: 440, height: 300, background: '#000' }}>
                                <div><img className="crousel_img" src={e.image} /></div>
                                <div className="details">
                                   <p className="p"><i className="fa fa-bookmark"></i> {e.releaseState}<br /></p>
                                    <h5 className="h4">{e.title}</h5>
                                </div>

                            </div>
                            {/* <div style={{ height: 200, background: '#EEE' }}>Second card</div>
            <div style={{ height: 200, background: '#EEE' }}>Third card</div>
            <div style={{ height: 200, background: '#EEE' }}>Fourth card</div> */}
                        </div>
                    ))}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default Crousel;