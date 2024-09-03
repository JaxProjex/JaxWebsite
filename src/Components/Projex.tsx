import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Projex.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import ProjexDrop from "../Components/ProjexDrop";

function Projex() {
    return (
        <div className={"projex-wrapper"}>
            <Header title={"projex"}/>
            <TopNav title={"projex"}/>
            <div className={"projex"}>
                <div className={"projex-grid-container"}>
                <ProjexDrop project={"Manifest Application"}/>
                    <ProjexDrop project={"Skyview-RPi"}/>
                    <ProjexDrop project={"ATAK DACO Plugin"}/>
                    <ProjexDrop project={"75th Ranger Regiment Website"}/>
                    <ProjexDrop project={"Node-Red TAK integrations"}/>
                    <ProjexDrop project={"Kismet ATAK Companion"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Projex;