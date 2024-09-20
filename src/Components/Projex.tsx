import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Projex.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import ProjexDrop from "../Components/ProjexDrop";

function Projex() {

    const [revealOpen, setRevealOpen] = useState(0);

    function handleClick(num:number) {
        window.alert(num)
        setRevealOpen(num);
    }

    return (
        <div className={"projex-wrapper"}>
            <Header title={"projex"}/>
            <TopNav title={"projex"}/>
            <div className={"projex"}>
                if (revealOpen === 0) { 
                <div className={"projex-grid-container"}>
                    <ProjexDrop project={"Manifest Application"} onClick={() => handleClick(1)}/>
                    <ProjexDrop project={"Skyview-RPi"} onClick={() => handleClick(2)}/>
                    <ProjexDrop project={"ATAK DACO Plugin"} onClick={() => handleClick(3)}/>
                    <ProjexDrop project={"75th Ranger Regiment Website"} onClick={() => handleClick(4)}/>
                    <ProjexDrop project={"Node-Red TAK integrations"} onClick={() => handleClick(5)}/>
                    <ProjexDrop project={"Kismet ATAK Companion"} onClick={() => handleClick(6)}/>
                </div>
                } else {
                <div className={"projex-display-container"}>
                {revealOpen === 1 && <>hello</>}
                {revealOpen === 2 && <>greetigs</>}
                {revealOpen === 3 && <>hi</>}
                {revealOpen === 4 && <>hola</>}
                {revealOpen === 5 && <>aloha</>}
                {revealOpen === 6 && <>hey</>}
                </div>
                }
            </div>
            <Footer/>
        </div>
    )
}
export default Projex;