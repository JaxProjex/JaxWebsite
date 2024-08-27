import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Projex.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";

function Projex() {
    return (
        <div className={"projex-wrapper"}>
            <Header title={"projex"}/>
            <TopNav title={"projex"}/>
            <div className={"projex"}>PROJEX
            </div>
            <Footer/>
        </div>
    )
}
export default Projex;