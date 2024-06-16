import { ChangeEvent } from "react";
import { CartItem, useShoppingCart } from "./useShoppingCart";

export default function ShoppingCart() {
  const { items, fullPrice, removeItem, changeItemQuantity } = useShoppingCart();

  const handleChangeQuantity = (item: CartItem,e: ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    changeItemQuantity(item, e.target.valueAsNumber)
  }

  return (
    <div className="min-h-4-6 p-6 grid grid-cols-1 gap-4">
      <h1 className="text-2xl mb-0 col-span-full">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-full">
        {items.map((item, id) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          // const debouncedQuantity = useDebounce(localQuantity[item.name] ?? item.quantity, 100);
          return (
            <div key={id} className="w-full bg-slate-500 text-white p-4 rounded-xl flex flex-col md:flex-row justify-between items-center hover:shadow-2xl hover:bg-slate-600 transition-all max-h-24">
              <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.name}</div>
              <div className="flex items-center">
                <label htmlFor={`quantity-${id}`} className="mx-2">Ilość:</label>
                <input
                  id={`quantity-${id}`}
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>handleChangeQuantity(item,e)}
                  className="mx-2 p-2 rounded-lg bg-slate-700"
                />
              </div>
              <div className="mx-2 p-2 rounded-lg bg-slate-700">{item.price}zł</div>
              <button className="bg-red-500 p-3 rounded-xl hover:bg-red-600 transition-colors" onClick={() => removeItem(item.name)}>Usuń</button>
            </div>
          );
        })}
      </div>
      <div className="col-span-full mt-4">
        <h3 className="text-2xl">Cena do zapłacenia: {fullPrice}zł</h3>
        <button className="bg-indigo-300 py-4 px-6 w-52 h-20 rounded-xl text-2xl my-2 hover:shadow-2xl hover:bg-indigo-400 transition-all">Zapłać</button>
      </div>
    </div>
  );
}