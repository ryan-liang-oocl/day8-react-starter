import React from 'react';

export const Counter = ({ number, increase, decrease }) => {
    return (
        <div>
            <button onClick={increase}>+</button>
            {number}
            <button onClick={decrease}>-</button>
        </div>
    );
};