import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem{
    name: string;
	quantity: number;
	price: number;
}

interface ShoppingCart{
	items: CartItem[];
	fullPrice: number;
    addItem: (item: CartItem) => void;
    removeItem: (itemName: string) => void;
}

const ShoppingCartContext = createContext<ShoppingCart | undefined>(undefined);

type Props = {
    children: ReactNode
}

export function ShoppingCartProvider({children}: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fullPrice, setFullPrice] = useState<number>(0);

  const addItem = (item: CartItem) =>{
    setItems((prevItems) => {
      const ItemToAdd = prevItems.findIndex((it)=>it.name === item.name);
      if(ItemToAdd !== -1){
        const updatedItems = [...prevItems];
        updatedItems[ItemToAdd] = {
          ...updatedItems[ItemToAdd],
          quantity: updatedItems[ItemToAdd].quantity + item.quantity,
        }
        return updatedItems;
      }
      return [...prevItems, item]
    });
    setFullPrice((prevPrice)=> prevPrice+ item.price*item.quantity);
  }

  const removeItem = (itemName: string) =>{
    setItems((prevItems)=>{
        const ItemToRemove = prevItems.find((item)=>item.name === itemName);
        if(ItemToRemove){
            setFullPrice((prevPrice)=>prevPrice - ItemToRemove.price * ItemToRemove.quantity)
        }
        return prevItems.filter((item)=>item.name !== itemName);
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ items, fullPrice, addItem, removeItem }}>
        {children}
    </ShoppingCartContext.Provider>
  );
}

export const useShoppingCart = (): ShoppingCart =>{
    const context = useContext(ShoppingCartContext);
    if(context === undefined){
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
}