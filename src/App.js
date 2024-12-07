import React, { useState } from 'react';
import PlateNumberInput from './component/PlateNumberInput';
import ParkingStrategySelector from './component/ParkingStrategySelector';
import ParkingLotGroup from './component/ParkingLotGroup';
import ActionsButton from './component/ActionsButton';
import './App.css';
import { Layout, message } from 'antd';

const { Header, Content } = Layout;

const App = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [strategy, setStrategy] = useState('SequentiallyStrategy');

    const handlePark = () => {
        message.success(`Park car: ${plateNumber} was successful`);
    };

    const handleFetch = () => {
        message.success(`Fetch car: ${plateNumber} was successful`);
    };

    return (
        <Layout>
            <Header className="layout-header">Parking Lot Management</Header>
            <Content className="layout-content">
                <div className="flex-container">
                    <PlateNumberInput value={plateNumber} onChange={e => setPlateNumber(e.target.value)}/>
                    <ParkingStrategySelector value={strategy} onChange={e => setStrategy(e.target.value)}/>
                    <ActionsButton plateNumber={plateNumber} strategy={strategy} onPark={handlePark}
                                   onFetch={handleFetch}/>
                </div>
                <ParkingLotGroup />
            </Content>
        </Layout>
    );
};

export default App;