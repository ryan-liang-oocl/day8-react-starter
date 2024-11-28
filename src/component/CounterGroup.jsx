import React, {useState, useEffect, useMemo} from 'react';
import { Counter } from './Counter';
import {CounterGroupSum} from "./CounterGroupSum";

export const CounterGroup = ({ counterCount, reset, setReset }) => {
    const [counters, setCounters] = useState([]);

    useEffect(() => {
        if (reset && counterCount !== counters.length) {
            setCounters(Array(counterCount).fill(0));
            setReset(false);
        }
        setReset(false);
    }, [reset, counterCount, setReset, counters.length]);

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

    const sum = useMemo(() => counters.reduce((acc, count) => acc + count, 0), [counters]);

    return (
        <div>
            <CounterGroupSum sum={sum} />
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