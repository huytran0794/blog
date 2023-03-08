import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScorllTop(props) {
    
    const onTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    return (
        <div className='scroll-top' onClick={onTop}>
            <ArrowUpwardIcon />
        </div>
    );
}

export default ScorllTop;