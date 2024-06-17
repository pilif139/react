import { useLocation } from "react-router-dom";
import Product from "./Product";
import imgs from "./images";

interface Props {
  section: string;
}

interface Product {
  name: string;
  price: number;
  img: string;
  alt?: string;
  tag: string;
}

export default function ItemShop({ section }: Props) {
  const products = [
    { name: "T-Shirt Basic", price: 35.49, img: imgs[3], tag: "men" },
    { name: "Jeansy Slim", price: 75.12, img: imgs[0], tag: "men" },
    { name: "Spodnie Chinos", price: 65.87, img: imgs[4], tag: "men" },
    { name: "Plaszcze Winter", price: 120.99, img: imgs[6], tag: "men" },
    { name: "Kurtki Bomber", price: 89.3, img: imgs[7], tag: "men" },
    { name: "Marynarki Blazer", price: 150.0, img: imgs[7], tag: "men" },
    { name: "T-Shirt Graphic", price: 25.49, img: imgs[4], tag: "woman" },
    { name: "Jeansy Skinny", price: 85.75, img: imgs[1], tag: "woman" },
    { name: "Spodnie Cargo", price: 55.6, img: imgs[1], tag: "woman" },
    { name: "Sukienki Maxi", price: 45.25, img: imgs[2], tag: "woman" },
    { name: "Kurtki Leather", price: 99.99, img: imgs[7], tag: "woman" },
    { name: "Nike AirMax", price: 120.5, img: imgs[3], tag: "shoe" },
    { name: "Adidas Ultraboost", price: 130.99, img: imgs[3], tag: "shoe" },
    { name: "Puma RSX", price: 110.75, img: imgs[3], tag: "shoe" },
    { name: "Vans Sk8Hi", price: 90.0, img: imgs[3], tag: "shoe" },
    { name: "New Balance 574", price: 105.2, img: imgs[3], tag: "shoe" },
    { name: "Koszulka Training", price: 30.49, img: imgs[3], tag: "sport" },
    {
      name: "Stroje kapielowe Bikini",
      price: 45.89,
      img: imgs[3],
      tag: "sport",
    },
    { name: "Pilki Soccer", price: 25.15, img: imgs[7], tag: "sport" },
    { name: "Szorty Running", price: 35.0, img: imgs[7], tag: "sport" },
    { name: "Skateboard Deck", price: 75.5, img: imgs[2], tag: "sport" },
  ];

  const pathTag = useLocation().pathname.split("/").pop()
  let filteredProducts: Product[] | null = null;
  if (pathTag) {
    if (pathTag?.includes("-")) {
      let name = pathTag.split("-")[1];
      const tag = pathTag.split("-")[0]
      filteredProducts = products.filter(
        (product) =>{
          if(name.includes("%20")){
            name = name.replace(/%20/g, " ");
          }
          return product.name.includes(name) &&
          product.tag.includes(tag)
        }
      );
    } else {
      filteredProducts = products.filter((product) =>
        product.tag.includes(pathTag)
      );
    }
  } else {
    filteredProducts = null;
  }

  return (
    <>
      <h1 className="text-4xl mt-6 ml-10 w-fit hover:shadow-2xl hover:bg-indigo-100 p-2 rounded-xl transition-all">
        {section}
      </h1>
      <div className=" min-h-4-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-4 pt-0">
        {filteredProducts &&
          filteredProducts.map((product, id) => (
            <Product
              name={product.name}
              price={product.price}
              tag={product.tag}
              img={product.img}
              key={id}
            />
          ))}
        {filteredProducts === null && (
          <div className="text-xl ml-12 text-red-500">Brak produktów</div>
        )}
      </div>
    </>
  );
}
