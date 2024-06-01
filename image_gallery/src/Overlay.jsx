import "./Overlay.css"

export default function Overlay({isOpen, onClose, children}){
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