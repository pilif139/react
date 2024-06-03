import React from 'react'
import ColorButton from './ColorButton'
import { FaRegTrashAlt } from "react-icons/fa"
import { SizeContext } from './App'
import { useContext } from 'react';

export default function Tools({clearCanvas}) {
  const {size,setSize} = useContext(SizeContext);

  return (
   <div className="tools">
        <div className="colors">
          <ColorButton btnColor="black"></ColorButton>
          <ColorButton btnColor="white"></ColorButton>
          <ColorButton btnColor="red"></ColorButton>
          <ColorButton btnColor="orange"></ColorButton>
          <ColorButton btnColor="yellow"></ColorButton>
          <ColorButton btnColor="green"></ColorButton>
          <ColorButton btnColor="blue"></ColorButton>
          <ColorButton btnColor="purple"></ColorButton>
          <ColorButton btnColor="pink"></ColorButton>
          <ColorButton btnColor="brown"></ColorButton>
          <ColorButton btnColor="gray"></ColorButton>
          <button className="clearButton" onClick={clearCanvas}><FaRegTrashAlt /></button>
        </div>
        <form>
          <label>Size</label>
          <input type="number" placeholder='select size' onChange={(e)=>setSize(e.target.value)}/>
        </form>
   </div>
  )
}
