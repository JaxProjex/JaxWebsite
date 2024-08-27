import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/HomeModal.css';

function HomeModal(props:any) {

    function handleAttr() {
        switch (props.attr) {
            case 1:
                return `atribute 11111111111111111`
            case 2:
                return `attribute 22222222222222222`
            case 1:
                return `atribute 3333333333333`
            case 2:
                return `attribute 444444444444`
            default:
                return
        }
    }

    function handleTrait() {
        switch (props.trait) {
            case 1:
                return `trait 11111111111111111`
            case 2:
                return `trait 22222222222222222`
            case 1:
                return `trait 33333333`
            case 2:
                return `trait 444444444`
            default:
                return
        }
    }

    function handleHobby() {
        switch (props.hobby) {
            case 1:
                return `hobby 11111111111111111`
            case 2:
                return `hobby 22222222222222222`
            case 3:
                return `hobby 3333333333333333333`
            case 4:
                return `hobby 444444444444444444`
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