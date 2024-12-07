import React from 'react';
import { Button } from 'antd';
import { parkCar } from '../service/ParkingLotService';

const ActionsButton = ({ plateNumber, strategy, onPark, onFetch }) => {
    const handlePark = () => {
        parkCar(plateNumber, strategy)
            .then(response => {
                console.log('Parked successfully:', response.data);
                onPark();
            })
            .catch(error => {
                console.error('Error parking the car:', error);
            });
    };

    return (
        <div>
            <Button type="primary" onClick={handlePark} style={{ marginRight: '10px' }}>Park</Button>
            <Button type="default" onClick={onFetch}>Fetch</Button>
        </div>
    );
};

export default ActionsButton;