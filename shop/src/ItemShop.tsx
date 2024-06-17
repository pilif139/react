import { useLocation } from "react-router-dom";
import Product from "./Product"
import imgs from './images'

interface Props{
  section: string;
}

export default function ItemShop({section} : Props) {
  
  const products =[
    {
      name: "Jeansy",
      price: 100,
      tag: "men",
      img: imgs[0]
    },
    {
      name: "Jeansy Levis",
      price: 300,
      tag: "women",
      img: imgs[1]
    },
    {
      name: "Buty Nike",
      price: 500,
      tag: "shoe",
      img: imgs[2]
    },
    {
      name: "Koszulka sportowa",
      price: 25,
      tag: "sport",
      img: imgs[3]
    },
  ]

  const pathTag = useLocation().pathname.split("/").pop();

  const filteredProducts = products.filter(product => product.tag === pathTag);

  return (
    <>
      <h1 className="text-4xl mt-6 ml-10 w-fit hover:shadow-2xl hover:bg-indigo-100 p-2 rounded-xl transition-all">{section}</h1>
      <div className=" min-h-4-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-4 pt-0">
        {filteredProducts.map((product,id)=>(
          <Product name={product.name} price={product.price} tag={product.tag} img={product.img} key={id}/>
        ))}
      </div>
    </>
    
  )
}
