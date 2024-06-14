import React, { useState } from 'react';
import Overlay from "./Overlay.tsx";

interface Image{
    webformatURL: string;
    tags?: string;
    id: string;
    pageURL: string;
}

interface ImagesProps{
    images: Array<Image>;
}

function Images({ images }: ImagesProps) {
    const [isOverlayOpen, setOverlayOpen] = useState<boolean>(false);
    const [focusedImgURL, setFocusedImageURL] = useState<string>("");
    const [downloadUrl, setDownloadUrl] = useState<string>("");
    const [focusedPageUrl, setFocusedPageUrl] = useState<string>("");

    const handleFocusImage = async (imgURL: string, pageURL: string) => {
        setOverlayOpen(true);
        setFocusedImageURL(imgURL);
        setFocusedPageUrl(pageURL)

        //download property in <a> tag was not working
        try {
            const res = await fetch(imgURL);
            const blob = await res.blob();
            setDownloadUrl(URL.createObjectURL(blob));
        }
        catch (error) {
            console.error("Error fetching image url: ", error)
        }
    }

    return (
        <>
            <Overlay isOpen={isOverlayOpen} onClose={() => setOverlayOpen(!isOverlayOpen)}>
                <img src={focusedImgURL} alt="focused image" />
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
                    images.map((image: Image) => <img src={image.webformatURL} alt={image.tags} key={image.id}
                        onClick={() => handleFocusImage(image.webformatURL, image.pageURL)} />)
                }
            </div>
        </>
    );
}

export default Images;