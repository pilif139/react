import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <>
      <Hello person={person}></Hello>
      <Fruits></Fruits>
    </>
  );
}

export default App;
