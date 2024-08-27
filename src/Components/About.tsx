import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/About.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";

function About() {
    return (
        <div className={"about-wrapper"}>
            <Header title={"about"}/>
            <TopNav title={"about"}/>
            <div className={"about"}>ABOUT
            </div>
            <Footer/>
        </div>
    )
}
export default About;