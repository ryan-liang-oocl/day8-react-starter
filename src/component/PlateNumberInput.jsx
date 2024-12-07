import { Input } from 'antd';
import './css/PlateNumberInput.css';

const PlateNumberInput = ({ value, onChange }) => (
    <div className="plate-number-input">
        <label className="plate-number-label">Plate Number:</label>
        <Input
            value={value}
            onChange={onChange}
            className="plate-number-input-field"
            placeholder="input plate number"
            pattern="^[A-Z]{2}-\d{4}$"
            required
        />
        {!value && <span className="error-message">Plate number is required</span>}
        {value && !/^[A-Z]{2}-\d{4}$/.test(value) && (
            <span className="error-message">Wrong format</span>
        )}
    </div>
);

export default PlateNumberInput;