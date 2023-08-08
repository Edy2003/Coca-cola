import'../Styles/screen2.css'
import {useState} from "react";


function ScreenTwo(){
    const[visible,setVisible]=useState<string>('sock')

    function changeVisibility (visible:string){
        setVisible(visible);
    }

    return(
        <>
            <div className='second-screen'>
                <div className='second-screen-presents'>
                    <p className='second-screen-presents-title'>At least somewhere you can feel new year atmosphere</p>
                    <p className='second-screen-presents-text'>Choose your present:</p>
                    <div className='second-screen-presents-buttons'>
                        <div className={'second-screen-presents-button sock'+(visible === 'sock'?' active':'')} onClick={()=>changeVisibility('sock')}></div>
                        <div className={'second-screen-presents-button cap'+(visible === 'cap'?' active':'')} onClick={()=>changeVisibility('cap')}></div>
                        <div className={'second-screen-presents-button bag'+(visible === 'bag'?' active':'')} onClick={()=>changeVisibility('bag')}></div>
                    </div>
                </div>
                <div className='second-screen-description'>
                    <div className={visible === 'sock'?'second-screen-description-item':'hidden'}>
                        <div className='block'>
                            <p className='second-screen-description-title'>Best sock ever</p>
                            <p className='second-screen-description-text'>Reuglar sock have no present inside
                                Lorem Ipsum is simply dumm  y text of the printing and types etting industry. Lorem
                            </p>
                        </div>
                        <div className='second-screen-description-sock-img'></div>
                    </div>
                    <div className={visible === 'cap'?'second-screen-description-item':'hidden'}>
                        <div className='block'>
                            <p className='second-screen-description-title'>Best cap ever</p>
                            <p className='second-screen-description-text'>Reuglar cap have no present inside
                                Lorem Ipsum is simply dumm  y text of the printing and types etting industry. Lorem
                            </p>
                        </div>
                        <div className='second-screen-description-cap-img'></div>
                    </div>
                    <div className={visible === 'bag' ?'second-screen-description-item':'hidden'}>
                        <div className='block'>
                            <p className='second-screen-description-title'>Best bag ever</p>
                            <p className='second-screen-description-text'>Reuglar bag have no present inside
                                Lorem Ipsum is simply dumm  y text of the printing and types etting industry. Lorem
                            </p>
                        </div>
                        <div className='second-screen-description-bag-img'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreenTwo;