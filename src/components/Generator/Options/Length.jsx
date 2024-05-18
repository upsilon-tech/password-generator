import React from 'react';
import './Length.css';

const Length = ({ passwordLength, setPasswordLength }) => {
    return (
        <div className="input-container">
            <label className="label">
                <span className="length-value">{passwordLength}</span>
            </label>
            <input
                type="range"
                onChange={(e) => setPasswordLength(e.target.value)}
                min={8}
                max={32}
                step={1}
                value={passwordLength}
                className="slider"
            />
        </div>
    );
}

export default Length;
