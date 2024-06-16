import { useShoppingCart } from "./useShoppingCart";

interface Props{
    name: string;
    price: number;
    img: string;
    alt?: string; 
}

export default function Product({name,price, img, alt}: Props) {
  const {addItem} = useShoppingCart();

  const addToCart = ()=>{
    addItem({
      name: name,
      quantity: 1,
      price: price
    })
  }

  return (
    <div className="col-auto flex flex-col text-white w-64 bg-indigo-400 hover:bg-indigo-500 transition-all m-5 rounded-2xl p-5 hover:shadow-2xl">
        <p className="mb-4 text-2xl">{name} {price}$</p>
        <img src={img} alt={alt} className="h-48 rounded-xl"/>
        <button className=" bg-slate-100 hover:bg-slate-200 transition-colors text-black p-2 mt-4 cursor-pointer w-full rounded-xl" onClick={addToCart}>Dodaj do koszyka</button>
    </div>
  )
}
