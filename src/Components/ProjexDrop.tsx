import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/ProjexDrop.css';

function ProjexDrop(props:any) {

    const [revealDrop, setReveal] = useState(false);

    const id:number = props.id;

    function handleReveal() {
        if (revealDrop && props.revealOpen === id) {
            return (
                    <div className={"projex-drop-container-reveal"}>
                        <div className={"projex-drop-text"}>{props.project}</div>
                        <div className={"projex-drop-icon-x"} onClick={() => {props.setRevealOpen(0);setReveal(false)}}>X</div>
                    </div>
            )
        } else {
            return (
                <div className={"projex-drop-container"} onClick={() => {props.setRevealOpen(id); setReveal(true)}}>
                    <div className={"projex-drop-text"}>{props.project}</div>
                </div>
            )
        }
    }




    return (
        handleReveal()
    )
}
export default ProjexDrop;