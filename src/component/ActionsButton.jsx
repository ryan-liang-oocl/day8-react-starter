import React from 'react';
import { Button, message } from 'antd';
import { parkCar, fetchCar } from '../service/ParkingLotService';
import './css/ActionsButton.css';

const ActionsButton = ({ plateNumber, strategy, onPark, onFetch, disabled }) => {
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
        <div className="actions-button-container">
            <Button type="primary" onClick={handlePark} className="action-button" disabled={disabled}>Park</Button>
            <Button type="default" onClick={handleFetch} className="action-button" disabled={disabled}>Fetch</Button>
        </div>
    );
};

export default ActionsButton;