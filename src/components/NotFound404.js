import React from 'react';
import { Link } from 'react-router-dom'

const NotFound404 = () => (
    <div>
        <h2>404 - File Not Found</h2>
        <Link to="/">Return to HomePage</Link>
    </div>
)

export default NotFound404;