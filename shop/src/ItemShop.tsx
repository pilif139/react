import Product from "./Product"
import imgs from './images'

interface Props{
  section: string;
}

export default function ItemShop({section} : Props) {
  return (
    <>
      <h1 className="text-4xl pt-6 pl-10">{section}</h1>
      <div className=" min-h-4-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-4 pt-0">
        <Product name="Jeansy" price={100} img={imgs[0]}/>
        <Product name="Jeansy Levis" price={300} img={imgs[1]}/>
        <Product name="Buty" price={150} img={imgs[2]}/>
        <Product name="T-Shirt" price={20} img={imgs[3]}/>
        <Product name="Jeansy" price={100} img={imgs[0]}/>
        <Product name="Jeansy Levis" price={300} img={imgs[1]}/>
        <Product name="Buty" price={150} img={imgs[2]}/>
        <Product name="Jeansy jnco" price={100} img={imgs[0]}/>
        <Product name="Jeansy Levis" price={300} img={imgs[1]}/>
        <Product name="Buty adidas" price={150} img={imgs[2]}/>
        <Product name="T-Shirt Nike" price={20} img={imgs[3]}/>
      </div>
    </>
    
  )
}
