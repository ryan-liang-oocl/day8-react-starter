import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8090/parking-lot',
});

export const getParkingLots = () => {
    return axiosInstance.get('');
};

export const parkCar = (plateNumber, parkingBoyStrategy) => {
    return axiosInstance.post('/park', {
        plateNumber,
        parkingBoyStrategy
    });
};

export const fetchCar = (plateNumber) => {
    return axiosInstance.post('/fetch', {
        plateNumber
    });
};