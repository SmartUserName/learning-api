import React from 'react';
import { urlSpinnerImg } from './External-imgs';


const Loading = () =>{
    return(
        <div align="center" >
            <img alt="" src={urlSpinnerImg} />
            <p>Loading. Please wait</p>
        </div>
    )
};

export  { Loading };