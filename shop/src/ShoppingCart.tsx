import { useShoppingCart } from "./useShoppingCart"

export default function ShoppingCart() {
    const {items, fullPrice} = useShoppingCart();

  return (
    <div className="min-h-4-6 p-6 flex flex-col flex-wrap">
        <h1 className="text-2xl">Shopping Cart</h1>
        {items.map((item,id)=>(
            <p key={id}>{item.name} - {item.quantity} - {item.price}</p>
        ))}
        <h3>Cena do zapłacenia: {fullPrice}</h3>
    </div>
  )
}
