import React from 'react';
import { Button } from 'antd';

const ActionsButton = ({ onPark, onFetch }) => (
    <div>
        <Button type="primary" onClick={onPark} style={{ marginRight: '10px' }}>Park</Button>
        <Button type="default" onClick={onFetch}>Fetch</Button>
    </div>
);

export default ActionsButton;