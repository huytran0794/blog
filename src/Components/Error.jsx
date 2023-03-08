import React from 'react';
import PropTypes from 'prop-types';

function Error(props) {
    return (
        <div className="error-section">
            <div className="container">
                <div className="error-content">
                    <h1>404</h1>
                    <p>Page not found, return <a href="/">home.</a></p>
                </div>


            </div>
        </div>
    );
}

export default Error;