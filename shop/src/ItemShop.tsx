import Product from "./Product"
import image from './assets/1.jpg'

export default function ItemShop() {
  return (
    <div className=" min-h-4-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
      <Product name="Jeansy" price={20} img={image}/>
    </div>
    
  )
}
