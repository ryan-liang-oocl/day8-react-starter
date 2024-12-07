import React from 'react';
import ParkingLotView from './ParkingLotView';
import { Row, Col } from 'antd';
import './css/ParkingLotGroup.css';

const ParkingLotGroup = ({ parkingLots }) => {
    return (
        <Row gutter={[16, 16]} className="parking-lot-group">
            {parkingLots.map(lot => (
                <Col key={lot.id} span={12}>
                    <ParkingLotView lot={lot} />
                </Col>
            ))}
        </Row>
    );
};

export default ParkingLotGroup;