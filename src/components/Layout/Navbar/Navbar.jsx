import React, { useCallback } from "react";
import "./Navbar.css";
import { useState } from "react";

import { IoIosMenu } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { BsFillCaretDownFill } from 'react-icons/bs';
import {Link} from 'react-router-dom'

export function Navbar() {

    const input_text = {
        height: "28px",
        width: "600px",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        marginLeft: "-1.5px",
        marginBottom: "5px",
        padding: "-2px"
    };

    const select = {
        borderTopLeftRadius: "7px",
        borderBottomLeftRadius: "7px",
        height: "33px",
        width: "55px"
    }

    const [search, setSearch] = useState([]);

    const debounce = (func) => {
        let timer;
        return function (...args){
            const context = this;

            if(timer) clearTimeout(timer)
            timer = setTimeout ( () => {
                timer = null;
                func.apply(context,args);
            },500);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        fetch(`https://imdb-api.com/en/API/Search/k_mf6baj9v/${value}`)
            .then(res => res.json())
            .then(json => setSearch(json.results));
    };

    const optimiseVersion = useCallback(debounce(handleChange));

    return (
        <div>

            <div id="nav_box">
                <Link to="/">
                <div id="nav_logo" >
                    <img src="https://variety.com/wp-content/uploads/2017/02/imdb1.png?w=681&h=383&crop=1" alt="" />
                </div>
                </Link>

                <div id="nav_menu_box">

                    <div>
                        <IoIosMenu size={27} color={"grey"} />
                    </div>

                    <div id="nav_menu">
                        <strong> Menu </strong>
                    </div>

                </div>



                <div id="nav_select">
                    <div>
                        <select style={select} name="" id=""> <option>All</option></select>
                    </div>

                    <div>
                        <input style={input_text} type="text" onChange={optimiseVersion} placeholder="Search IMDb" />
                    </div>

                    <div id="input_search">
                        <a href=""> <BsSearch color={"grey"} /> </a>
                    </div>
                </div>


                <div id="nav_prodiv">
                    <strong>IMdbPro</strong>
                </div>


                <div id="dummy_line">

                </div>


                <a href="">   <div id="nav_watchlist_box">
                    <div>
                        <BsFillBookmarkPlusFill color={"grey"} size={20} />
                    </div>
                    <div id="nav_watchlist">
                        Watchlist
                    </div>
                </div> </a>


                <div id="nav_login">

                    <Link to="login"> Sign In </Link>
                </div>


                <div id="nav_lang_box">
                    <div id="nav_lang">
                        <strong> EN </strong>
                    </div>

                    <div style={{ cursor: 'pointer' }}>
                        <BsFillCaretDownFill color={"white"} />
                    </div>
                </div>



            </div>

            <div id="input-result">

                {search?.length > 0 &&
                    <div className={`autocomplete`}>
                        {search?.map((el, i) =>
                            <div key={i} className={`autocompleteItems`}>
                                <div className={`result-div-main`}>
                                    <div id={`result-div2`}><img src= {el.image} alt="" /></div>
                                    <div id={`result-div1`}>{el.title} <br/>
                                              {el.description}
                                    </div>

                                </div>
                            </div>
                        )}


                    </div>
                }

            </div>


        </div>

    );
}
