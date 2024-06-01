import React from 'react';
import {useEffect, useState} from "react";

function Images({images}) {

    return (
        <div className="image-container">
            {
                images.length > 0 &&
                images.map((image, index) => <img src={image.previewURL} key={image.id} />)
            }
        </div>
    );
}

export default Images;