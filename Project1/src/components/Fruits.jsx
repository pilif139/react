export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Pineapple"];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}
