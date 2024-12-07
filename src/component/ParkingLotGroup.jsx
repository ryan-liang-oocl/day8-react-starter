import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParkingLotView from './ParkingLotView';
import { Row, Col } from 'antd';
import ParkingLotService from "../service/ParkingLotService";

const ParkingLotGroup = () => {
    const [parkingLots, setParkingLots] = useState([]);

    useEffect(() => {
        ParkingLotService.getParkingLots().then(response => {
            setParkingLots(response.data);
        }).catch(error => {
            console.error('Error fetching parking lots:', error);
        });
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