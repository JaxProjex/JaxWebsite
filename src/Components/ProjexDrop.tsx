import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/ProjexDrop.css';

function ProjexDrop(props:any) {
            return (
                    <div className={"projex-drop-container"}>
                        <div className={"projex-drop-text"}>{props.project}</div>
                    </div>
            )
        
    }

export default ProjexDrop;