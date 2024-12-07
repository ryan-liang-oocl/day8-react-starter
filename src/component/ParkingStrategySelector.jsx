import './css/ParkingStrategySelector.css';

const ParkingStrategySelector = ({ value, onChange }) => (
    <div className="parking-strategy-selector">
        <label className="parking-strategy-label">Parking Strategy:</label>
        <select value={value} onChange={onChange} className="parking-strategy-select">
            <option value="SequentiallyStrategy">Standard</option>
            <option value="MaxAvailableStrategy">Smart</option>
            <option value="AvailableRateStrategy">SuperSmart</option>
        </select>
    </div>
);

export default ParkingStrategySelector;