import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [device, setDevice] = useState('');

    const handleGetDevice = async () => {
        const device = await navigator.hid.requestDevice({ filters: [] });
        setDevice(device[0]);
    };

    return (
        <div className="main-container">
            <button onClick={handleGetDevice}>GET DEVICE</button>
            <p style={{ color: 'white' }}>productName: {device?.productName}</p>
            <p style={{ color: 'white' }}>productId: {device?.productId}</p>
            <p style={{ color: 'white' }}>vendorId: {device?.vendorId}</p>
        </div>
    );
};

export default App;