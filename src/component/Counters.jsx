import React, { useState } from 'react';
import { Counter } from './Counter';

export const Counters = () => {
    const [counterCount, setCounterCount] = useState(0);
    const [counters, setCounters] = useState([]);

    const handleInputChange = (e) => {
        const value = Math.max(0, Math.min(20, parseInt(e.target.value, 10) || 0));
        setCounterCount(value);
    };

    const resetCounters = () => {
        if (counters.length !== counterCount) {
            setCounters(Array(counterCount).fill(0));
        }
    };

    const increase = (index) => {
        const newCounters = [...counters];
        newCounters[index] += 1;
        setCounters(newCounters);
    };

    const decrease = (index) => {
        const newCounters = [...counters];
        newCounters[index] -= 1;
        setCounters(newCounters);
    };

    return (
        <div>
            <input
                type="number"
                value={counterCount}
                onChange={handleInputChange}
                min={0}
                max={20}
            />
            <button onClick={resetCounters}>Reset</button>
            {counters.map((count, index) => (
                <Counter
                    key={index}
                    number={count}
                    increase={() => increase(index)}
                    decrease={() => decrease(index)}
                />
            ))}
        </div>
    );
};