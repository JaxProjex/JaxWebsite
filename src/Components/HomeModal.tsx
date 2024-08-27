import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/HomeModal.css';

function HomeModal(props:any) {


    function handleTrait() {
        switch (props.trait) {
            case 1:
                return `trait Initiating Improvements: `
            case 2:
                return `trait Technological Innovation:`
            case 3:
                return `trait Team Problem Solving:`
            case 4:
                return `trait Cross-Organization Collaboration:`
            case 5:
                return `trait Technology Integration:`
            case 6:
                return `trait Leadership:`
            default:
                return
        }
    }

    function handleAttr() {
        switch (props.attr) {
            case 1:
                return `atribute HTML:`
            case 2:
                return `attribute CSS:`
            case 3:
                return `atribute React:`
            case 4:
                return `attribute Javascript:`
            case 5:
                return `atribute Typescript:`
            case 6:
                return `attribute SQL:`
            case 7:
                return `attribute Java:`
            case 8:
                return `attribute Android:`
            case 9:
                return `attribute Python:`
            case 10:
                return `attribute Bash:`
            default:
                return
        }
    }

    function handleHobby() {
        switch (props.hobby) {
            case 1:
                return `hobby Cloud Servers:`
            case 2:
                return `hobby Home Lab:`
            case 3:
                return `hobby Electronics:`
            case 4:
                return `hobby Automation:`
            case 5:
                return `hobby Photography:`
            case 6:
                return `hobby Fabrication:`
            case 7:
                return `hobby Surveillance:`
            case 8:
                return `hobby Red Teaming:`
            case 9:
                return `hobby MANET:`
            case 10:
                return `hobby TAK:`
            case 11:
                return `hobby SDRs:`
            case 12:
                return `hobby COTs:`
            default:
                return
        }
    }



    return (
        <>
        <div className={"modal-text-container"}>
            <div className={"modal-text"}>
                {handleAttr()}
                {handleTrait()}
                {handleHobby()}
            </div>

        </div>
            <div className={"modal-button-container"}>
                {props.attr > 0 && <div className={"modal-button"} onClick={() => props.setModalAttr(0)}>X</div>}
                {props.trait > 0 && <div className={"modal-button"} onClick={() => props.setModalTrait(0)}>X</div>}
                {props.hobby > 0 && <div className={"modal-button"} onClick={() => props.setModalHobby(0)}>X</div>}
            </div>
            </>
    )
}
export default HomeModal;