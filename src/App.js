import React, { useState, useEffect } from 'react';
import PlateNumberInput from './component/PlateNumberInput';
import ParkingStrategySelector from './component/ParkingStrategySelector';
import ParkingLotGroup from './component/ParkingLotGroup';
import ActionsButton from './component/ActionsButton';
import './App.css';
import { Layout, message } from 'antd';
import { getParkingLots } from './service/ParkingLotService';

const { Header, Content } = Layout;

const App = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('SequentiallyStrategy');
    const [parkingLots, setParkingLots] = useState([]);
    const [isPlateNumberValid, setIsPlateNumberValid] = useState(false);

    const fetchParkingLots = () => {
        getParkingLots()
            .then(response => {
                setParkingLots(response.data);
            })
            .catch(error => {
                message.error(`Error fetching parking lots: ${error.response.data}`);
            });
    };

    useEffect(() => {
        fetchParkingLots();
    }, []);

    const handlePark = () => {
        message.success(`Parking ${plateNumber} with ${strategy} strategy was successful`);
        fetchParkingLots();
    };

    const handleFetch = () => {
        message.success(`Fetching ${plateNumber} with ${strategy} strategy was successful`);
        fetchParkingLots();
    };

    return (
        <Layout>
            <Header className="layout-header">Parking Lot Management</Header>
            <Content className="layout-content">
                <div className="flex-container">
                    <PlateNumberInput
                        value={plateNumber}
                        onChange={e => setPlateNumber(e.target.value)}
                        onValidationChange={setIsPlateNumberValid}
                    />
                    <ParkingStrategySelector value={strategy} onChange={e => setStrategy(e.target.value)} />
                    <ActionsButton
                        plateNumber={plateNumber}
                        strategy={strategy}
                        onPark={handlePark}
                        onFetch={handleFetch}
                        disabled={!isPlateNumberValid}
                    />
                </div>
                <ParkingLotGroup parkingLots={parkingLots} />
            </Content>
        </Layout>
    );
};

export default App;