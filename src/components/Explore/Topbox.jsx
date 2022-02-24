import { useEffect, useState } from "react";
import './style.css';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import 'font-awesome/css/font-awesome.min.css';

export const TopBox = () => {

    const [box, setbox] = useState([])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#000",
            }
        },
    });

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("https://secure-tor-86460.herokuapp.com/BoxOffice")
            .then((res) => res.json())
            .then((data) => {
                //console.log("data.editor",data)
                //{
                //    data.map((e) => {
                //        setbox(e.box);
                //    })
                //}
                setbox(data);
                //setcoming(data)

            })
    }

    return (
        <div>
            <div className="head_box vl">
                <h2 >Top Box office</h2>
            </div>
            <ThemeProvider theme={darkTheme}>
                <div className="topbox">
                    <ol >
                        {box.map((e, i) => {
                            return (
                                <div className="card" style={{ backgroundColor: (i % 2 == 0) ? "#000" : "#202020" }}>
                                    <li>
                                        <div><h4 className="h4"><i className="fa fa-bookmark"></i>{e.title}</h4></div>
                                        <div><p className="p">{e.weekend}</p></div>
                                    </li>
                                </div>
                            )
                        })}
                    </ol>
                </div>
            </ThemeProvider>
        </div>
    )
}

