import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Contact.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";

function Contact() {
    return (
        <div className={"contact-wrapper"}>
            <Header title={"contact"}/>
            <TopNav title={"contact"}/>
            <div className={"contact"}>CONTACT
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;