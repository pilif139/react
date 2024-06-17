import { ReactNode } from "react";
import "./Overlay.css"

interface OverlayProps {
    isOpen: boolean;
    onClose: ()=>void;
    children: ReactNode;
}

export default function Overlay({isOpen, onClose, children}: OverlayProps){
    return(
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="overlay-background" onClick={onClose} />
                    <div className="overlay-container">
                        <div className="overlay-controls">
                            <button
                                className="overlay-close"
                                type="button"
                                onClick={onClose}
                            ></button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}