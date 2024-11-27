import { useState } from 'react';
export const Counter = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    }
    const decrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            {number}
            <button onClick={decrease}>-</button>
        </div>
    )

}