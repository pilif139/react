import Button from "./Button"
import { useState } from "react"

export default function Calculator() {
    const [previousValues, setPreviousValues] = useState("");
    const [value, setValue] = useState("");
    const [memory, setMemory] = useState([]);

    const handleButtons = (sign) => {
        if (!isNaN(sign) || sign === '.') {
            if (value === "Nie dziel przez 0!" || value === "Error" || value === Infinity) {
                setValue(sign);
            }
            else if (value === "0" || value === "") {
                setValue(sign)
            }
            else if (value.toString().includes(".") && sign === '.') {
                setValue(value);
            }
            else if (!value.toString().includes(".") && sign === '.') {
                setValue(value + ".");
            }
            else {
                setValue(value + sign);
            }
        }
        else {
            switch (sign) {
                case "=":
                    try {
                        const result = eval(previousValues + value);
                        if (result !== Infinity) {
                            setValue(result.toString());
                        }
                        else {
                            setValue("Nie dziel przez 0!")
                        }
                        setMemory([...memory, previousValues + value + "=" + result]);
                        setPreviousValues("");
                    }
                    catch (err) {
                        setValue("Error");
                    }
                    break;
                case 'C':
                    setPreviousValues("");
                    setValue("");
                    break;
                case 'CE':
                    setValue("");
                    break;
                case 'bsp':
                    setValue(value.slice(0, -1));
                    break;
                case '%':
                    setValue(value / 100);
                    break;
                case "1/x":
                    setValue(1 / value);
                    break;
                case "x^2":
                    setValue(value ** 2);
                    break;
                case "sqrt(x)":
                    setValue(Math.sqrt(value));
                    break;
                case "+/-":
                    setValue(value * -1);
                    break;
                default:
                    setPreviousValues(value + sign);
                    setValue("0");
                    break;
            }
        }
    }

    return (
        <div className="Calculator">
            <div className="container">
                <div className="output">
                    <p>{previousValues}</p>
                    <p>{value}</p>
                </div>
                <div className="buttons">
                    <Button sign="%" onClick={handleButtons} />
                    <Button sign="CE" onClick={handleButtons} />
                    <Button sign="C" onClick={handleButtons} />
                    <Button sign="bsp" onClick={handleButtons} />

                    <Button sign="1/x" onClick={handleButtons} />
                    <Button sign="x^2" onClick={handleButtons} />
                    <Button sign="sqrt(x)" onClick={handleButtons} />
                    <Button sign="/" onClick={handleButtons} />

                    <Button sign="7" onClick={handleButtons} />
                    <Button sign="8" onClick={handleButtons} />
                    <Button sign="9" onClick={handleButtons} />
                    <Button sign="*" onClick={handleButtons} />

                    <Button sign="4" onClick={handleButtons} />
                    <Button sign="5" onClick={handleButtons} />
                    <Button sign="6" onClick={handleButtons} />
                    <Button sign="-" onClick={handleButtons} />

                    <Button sign="1" onClick={handleButtons} />
                    <Button sign="2" onClick={handleButtons} />
                    <Button sign="3" onClick={handleButtons} />
                    <Button sign="+" onClick={handleButtons} />

                    <Button sign="+/-" onClick={handleButtons} />
                    <Button sign="0" onClick={handleButtons} />
                    <Button sign="." onClick={handleButtons} />
                    <Button sign="=" onClick={handleButtons} />
                </div>
            </div>
            <div className="memory">
                <h2>Historia</h2>
                {
                    memory.map((el, idx) => <div key={idx}>{el}</div>)
                }
            </div>
        </div>
    )
}
