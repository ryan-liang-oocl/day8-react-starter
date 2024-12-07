import React from 'react';
import { Button, message } from 'antd';
import { parkCar, fetchCar } from '../service/ParkingLotService';

const ActionsButton = ({ plateNumber, strategy, onPark, onFetch }) => {
    const handlePark = () => {
        parkCar(plateNumber, strategy)
            .then(response => {
                onPark();
            })
            .catch(error => {
                message.error(`Error parking the car: ${error.response.data}`);
            });
    };

    const handleFetch = () => {
        fetchCar(plateNumber)
            .then(response => {
                onFetch();
            })
            .catch(error => {
                message.error(`Error fetching the car: ${error.response.data}`);
            });
    };

    return (
        <div>
            <Button type="primary" onClick={handlePark} style={{ marginRight: '10px' }}>Park</Button>
            <Button type="default" onClick={handleFetch}>Fetch</Button>
        </div>
    );
};

export default ActionsButton;