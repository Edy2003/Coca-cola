import '../Styles/screen1.css'
import WebFont from 'webfontloader';

import {useEffect} from "react";

function ScreenOne (){

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Risque']
            }
        });
    }, []);

    return(
        <>
            <div className='first-screen'>
                <div className='first-screen-top-bar'>
                    <div className='first-screen-top-bar-logo'></div>
                    <div className='first-screen-top-bar-buttons'>
                        <div className='first-screen-top-bar-menu'>
                            <a className='top-bar-menu-links'>Main</a>
                            <a className='top-bar-menu-links'>About</a>
                            <a className='top-bar-menu-links'>Products</a>
                            <a className='top-bar-menu-links'>Contacts</a>
                        </div>
                        <div className='first-screen-top-bar-burger'></div>
                    </div>
                </div>

                <div className='first-screen-poster'>
                    <div className='first-screen-block'>
                        <p className='first-screen-block-title'>Main Site Title</p>
                        <p className='first-screen-block-text'>Lorem ipsum descripsum</p>
                        <a className='first-screen-block-button'>Call action</a>
                    </div>
                    <div className='first-screen-poster-cloud'>
                        <p className='first-screen-poster-cloud-text'>How how how !!!</p>
                        <p className='first-screen-poster-cloud-text'>Like it?</p>
                        <p className='first-screen-poster-cloud-text'>Scroll down for more !</p>
                    </div>
                    <div className='first-screen-poster-dedcola'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreenOne;