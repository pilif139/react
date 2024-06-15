import Header from "./Header.tsx";
import Images from "./Images.tsx";

interface Category{
	name: string;
	subcategories: string[];
}

function App() {

	const categories : Category[] = [
		{
			name: "Męskie",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie","Płaszcze", "Kurtki", "Marynarki"]
		},
		{
			name: "Damskie",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Sukienki", "Kurtki"]
		},
		{
			name: "Dzieci",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Obuwie", "Pieluchy"]
		}
	]

	return (
		<main  className="font-radio-canada-big flex-col min-h-dvh">
			<Header title="Sklep" categories={categories}></Header>
			<Images></Images>
		</main>
	);
}

export default App;
