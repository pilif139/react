import { useState } from "react";

export default function Array() {

    const [foods,setFoods] = useState(["Apple", "Banana", "Orange"])

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f=>[...f, newFood]);
    }

    function removeFood(index){
        setFoods(
          foods.filter((_,idx)=> idx !== index)
        );
    }

    return(
      <div>
        <h2>List of food</h2>
        <ul>
          {foods.map((food,index)=> 
          <li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
        </ul>

        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={addFood}>Add food</button>
      </div>
    );
}
