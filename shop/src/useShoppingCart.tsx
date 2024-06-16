import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface CartItem{
    name: string;
    quantity: number;
    price: number;
}

interface ShoppingCart{
	items: CartItem[];
	fullPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemName: string) => void;
  changeItemQuantity: (item:CartItem, number:number, event:ChangeEvent)=>void;
}

const ShoppingCartContext = createContext<ShoppingCart | undefined>(undefined);

type Props = {
    children: ReactNode
}

export function ShoppingCartProvider({children}: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fullPrice, setFullPrice] = useState<number>(0);

  const changeItemQuantity = (item: CartItem, number: number, event:ChangeEvent) => {
    event.preventDefault()
    setItems((prevItems) => {
        const itemToChange = prevItems.findIndex((it) => it.name === item.name);
        if (itemToChange !== -1) {
            setFullPrice((prevPrice) => prevPrice - item.price * item.quantity + item.price * number);
            console.log("Item Price:", item.price, "Old Quantity:", item.quantity, "New Quantity:", number);
            const updatedItems = [...prevItems];
            updatedItems[itemToChange] = {
                ...updatedItems[itemToChange],
                quantity: number,
            };
            console.log("Updated Items:", updatedItems);
            return updatedItems;
        }
        return [...prevItems, item];
    });
};


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

  

  useEffect(()=>{
    if(fullPrice!==0){
      document.title="Sklep: "+fullPrice+"zł"
    }
  },[fullPrice])

  return (
    <ShoppingCartContext.Provider value={{ items, fullPrice, addItem, removeItem, changeItemQuantity}}>
        {children}
    </ShoppingCartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCart = (): ShoppingCart =>{
    const context = useContext(ShoppingCartContext);
    if(context === undefined){
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
}