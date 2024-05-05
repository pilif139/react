import React, {useState} from 'react';

export default function MyComponent() {
  
    const [name, setName] = useState("Patrick")
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Spongebob");
    }

    const incrementAge = () =>{
        setAge(age+1);
    }

    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>incrementAge</button>

            <p>Is employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>toggle employed status</button>
        </div>
    )

}
