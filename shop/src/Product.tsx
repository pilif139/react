import { useShoppingCart } from "./useShoppingCart";
import Overlay from "./Overlay";
import SizeMenu from "./SizeMenu";
import { useState } from "react";

interface Props{
    name: string;
    price: number;
    img: string;
    alt?: string;
    tag: string;
}

export default function Product({name,price, img, alt, tag}: Props) {
  const {addItem} = useShoppingCart();
  const [showOverlay,setShowOverlay] = useState(false);
  const [size,setSize] = useState<string>('S');

  const addToCart = ()=>{
    addItem({
      name: name,
      quantity: 1,
      price: price,
      tag: tag,
      size: size,
    })
  }

  const handleClick = ()=>{
    addToCart()
    setShowOverlay(false)
  }
  return (
    <>
      <div className="col-auto flex flex-col justify-between text-white w-80 bg-indigo-400 hover:bg-indigo-500 transition-all m-5 rounded-2xl p-5 hover:shadow-2xl  max-h-96">
          <div className="flex mb-4 justify-between items-center">
            <span className=" text-2xl">{name}</span>
            <div className="text-xl bg-red-400 rounded-xl flex p-2">{price}zł</div>
          </div>
          <img src={img} alt={alt} className="h-48 rounded-xl"/>
          <button className=" bg-slate-100 hover:bg-indigo-900 hover:text-white transition-colors text-black p-2 mt-4 cursor-pointer w-full rounded-xl" onClick={()=>setShowOverlay(true)}>Dodaj do koszyka</button>
      </div>
        <Overlay isOpen={showOverlay} onClose={()=>setShowOverlay(!showOverlay)}>
            <SizeMenu onClick={handleClick} size={size} name={name} setSize={setSize}></SizeMenu>
        </Overlay>
    </>
  )
}
