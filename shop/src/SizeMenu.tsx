import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  onClick: () => void;
  size: string;
  name: string;
  setSize: Dispatch<SetStateAction<string>>;
}

export default function SizeMenu({ onClick, size, name, setSize }: Props) {
  return (
    <div>
      <h3 className="text-xl absolute top-10">
        {name} - {size}
      </h3>
      <div className="border-4 border-indigo-900 rounded-3xl p-2">
        Wybierz rozmiar:
        <select
          className="border-2 border-indigo-600 hover:bg-indigo-500 text-black hover:text-white transition-colors rounded-xl mx-2"
          name="size"
          id="size"
          value={size}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSize(e.target.value)
          }
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button
          className="bg-indigo-700 text-white p-2 rounded-xl hover:bg-indigo-900 transition-colors"
          onClick={onClick}
        >
          Potwierdź
        </button>
      </div>
    </div>
  );
}
