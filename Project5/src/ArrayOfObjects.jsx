import {useState} from 'react'

export default function ArrayOfObjects() {

    const [cars,setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function addCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c=> [...c,newCar]);

        setCarYear(new Date().getFullYear);
        setCarMake("");
        setCarYear("");
    }

    function removeCar(index){
        setCars(
            cars.filter((_,idx)=> idx!==index)
        );
    }

    function changeYear(e){
        setCarYear(e.target.value)
    }
    function changeMake(e){
        setCarMake(e.target.value)
    }
    function changeModel(e){
        setCarModel(e.target.value)
    }

    return (
        <>
            <h2>List of Car Objects</h2>

            <ul>
                {
                    cars.map((car,index)=> <li onClick={()=>removeCar(index)} key={index}>{car.year} {car.make} {car.model}</li>)
                }
            </ul>

            <form>
                <input type="number" value={carYear} onChange={changeYear} placeholder='Enter car year'/>
                <input type="text" value={carMake} onChange={changeMake} placeholder='Enter car make'/>
                <input type="text" value={carModel} onChange={changeModel} placeholder='Enter car model'/>

                <button type="button" onClick={addCar}>Add car</button>
            </form>
        </>
    );
    
}
