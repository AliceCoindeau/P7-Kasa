import React, { useState } from 'react';
import "./Wrapper.css"

const Wrapper = (props) => {
    const[isVisible, setIsvisible] = useState(true);
    const handleClick =() =>{
        setIsvisible(!isVisible)
    }
    return (
        <div className='global-wrapper'>
            <div className='description-title_chevron'>
                <h3>{props.title}</h3>
                <i className='fa-solid fa-chevron-up' onClick={handleClick}></i>
            </div>
            {isVisible?
            <p className='description_content'>
                {props.content}
            </p> :<></>
            }
        </div>
    );
};

export default Wrapper;