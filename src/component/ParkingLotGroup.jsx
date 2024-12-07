import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParkingLotView from './ParkingLotView';
import { Row, Col } from 'antd';

const ParkingLotGroup = () => {
    const [parkingLots, setParkingLots] = useState([]);

    useEffect(() => {
        const mockData = [
            { id: 1, name: 'Lot 1', spaces: Array(9).fill(null) },
            { id: 2, name: 'Lot 2', spaces: Array(12).fill(null) },
        ];
        setParkingLots(mockData);
    }, []);

    return (
        <Row gutter={[16, 16]}>
            {parkingLots.map(lot => (
                <Col key={lot.id} span={12}>
                    <ParkingLotView lot={lot} />
                </Col>
            ))}
        </Row>
    );
};

export default ParkingLotGroup;