import { CartItem, useShoppingCart } from "./useShoppingCart";
import { ChangeEvent } from "react";

interface Props{
    item: CartItem;
    id: number;
}

export default function ShoppingCartItem({item, id} :Props) {
    const {removeItem, changeItemQuantity} = useShoppingCart();

    const handleChangeQuantity = (item: CartItem,e: ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        changeItemQuantity(item, e.target.valueAsNumber)
      }

    return (
        <div
        key={id}
        className="min-w-full bg-slate-500 text-white p-4 rounded-xl flex flex-col md:flex-row justify-between items-center hover:shadow-2xl hover:bg-slate-600 transition-all max-h-48"
        >
        <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.name} - {item.size}</div>
        <div className="flex items-center">
            <label htmlFor={`quantity-${id}`} className="mx-2">
            Ilość:
            </label>
            <input
            id={`quantity-${id}`}
            type="number"
            min="0"
            value={item.quantity}
            onChange={(e)=>handleChangeQuantity(item, e)}
            className="mx-2 p-2 w-12 rounded-lg bg-slate-700"
            />
        </div>
        <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.price*item.quantity}zł ({item.price}zł)</div>
        <button
            className="bg-red-500 p-3 rounded-xl hover:bg-red-600 transition-colors"
            onClick={() => removeItem(item.name)}
        >
            Usuń
        </button>
        </div>
  );
}
