import React, { useState, useEffect } from 'react';
import APIs from '../APIs/APIs';
import PropTypes from 'prop-types';
import YouTubeIcon from '@mui/icons-material/YouTube';
import icon from '../Assets/imgs/video-icon.png';

function Videos({ pageTitle }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getAllPost = async () => {
            await APIs().getEntries({
                content_type: 'videos',
            }).then((entries) => {
                setVideos(entries.items)
            })
        }
        getAllPost()
    }, [])

    return (
        <div className='video-section section'>
            <div className="container">
                <div className="page-title">
                    <h2 className="title">{pageTitle.title}</h2>
                    <p className='sub-title'>{pageTitle.subTitle}</p>
                </div>

                <div className="video-wrap">
                    {
                        videos.length ? (
                            videos.map((item, index) => {
                                return (
                                    <div className="video-item" key={item.sys.id}>
                                        <div className="thumb">
                                            <div className="icon">
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <a href={item.fields.link}><img src={item.fields.miniThumb.fields.file.url} alt="thumb" /></a>
                                        </div>

                                        <div className="content-wrap">
                                            <h2>{item.fields.title}</h2>
                                            <div className="categories">
                                                <YouTubeIcon />

                                                <span>Youtube</span>
                                            </div>
                                            <div className="description">
                                                <p>{item.fields.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : null
                    }


                </div>
            </div>
        </div>
    );
}

export default Videos;