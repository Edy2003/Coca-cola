import '../Styles/screen3.css'

function ScreenThree (){
    return(
        <>
            <div className='third-screen'>
                <div className='third-screen-container'>
                    <p className='third-screen-container-title'>Write us for real presents</p>
                    <form className='third-screen-container-form'>
                        <input className='third-screen-container-form-input' placeholder='Name' type='text'/>
                        <input className='third-screen-container-form-input' placeholder='Phone' type='tel'/>
                        <input className='third-screen-container-form-input' placeholder='Gender' type='text'/>
                        <input className='third-screen-container-form-input' placeholder='Email' type='email'/>
                        <input className='third-screen-container-form-input' placeholder='Your wish' type='text'/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ScreenThree;