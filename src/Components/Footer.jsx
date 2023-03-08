import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(props) {
    return (
        <div className='footer'>
            <div className="container">
                <div className="copyright">
                    <h5>Website, name & logo © 2019-2023 - Developer Journey</h5>
                    <h5>Powered by Vercel, Nodejs, Next.js & GitHub</h5>
                </div>

                <div className="social-icons">
                    <ul className='list-icon'>
                        <li><a href="#"><GitHubIcon fontSize="small" /></a></li>
                        <li><a href="#"><FacebookOutlinedIcon fontSize="small" /></a></li>
                        <li><a href="#"><TwitterIcon fontSize="small"/></a></li>
                        <li><a href="#"><YouTubeIcon fontSize="medium"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;