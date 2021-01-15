import React from 'react';
import './app-header.css';
const AppHeader = ({like, post}) => {
    return (
        <div className="app-header d-flex">
            <h1>Mykola Haliuk</h1>
            <h2>{post} записів, із них сподобалося {like}</h2>
        </div>
    )
}
export default AppHeader;