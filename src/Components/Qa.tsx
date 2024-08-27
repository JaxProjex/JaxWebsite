import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Qa.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";

function Qa() {
    return (
        <div className={"qa-wrapper"}>
            <Header title={"qa"}/>
            <TopNav title={"qa"}/>
            <div className={"qa"}>CONTACT
            </div>
            <Footer/>
        </div>
    )
}
export default Qa;