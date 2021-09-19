import React from 'react';

import Error404 from '../assets/IMG-20421.png';
import './GenericNotFound.css';

const GenericNotFound = () => (
    <div className="Error404 TextAlign">
       
        <img
            style={{ width: '100%' }} src={Error404}
            alt="Page not found" />
    </div>
)


export default GenericNotFound;