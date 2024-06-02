import React from 'react'
import { useContext } from 'react';
import { ColorContext, SizeContext } from "./App";

export default function ColorButton({btnColor}) {
    const {color, setColor} = useContext(ColorContext);

  return (
    <button onClick={()=>setColor(btnColor)} style={{backgroundColor: btnColor}}></button>
  )
}
