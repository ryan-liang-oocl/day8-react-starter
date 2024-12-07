import React from 'react';
import { Input } from 'antd';

const PlateNumberInput = ({ value, onChange }) => (
    <div style={{ marginRight: '10px' }}>
        <label style={{ marginRight: '5px' }}>Plate Number:</label>
        <Input value={value} onChange={onChange} style={{ width: '200px' }} />
    </div>
);

export default PlateNumberInput;