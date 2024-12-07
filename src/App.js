import React, { useState } from 'react';
import PlateNumberInput from './component/PlateNumberInput';
import ParkingStrategySelector from './component/ParkingStrategySelector';
import ParkingLotGroup from './component/ParkingLotGroup';
import ActionsButton from './component/ActionsButton';
import './App.css';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const App = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('SequentiallyStrategy');

    const handlePark = () => {
        console.log(`Parking ${plateNumber} with ${strategy} strategy`);
    };

    const handleFetch = () => {
        console.log(`Fetching ${plateNumber} with ${strategy} strategy`);
    };

    return (
        <Layout>
            <Header style={{ color: 'white', textAlign: 'center' }}>Parking Lot Management</Header>
            <Content style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <PlateNumberInput value={plateNumber} onChange={e => setPlateNumber(e.target.value)} />
                    <ParkingStrategySelector value={strategy} onChange={e => setStrategy(e.target.value)} />
                    <ActionsButton plateNumber={plateNumber} strategy={strategy} onPark={handlePark} onFetch={handleFetch} />
                </div>
                <ParkingLotGroup />
            </Content>
        </Layout>
    );
};

export default App;