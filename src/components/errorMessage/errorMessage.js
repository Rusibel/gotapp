import React from 'react';
import './errorMessage.css'
import img from './error.jpg'


const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL+'/img/error.jpg'} alt='error'></img><br></br> */}
            <img src={img} alt='error'></img><br></br>

            <span>Something goes wrong, mathafucker</span>
        </>

    )
}

export default ErrorMessage