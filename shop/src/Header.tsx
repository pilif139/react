import DropdownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";

interface Props{
    title: string;
    categories: { name:string; subcategories:string[]}[];
}

function Header({title, categories}:Props) {
    return (
        <header className=" bg-indigo-100  w-full h-1/6 p-5 transition-colors hover:bg-indigo-200">
            <h1 className="flex w-min p-2 pl-0 text-5xl ml-1 hover:bg-indigo-300 transition-colors rounded-xl cursor-pointer">
                <Link to='/'>
                    {title}
                </Link>
            </h1>
            <nav className="flex">
                {categories.map((category,id)=><DropdownMenu key={id} name={category.name} options={category.subcategories}></DropdownMenu>)}
            </nav>
            <Link to="/shopping-cart" className="fixed right-10 top-8 flex items-center space-x-2 bg-indigo-300 hover:bg-indigo-400 p-2 rounded-full transition-colors">
                <p className="text-lg font-semibold">Koszyk</p>
                <CiShoppingBasket className="text-5xl" />
            </Link>
        </header>
    )
}
export default Header