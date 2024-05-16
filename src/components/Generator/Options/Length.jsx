import React from 'react';
import './Length.css';

const Length = ({ passwordLength, setPasswordLength }) => {
    return (
        <div className="input-container">
            <label className="label" htmlFor="length">Characters<span>{passwordLength}</span></label>
            <input
                type="range"
                onChange={(e) => setPasswordLength(e.target.value)}
                min={8}
                max={24}
                step={1}
                value={passwordLength}
                className="slider"
            />
        </div>
    );
}

export default Length;
