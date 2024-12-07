import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8090'
});

const getParkingLots = () => {
    return axiosInstance.get('/parking-lots');
};

export default {
    getParkingLots,
    axiosInstance
};