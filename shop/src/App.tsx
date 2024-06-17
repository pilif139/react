import Header from "./Header.tsx";
import Images from "./Images.tsx";
import ItemShop from "./ItemShop.tsx";
import Footer from "./Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart.tsx";
import { ShoppingCartProvider } from "./useShoppingCart.tsx";
import imgs from "./images.ts";
import { ReactNode } from "react";
import NoPage from "./NoPage.tsx";

export interface Category {
  name: string;
  tag: string;
  subcategories: string[];
}

export interface Image {
  src: string;
  tag: string;
}

interface Route {
  path: string;
  element: ReactNode;
}

function App() {
  const categories: Category[] = [
    {
      name: "Mężczyzna",
      tag: "men",
      subcategories: [
        "T-Shirt",
        "Jeansy",
        "Spodnie",
        "Plaszcze",
        "Kurtki",
        "Marynarki",
      ],
    },
    {
      name: "Kobieta",
      tag: "woman",
      subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Sukienki", "Kurtki"],
    },
    {
      name: "Obuwie",
      tag: "shoe",
      subcategories: ["Nike", "Adidas", "Puma", "Vans", "New Balance"],
    },
    {
      name: "Sport",
      tag: "sport",
      subcategories: [
        "Koszulka",
        "Stroje kapielowe",
        "Pilki",
        "Szorty",
        "Skateboard",
      ],
    },
  ];

  const images = [
    {
      src: imgs[0],
      tag: "men",
    },
    {
      src: imgs[1],
      tag: "women",
    },
    {
      src: imgs[2],
      tag: "shoe",
    },
    {
      src: imgs[3],
      tag: "sport",
    },
  ];

  const routes: Route[] = [
    {
      path: "/",
      element: <Images imgs={images} />,
    },
    {
      path: "shopping-cart",
      element: <ShoppingCart />,
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ];

  return (
    <ShoppingCartProvider>
      <main className="h-full font-radio-canada-big flex-col center max-w-dvw overflow-x-hidden">
        <BrowserRouter>
          <Header title="Sklep" categories={categories}></Header>
          <Routes>
            {routes.map((route, id) => (
              <Route path={route.path} element={route.element} key={id} />
            ))}
            {categories.map((category, id) => {
              return (
                <Route
                  path={`${category.tag}`}
                  element={<ItemShop section={category.name} />}
                  key={id}
                />
              );
            })}
            {
              categories.map((category)=>{
                return category.subcategories.map((subcat,id)=> <Route path={`${category.tag}-${subcat}`} element={<ItemShop section={category.name}/>} key={id}/>)
              })
            }
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
