import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../CSS/Home.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import HomeModal from "../Components/HomeModal";

function Home() {

    const [attr, setAttr] = useState(0) //option 0,1,2
    const [trait, setTrait] = useState(0)
    const [hobby, setHobby] = useState(0)
    const [modalAttr, setModalAttr] = useState(0)
    const [modalTrait, setModalTrait] = useState(0)
    const [modalHobby, setModalHobby] = useState(0)

    const navigate = useNavigate();

    function handleAttrArrow(num:number) {
        if (num < 0 || num > 1) {
            setAttr(0);
        } else {
            setAttr(num);
        }
    }

    function handleTraitArrow(num:number) {
        if (num < 0 || num > 1) {
            setTrait(0);
        } else {
            setTrait(num);
        }
    }

    function handleHobbyArrow(num:number) {
        if (num < 0 || num > 2) {
            setHobby(0);
        } else {
            setHobby(num);
        }
    }

    function handleModalTrait(num:number) {
        setModalTrait(num)
    }

    function handleModalAttr(num:number) {
        setModalAttr(num)
    }

    function handleModalHobby(num:number) {
        setModalHobby(num)
    }


    return (
        <div className={"home-wrapper"}>
        <Header title={"home"}/>
        <TopNav title={"home"}/>
        <div className={"home"}>

            {modalTrait > 0 ?
                <div className={"home-attr-container"}>
                <HomeModal trait={modalTrait} setModalTrait={setModalTrait}/>
                </div>
                :
                <div className={"home-attr-container"}>

                    {trait === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(1)}>Initiating Improvements</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(2)}>Technological Innovation</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(3)}>Team Problem Solving</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleTraitArrow(trait + 1)
                        }}> {`>`} </div>
                    </>
                    }
                    {trait === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleTraitArrow(trait - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(4)}>Cross-Organization Collaboration</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(5)}>Technology Integration</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(6)}>Leadership</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }
                </div>
            }

            {modalAttr > 0 ?
                <div className={"home-attr-container"}>
                    <HomeModal attr={modalAttr} setModalAttr={setModalAttr}/>
                </div>
                :
                <div className={"home-attr-container"}>
                    {attr === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(1)}>HTML</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(2)}>CSS</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(3)}>React</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(4)}>Javascript</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(5)}>Typescript</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(6)}>SQL</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleAttrArrow(attr + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {attr === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleAttrArrow(attr - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(7)}>Java</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(8)}>Android</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(9)}>Python</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(10)}>Bash</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }
                </div>
            }

            {modalHobby > 0 ?
                <div className={"home-attr-container"}>
                    <HomeModal hobby={modalHobby} setModalHobby={setModalHobby}/>
                </div>
                :
                <div className={"home-attr-container"}>
                    {hobby === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(1)}>Cloud Servers</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(2)}>Home Lab</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(3)}>Electronics</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(4)}>Automation</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {hobby === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(5)}>Photography</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(6)}>Fabrication</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(7)}>Surveillance</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(8)}>Red Teaming</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {hobby === 2 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(9)}>MANET</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(10)}>TAK</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(11)}>SDRs</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(12)}>COTs</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }

                </div>
            }
        </div>
            <Footer/>
        </div>
    );
}

export default Home;