import '../Styles/screen3.css'
import {useState} from "react";

function ScreenThree (){
    const[gender,setGender]=useState<string>('Gender')

    return(
        <>
            <div className='third-screen'>
                <div className='third-screen-container'>
                    <p className='third-screen-container-title'>Write us for real presents</p>
                    <form className='third-screen-container-form'>
                        <input className='third-screen-container-form-input' placeholder='Name' type='text'/>
                        <input className='third-screen-container-form-input' placeholder='Phone' type='tel'/>
                        <select className='dropbox'>
                            <option className='dropbox-menu'>{gender}</option>
                            <option className='dropbox-menu' onClick={()=>setGender('Male')}> Male</option>
                            <option className='dropbox-menu' onClick={()=>setGender('Female')}>Female</option>
                        </select>
                        <input className='third-screen-container-form-input' placeholder='Email' type='email'/>
                        <input className='third-screen-container-form-input wish' placeholder='Your wish' type='text'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ScreenThree;