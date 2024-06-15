import Header from "./Header";

function App() {
	const categories = [
		{
			name: "Męskie",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie","Płaszcze", "Kurtki", "Marynarki"]
		},
		{
			name: "Damskie",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Sukienki", "Kurtki", "Bielizna"]
		},
		{
			name: "Dzieci",
			subcategories: ["T-Shirt", "Jeansy", "Spodnie", "Obuwie", "Pieluchy"]
		}
	]

	return (
		<main  className="font-radio-canada-big flex-col min-h-dvh">
			<Header title="Sklep" categories={categories}></Header>
		</main>
	);
}

export default App;
