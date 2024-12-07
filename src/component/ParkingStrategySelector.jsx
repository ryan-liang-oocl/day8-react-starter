import React from 'react';
import { Radio } from 'antd';

const ParkingStrategySelector = ({ value, onChange }) => (
    <div style={{ marginRight: '10px' }}>
        <label style={{ marginRight: '5px' }}>Parking Strategy:</label>
        <select value={value} onChange={onChange} style={{ padding: '5px' }}>
            <option value="Standard">Standard</option>
            <option value="Smart">Smart</option>
            <option value="SuperSmart">SuperSmart</option>
        </select>
    </div>
);

export default ParkingStrategySelector;