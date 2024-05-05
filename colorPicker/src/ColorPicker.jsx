import {useState} from 'react';

export default function ColorPicker() {
    const [color,setColor] = useState("#FFFFFF");

    const handleColor = (e) =>{
        setColor(e.target.value)
    }

    return (
        <div className='container'>
            <h1>Color Picker</h1>
            <div className="display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    )
}
