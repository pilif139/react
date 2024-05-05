import React, {useState} from 'react'

export default function MyComponent() {
  
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleQuantity = (e) =>{
        setQuantity(e.target.value)
    }

    const handleComment = (e) =>{
        setComment(e.target.value)
    }

    const handlePayment = (e) =>{
        setPayment(e.target.value)
    }

    const handleShipping = (e) =>{
        setShipping(e.target.value);
    }

    return(
    <div>
        <input type="text" value={name} onChange={handleName}></input>
        <p>Name: {name}</p>
        
        <input type="number" value={quantity} onChange={handleQuantity}></input>
        <p>Quantity: {quantity}</p>
        
        <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions">
        </textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gift card">Gift card</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShipping}
            />
            Pick Up
        </label>

        <label>
            <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}
                />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>

    </div>
    )
}
