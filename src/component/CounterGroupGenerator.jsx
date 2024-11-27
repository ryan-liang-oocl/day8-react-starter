export const CounterGroupGenerator = ({ counterCount, onInputChange, onReset }) => {
    const handleChange = (e) => {
        const value = Math.max(0, Math.min(20, Number(e.target.value) || 0));
        onInputChange(value);
    };

    return (
        <div>
            <input
                type="number"
                value={counterCount}
                onChange={handleChange}
                min={0}
                max={20}
            />
            <button onClick={onReset}>Reset</button>
        </div>
    );
};