import React, { useState} from 'react';
import Overlay from "./Overlay.jsx";

function Images({images}) {
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const [focusedImgURL, setFocusedImageURL] = useState(null);
    const [downloadUrl, setDownloadUrl ]= useState("");
    const [focusedPageUrl, setFocusedPageUrl] = useState("");

    const handleFocusImage = (imgURL, pageURL) => {
        setOverlayOpen(true);
        setFocusedImageURL(imgURL);
        setFocusedPageUrl(pageURL)

        //download property in <a> tag was not working
        let binaryData = [];
        binaryData.push(focusedImgURL);
        setDownloadUrl(URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"})));
    }

    return (
        <>
            <Overlay isOpen={isOverlayOpen} onClose={() => setOverlayOpen(!isOverlayOpen)}>
                <img src={focusedImgURL} alt="focused image"/>
                <div className="buttons">
                    <button className="downloadBtn">
                        <a href={downloadUrl} download target="_blank">Download</a>
                    </button>
                    <button className="downloadBtn">
                        <a href={focusedPageUrl} target="_blank">Source</a>
                    </button>
                </div>
            </Overlay>
            <div className="image-container">
                {
                    images.length > 0 &&
                    images.map((image) => <img src={image.webformatURL} alt={image.tags} key={image.id}
                                                      onClick={() => handleFocusImage(image.webformatURL, image.pageURL)}/>)
                }
            </div>
        </>
    );
}

export default Images;