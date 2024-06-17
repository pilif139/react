import { useShoppingCart } from "./useShoppingCart";
import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart() {
  const { items, fullPrice } = useShoppingCart();

  return (
    <div className="min-h-4-6 p-6">
      <h1 className="text-2xl mb-6 col-span-full">Shopping Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-0 md:grid-cols-1 lg:grid-cols-3 gap-4 col-span-full">
        {items.map((item, id) => {
          return (
            <ShoppingCartItem item={item} id={id} key={id}/>
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