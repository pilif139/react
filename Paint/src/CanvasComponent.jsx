import React from 'react';
import { useRef, useEffect } from "react";
import { useContext } from 'react';
import { ColorContext, SizeContext } from "./App";

function CanvasComponent(props) {
    const canvasRef = useRef(null)
    const isDrawing = useRef(false);

    const {color, setColor} = useContext(ColorContext);
    const {size,setSize} = useContext(SizeContext);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const getRelativeCoords = (event) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        };

        const start = (event) => {
            isDrawing.current = true;
            // Get relative coordinates for starting point
            const coords = getRelativeCoords(event);
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
            event.preventDefault();
        };

        const draw = (event) => {
            if (isDrawing.current) {
                // Get relative coordinates for drawing
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
    }, [color,size]);

    return (
        <canvas ref={canvasRef} {...props}/>
    );
}

export default CanvasComponent;