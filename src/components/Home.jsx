import React from "react";
import "./Home.css";

import bootstrap from "../images/bootstrap-4.svg";
import css from "../images/css-3.svg";
import go from "../images/golang-1.svg";
import html from "../images/html-1.svg";
import jquery from "../images/jquery.svg";
import js from "../images/logo-javascript.svg";
import nodejs from "../images/nodejs-1.svg";
import python from "../images/python-5.svg";
import react from "../images/react-2.svg";

function Home() {
    React.useEffect(() => {
        /*responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner-img").src = bannerImg;
                document.querySelector(".left1").src = left1;
                document.querySelector(".left2").src = left2;
                document.querySelector(".left3").src = left3;
                document.querySelector(".right3").src = right3;
                document.querySelector(".gallery1").src = gallery1;
                document.querySelector(".gallery2").src = gallery2;
                document.querySelector(".gallery3").src = gallery3;
                document.querySelector(".gallery4").src = gallery4;
            } else {
                document.querySelector(".banner-img").src = bannerImgDesk;
                document.querySelector(".left1").src = left1Desk;
                document.querySelector(".left2").src = left2Desk;
                document.querySelector(".left3").src = left3Desk;
                document.querySelector(".right3").src = right3Desk;
                document.querySelector(".gallery1").src = gallery1Desk;
                document.querySelector(".gallery2").src = gallery2Desk;
                document.querySelector(".gallery3").src = gallery3Desk;
                document.querySelector(".gallery4").src = gallery4Desk;
            }
        }
        window.addEventListener('resize', responsiveImgs);*/
    })

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <h1 className="hello">HELLO.</h1>
                    <h1 className="im-samuel">I'M SAMUEL.</h1>
                    <h2 className="banner-desc">I design and develop things for the web.</h2>
                </div>
                <div className="first-cont">
                    <div className="left-side1">
                        <p className="desc-p">I'm <strong className="desc-strong">Samuel Rivera</strong>, a Web Developer based in Medellín, Colombia. I love building Web Apps.</p>
                        <p className="desc-touch">Get in touch <strong className="desc-email">samuelrivba@gmail.com</strong></p>
                    </div>
                    <div className="right-side1">
                        
                    </div>
                </div>
                <div className="second-cont">
                    <div className="left-side2">
                        <h1 className="bg-title">BACKGROUND</h1>
                    </div>
                    <div className="right-side2">
                        <p className="bg-text">I graduated from the Universidad Pontificia Bolivariana in 2021 after completing a bachelor in Systems Engineering.
                        </p>
                        <p className="bg-text2">As a Web Developer, I am proficient in engineering, from setting server-side code to integrating APIs; and the design, with a keen eye for UI/UX and responsiveness to create beautiful products. I am always driven to build scalable, efficient, maintainable applications that provide engaging user experiences.</p>
                        <p className="bg-text3">Out of my profession. I like learning new technologies through courses and playing video games occassionally.</p>
                    </div>
                </div>
                <div className="third-cont">
                    <div className="left-side3">
                        <h1 className="front-end">Front-End</h1>
                        <img className="skill-logo" src={html} alt="skill-logo"></img>
                        <h2 className="skill-title">HTML5</h2>
                        <img className="skill-logo" src={css} alt="skill-logo"></img>
                        <h2 className="skill-title">CSS3</h2>
                    </div>
                    <div className="right-side3">
                        <h1 className="back-end">Back-End</h1>
                        <img className="skill-logo" src="" alt="skill-logo"></img>
                        <h2 className="skill-title">Node JS</h2>
                    </div>
                </div>
                <div className="fourth-cont">
                    <div className="fourth1">
                        <img className="gallery1" src="" alt="gallery1"></img>
                    </div>
                    <div className="fourth2">
                        <img className="gallery2" src="" alt="gallery2"></img>
                    </div>
                    <div className="fourth3">
                        <img className="gallery3" src="" alt="gallery3"></img>
                    </div>
                    <div className="fourth4">
                        <img className="gallery4" src="" alt="gallery4"></img>
                    </div>
                </div>
                <div className="footer">
                    <h2 className="sunnyside-foot">sunnyside</h2>
                    <a href="/" className="link">About</a>
                    <a href="/" className="link">Services</a>
                    <a href="/" className="link">Projects</a>
                    <br />
                    <img className="icon" src="" alt="fb-icon"></img>
                    <img className="icon" src="" alt="ig-icon"></img>
                    <img className="icon" src="" alt="tw-icon"></img>
                    <img className="icon" src="" alt="pi-icon"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;