import React from 'react';
import { Card } from 'antd';

const ParkingLotView = ({ lot }) => (
    <Card title={lot.name}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${lot.spaces.length === 9 ? 3 : 4}, 1fr)` }}>
            {lot.spaces.map((space, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                    {space || 'Empty'}
                </div>
            ))}
        </div>
    </Card>
);

export default ParkingLotView;