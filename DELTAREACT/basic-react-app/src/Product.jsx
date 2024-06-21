import { useState } from "react"

function Product(){
const [count, setCount] = useState(0);
    const addByOne = ()=>{
        setCount(count+1)
    }

    const decreaseByOne = ()=>{
        setCount(count-1)
    }

    const handleReset = ()=>{
        setCount(0)
    }
    return(
    <div>
        <h3>Count is: {count}</h3>
        <button onClick={addByOne}>Add</button>       
        <button onClick={decreaseByOne}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        <p>Hello Wo</p>
    </div>
    );
}
export default Product;