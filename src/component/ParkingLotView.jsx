import React from 'react';
import { Card } from 'antd';

const ParkingLotView = ({ lot }) => {
    const spaces = Array.from({ length: lot.capacity }, (_, index) => lot.tickets[index] || 'Empty');

    return (
        <Card title={lot.name}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${lot.capacity === 9 ? 3 : 4}, 1fr)` }}>
                {spaces.map((space, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                        {space}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ParkingLotView;