import React from "react";
import "./FooterStyles.css";
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTwitch } from 'react-icons/si';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const Footer = () => {

    return (

        <div>
            <div id="footer-box">
                <div id="footer-icon">
                    <div className="icon-margin">
                        <a href="https://www.facebook.com/imdb" target="_blank"><AiFillFacebook color={"white"} size={27} /></a>
                    </div>
                    <div className="icon-margin">
                        <a href="https://www.instagram.com/imdb/" target="_blank"><AiOutlineInstagram color={"white"} size={27} /></a>
                    </div>
                    <div className="icon-margin">
                        <a href="https://www.twitch.tv/IMDb" target="_blank"> <SiTwitch color={"white"} size={27} /></a>
                    </div>
                    <div className="icon-margin">
                        <a href="https://twitter.com/imdb" target="_blank"> <AiOutlineTwitter color={"white"} size={27} /></a>
                    </div>
                    <div className="icon-margin">
                        <a href="https://www.youtube.com/imdb" target="_blank">  <AiFillYoutube color={"white"} size={27} /></a>
                    </div>
                </div>


                <div id="second-line">

                    <div>Get the IMDb App <a href="#"><HiOutlineExternalLink /></a></div>
                    <div> Help <a href="#"><HiOutlineExternalLink /></a></div>
                    <div>Site Index <a href="#"><HiOutlineExternalLink /></a></div>
                    <div>ImDbPro <a href="#"><HiOutlineExternalLink /></a></div>
                    <div>Box Office Mojo <a href="#"><HiOutlineExternalLink /></a></div>
                    <div>IMDb Developers <a href="#"><HiOutlineExternalLink /></a></div>

                </div>



                <div id="third-line">

                    <div>Press Room</div>
                    <div> Advertising <a href="#"><HiOutlineExternalLink /></a></div>
                    <div>Jobs<a href="#"><HiOutlineExternalLink /></a></div>
                    <div>Condition Of Use</div>
                    <div>Privacy Policy</div>
                    <div>Interest-Based Ads <a href="#"><HiOutlineExternalLink /></a></div>
                </div>


                <div id="last-line">
                    <div>an <strong>amazon</strong> company</div>
                    <div style={{ marginTop: "20px", paddingBottom: "5px" }}><p>© 1990-2022 by IMDb.com, Inc.</p></div>
                </div>
            </div>
        </div>


    );
};