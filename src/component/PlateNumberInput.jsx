import { Input } from 'antd';
import './css/PlateNumberInput.css';
import { useEffect } from 'react';

const PlateNumberInput = ({ value, onChange, onValidationChange }) => {
    useEffect(() => {
        const isValid = /^[A-Z]{2}-\d{4}$/.test(value);
        onValidationChange(isValid);
    }, [value, onValidationChange]);

    return (
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
};

export default PlateNumberInput;