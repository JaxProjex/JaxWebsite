import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Qa.css';

function QaDrop(props:any) {

    const [revealDrop, setReveal] = useState(false);
    const id:number = props.id;

    function handleReveal() {
        if (revealDrop && props.revealOpen === id) {
            return (
                <div className={"qa-drop-container-reveal-parent"}>
                    <div className={"qa-drop-container-reveal"}>
                        <div className={"qa-drop-text"}>{props.question}?...</div>
                        <div className={"qa-drop-icon"} onClick={() => {props.setRevealOpen(0);setReveal(false)}}>X</div>
                    </div>
                    <div className={"qa-drop-answer-reveal"}>{props.answer}</div>
                </div>
            )
        } else {
            return (
                <div className={"qa-drop-container"}>
                    <div className={"qa-drop-text"}>{props.question}?...</div>
                    <div className={"qa-drop-icon"} onClick={() => {props.setRevealOpen(id); setReveal(true)}}>V</div>
                </div>
            )
        }
    }




        return (
            handleReveal()
        )
}
export default QaDrop