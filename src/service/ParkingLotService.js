import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8090/parking-lot',
});

export const getParkingLots = () => {
    return axiosInstance.get('');
};

export const parkCar = (plateNumber, parkingStrategy) => {
    return axiosInstance.post('/park', {
        plateNumber,
        parkingStrategy
    });
};

export const fetchCar = (plateNumber) => {
    return axiosInstance.post('/fetch', {
        plateNumber
    });
};