import React from 'react';
import { Card } from 'antd';
import './css/ParkingLotView.css';

const ParkingLotView = ({ lot }) => {
    const spaces = Array.from({ length: lot.capacity }, (_, index) => lot.tickets[index] || 'Empty');

    return (
        <Card title={lot.name} className="parking-lot-card">
            <div className="parking-lot-grid">
                {spaces.map((space, index) => (
                    <div key={index} className="parking-lot-space">
                        {typeof space === 'string' ? space : `${space.plateNumber}`}
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default ParkingLotView;