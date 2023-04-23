import React from 'react';

const ImgBanner = (props) => {
    const pictures = props.pictures
    return (
        <div className='img-banner img'>
            {pictures.map((picture) => (
                <img key={picture} src={picture} alt=""></img>

            ))}
            
        </div>
    );
}

export default ImgBanner;