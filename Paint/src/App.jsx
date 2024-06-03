import './App.css'
import CanvasComponent from "./CanvasComponent.jsx";
import Tools from './Tools.jsx';
import { createContext, useEffect, useState, useRef } from 'react';

//contexts
export const ColorContext = createContext({
    color: "black",
    setColor:  () => {}
})

export const SizeContext = createContext({
    size: 4,
    setSize:  () => {}
})

function App() {
    const [color, setColor] = useState("black");
    const [size, setSize] = useState(4);
    const [viewportSize, setViewportSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const canvasRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const clearCanvas = () => { // Definicja funkcji clearCanvas
        if (canvasRef.current) {
            canvasRef.current.clearCanvas();
        }
    };

    return (
        <>
        <ColorContext.Provider value={{ color, setColor }}>
                <SizeContext.Provider value={{ size, setSize }}>
                    <h1>Paint</h1>
                    <Tools clearCanvas={clearCanvas}/>
                    <CanvasComponent ref={canvasRef} className="canvas" width={viewportSize.width*0.9} height={viewportSize.height*0.8} />
                </SizeContext.Provider>
            </ColorContext.Provider>
        </>
    )
}

export default App
