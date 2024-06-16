import Header from "./Header.tsx";
import Images from "./Images.tsx";
import ItemShop from "./ItemShop.tsx";
import Footer from "./Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./ShoppingCart.tsx";
import { ShoppingCartProvider } from "./useShoppingCart.tsx";

interface Category {
  name: string;
  subcategories: string[];
}


function App() {
  const categories: Category[] = [
    {
      name: "Męskie",
      subcategories: [
        "T-Shirt",
        "Jeansy",
        "Spodnie",
        "Płaszcze",
        "Kurtki",
        "Marynarki",
      ],
    },
    {
      name: "Damskie",
      subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Sukienki", "Kurtki"],
    },
    {
      name: "Dzieci",
      subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Obuwie", "Pieluchy"],
    },
  ];

  return (
	<ShoppingCartProvider>
		<main className="h-full font-radio-canada-big flex-col center max-w-dvw overflow-x-hidden">
			<BrowserRouter>
				<Header title="Sklep" categories={categories}></Header>
				<Routes>
					<Route path="/" element={<Images/>}/>
					<Route index element={<Images/>}/>
					<Route path="item-shop" element={<ItemShop/>}/>
					<Route path="shopping-cart" element={<ShoppingCart/>}/>
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</main>
	</ShoppingCartProvider>
  );
}

export default App;
