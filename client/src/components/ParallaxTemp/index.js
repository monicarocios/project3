import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from "react-router-dom";


const ParallaxTemp = () => (
    <div>
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
            <div style={{ height: '20px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>

        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('./binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}></div>

        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./red_background.png')}
            bgImageAlt="secondImage"
            strength={-200}

        >
            <div style={{ height: '300px', marginTop: "50px" }}>
                <div class="card transparent">

                    <div class="card-content white-text center-align">
                        <h3 class="">So you know you code?</h3>
                        <h5>Sharpen your coding skills with <strong>SYKYC</strong></h5>
                        <h6>Coding quizzes in the industry's leading programming languages.</h6>
                    </div>
                    <div class="card-action center-align">
                        <Link to="/login" className="waves-effect waves-light btn-large red darken-4 white-text"><i class="material-icons right">arrow_forward</i>Get Started</Link>
                    </div>

                </div>
            </div>
        </Parallax>

        <Parallax
            blur={0}
            bgImage={require('./binary_background.jpg')}
            bgImageAlt="firstImage"
            strength={200}
        >
            <div style={{ height: '80px' }}></div>

        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={300}>
        <div style={{ height: '100px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>

        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./red_background.png')}
            bgImageSize={{width:'200px'}}
            bgImageAlt="secondImage"
            strength={-200}
        >

            <div style={{ height: '400px', marginTop: "50px" }} >
                <div class="card transparent">
                    <div class="row">
                        <div class="card-panel grey darken-2 col m3">
                            <div class="card-image">
                                <img src="./html_quiz.png" alt="html_quiz"></img>
                                <span class="card-title">Card Title</span>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="http://www.google.com">This is a link</a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div class="col s4">

                    </div>
                    <div class="col s4">

                    </div>

                </div>
            </div>
        </Parallax>

        {/* -----custom background element-----*/}
        <Parallax strength={300}>
        <div style={{ height: '20px' }}></div>
            <Background className="custom-bg">
                <img src="https://hdblackwallpaper.com/wallpaper/2015/07/red-and-black-wallpaper-for-computer-10-free-wallpaper.jpg" alt="fill murray" />
            </Background>
        </Parallax>


        </div>

);

export default ParallaxTemp;