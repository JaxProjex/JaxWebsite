import React from 'react';
import '../CSS/Footer.css';

function Header(props:any) {
    return (
        <div className={"footer"}>
            <div className={"footer-row"}>
            <div className={"footer-content-container"} onClick={() => {window.open("https://google.com")}}>
                <span className={"footer-content-icon"}>IMG1</span><span className={"footer-content-text"}> = LinkedIn</span>
            </div>

            <div className={"footer-content-container"} onClick={() => {window.open("https://google.com")}}>
                <span className={"footer-content-icon"}>IMG2</span><span className={"footer-content-text"}> = GitHub</span>
            </div>

            <div className={"footer-content-container"} onClick={() => {window.open("https://google.com")}}>
                <span className={"footer-content-icon"}>IMG3</span><span className={"footer-content-text"}> = Portfolio</span>
            </div>

            <div className={"footer-content-container"} onClick={() => {window.open("https://google.com")}}>
                <span className={"footer-content-icon"}>IMG4</span><span className={"footer-content-text"}> = Resume</span>
            </div>
            </div>
        </div>
    )
}
export default Header