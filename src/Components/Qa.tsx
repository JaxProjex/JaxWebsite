import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Qa.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import QaDrop from "./QaDrop";

function Qa() {

    const [revealOpen, setRevealOpen] = useState(0);

    return (
        <div className={"qa-wrapper"}>
            <Header title={"qa"}/>
            <TopNav title={"qa"}/>
            <div className={"qa"}>
                <QaDrop question={"something this is a question"} answer={"this is my answer to the interview question its long and complex and good"} id={1} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>
                <QaDrop question={"something another question"} answer={"this is my answer to the interview question its long and complex and good"} id={2} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>
                <QaDrop question={"something specific question"} answer={"this is my answer to the interview question its long and complex and good"} id={3} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>
                <QaDrop question={"something rare question"} answer={"this is my answer to the interview question its long and complex and good"} id={4} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>
                <QaDrop question={"something situation question"} answer={"this is my answer to the interview question its long and complex and good"} id={5} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>
                <QaDrop question={"something workplace a question"} answer={"this is my answer to the interview question its long and complex and good"} id={6} revealOpen={revealOpen} setRevealOpen={setRevealOpen}/>

            </div>
            <Footer/>
        </div>
    )
}
export default Qa;