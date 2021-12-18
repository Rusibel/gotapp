import React from 'react';
import styled from 'styled-components';
import img from './error.jpg'

const Image = styled.img`
    display: block;
    margin: auto auto;
`
const TextError = styled.span`
    display: flex;
    justify-content: center;
`




const ErrorMessage = () => {
    return (
        <>
            {/* <img src={process.env.PUBLIC_URL+'/img/error.jpg'} alt='error'></img><br></br> */}
            <Image src={img} alt='error'></Image><br></br>
            <TextError>Something goes wrong, mathafucker</TextError>
        </>

    )
}

export default ErrorMessage