import'../Styles/screen2.css'


function ScreenTwo(){
    return(
        <>
            <div className='second-screen'>
                <div className='second-screen-presents'>
                    <p className='second-screen-presents-title'>At least somewhere you can feel new year atmosphere</p>
                    <p className='second-screen-presents-text'>Choose your present:</p>
                    <div className='second-screen-presents-buttons'>
                        <div className='second-screen-presents-button sock'></div>
                        <div className='second-screen-presents-button cap'></div>
                        <div className='second-screen-presents-button bag'></div>
                    </div>
                </div>
                <div className='second-screen-description'>
                    <div className='second-screen-description-sock'>
                        <div className='second-screen-description-sock block'>
                            <p className='second-screen-description-sock-title'>Best sock ever</p>
                            <p className='second-screen-description-sock-text'>Reuglar sock have no present inside
                                Lorem Ipsum is simply dumm  y text of the printing and types etting industry. Lorem
                            </p>
                        </div>
                        <div className='second-screen-description-sock-img'></div>
                    </div>
                    <div className='second-screen-description-cap'>

                    </div>
                    <div className='second-screen-description-bag'>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreenTwo;