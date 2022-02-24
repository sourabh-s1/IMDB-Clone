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
    const chevronWidth = 70;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://localhost:3001/coming")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                setcoming(data)
            })
    }

    return (
        <div>
            <div className="head vl">
                <h2 >Coming Soon to Theatres </h2>
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