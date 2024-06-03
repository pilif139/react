import React, { useState } from 'react';
import { useRef, useEffect, useContext, forwardRef, useImperativeHandle } from "react";
import { ColorContext, SizeContext } from "./App";

const CanvasComponent = forwardRef((props, ref) => { // Dodanie forwardRef
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);
    const { color } = useContext(ColorContext);
    const { size } = useContext(SizeContext);
    const  [history,setHistory] = useState([]);

    useImperativeHandle(ref, () => ({ // Dodanie useImperativeHandle
        clearCanvas: () => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, props.width, props.height);
        }
    }));

    

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const saveState = () =>{
            const dataUrl = canvas.toDataURL();
            setHistory((pv)=>[...pv,dataUrl]);
        }

        const restoreState = () =>{
            if(history.length > 0){
                const previousState = history[history.length-1];
                setHistory(history.slice(0,-1));
                const img = new Image();
                img.src = previousState;
                img.onload = () => {
                    ctx.clearRect(0,0,canvas.width, canvas.height);
                    ctx.drawImage(img,0,0);
                }
            }
        }

        const getRelativeCoords = (event) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        };

        const start = (event) => {
            isDrawing.current = true;
            saveState();
            const coords = getRelativeCoords(event);
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
            event.preventDefault();
        };

        const draw = (event) => {
            if (isDrawing.current) {
                const coords = getRelativeCoords(event);
                ctx.lineTo(coords.x, coords.y);
                ctx.strokeStyle = color;
                ctx.lineWidth = size;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke();
            }
            event.preventDefault();
        };

        const stop = (e) => {
            if (isDrawing.current) {
                ctx.stroke();
                ctx.closePath();
                isDrawing.current = false;
            }
            e.preventDefault();
        };

        const mouseDownListener = (event) => {
            start(event);
            canvas.addEventListener('mousemove', draw);
            canvas.addEventListener('mouseup', stop);
            canvas.addEventListener('mouseout', stop);
        };

        canvas.addEventListener('mousedown', mouseDownListener);

        return () => {
            canvas.removeEventListener('mousedown', mouseDownListener);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stop);
            canvas.removeEventListener('mouseout', stop);
        };
    }, [color, size,history]);

    return (
        <>
            <canvas ref={canvasRef} {...props} />
            <button onClick={()=>{
                if(canvasRef){
                    restoreState();
                }
            }}>Undo</button>
        </>
    );
});

export default CanvasComponent;