import React, { useState } from 'react';
import { CounterGroupGenerator } from './CounterGroupGenerator';
import { CounterGroup } from './CounterGroup';

export const MultipleCounter = () => {
    const [counterCount, setCounterCount] = useState(0);
    const [reset, setReset] = useState(false);

    const handleInputChange = (value) => {
        setCounterCount(value);
    };

    const handleReset = () => {
        setReset(true);
    };

    return (
        <div>
            <CounterGroupGenerator counterCount={counterCount} onInputChange={handleInputChange} onReset={handleReset} />
            <CounterGroup counterCount={counterCount} reset={reset} setReset={setReset} />
        </div>
    );
}