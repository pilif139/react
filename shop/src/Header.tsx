import DropdownMenu from "./DropDownMenu";

interface Props{
    title: string;
    categories: { name:string; subcategories:string[]}[];
}

function Header({title, categories}:Props) {
    return (
        <header className=" bg-indigo-100  w-dvw h-min p-5 transition-colors hover:bg-indigo-200">
            <h1 className="text-5xl ml-1">{title}</h1>
            <nav className="flex">
                {categories.map((category,id)=><DropdownMenu key={id} name={category.name} options={category.subcategories}></DropdownMenu>)}
            </nav>
        </header>
    )
}
export default Header