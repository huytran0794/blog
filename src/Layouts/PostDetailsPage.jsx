import React, { useState, useEffect } from 'react';
import APIs from '../APIs/APIs';
import Markdown from 'markdown-to-jsx'
import { useParams } from 'react-router-dom';
import PostItem from '../Components/PostItem';
import Code from '../Components/Code'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ScorllTop from '../Components/ScorllTop';

function PostDetails(props) {
    const [post, setPost] = useState(undefined);
    const [copiedLink, setCopiedLink] = useState(false);
    const { param } = useParams();
    const id = param.split("-").at(-1);

    useEffect(() => {
        const getDetailsPost = async () => {
            await APIs().getEntry(id).then((entries) => {
                setPost(entries)
            })
        }

        getDetailsPost()
    }, [])

    return (
        <div className="details-page">
            <Header />
            <div className="details-section">
                {
                    post ? (
                        <div className='post-item-details'>
                            <div className="container">
                                <div className="details">
                                    <h2>{post.fields.title}</h2>

                                    <div className="author-info">
                                        <div className="avatar">
                                            <img src={post.fields.author.avatar} alt="avt" />
                                        </div>
                                        <div className="info">
                                            <h5>{post.fields.author.name}</h5>
                                            <h6>{post.fields.author.role}</h6>
                                        </div>
                                    </div>

                                    <div className="post-info">
                                        <ul className='list-info'>
                                            <li>
                                                <span className='title'>Date: </span>
                                                <span className='date'>{post.fields.date}</span>
                                            </li>

                                            <li>
                                                <span className='title'>Category: </span>
                                                <span className='cat'>{post.fields.categories.join(", ")}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="main-content">
                                        <div className="post-image">
                                            <figure>
                                                <img width="auto" height="auto" src={post.fields.postImage.fields.file.url} />
                                            </figure>
                                        </div>

                                        <div className="inner-content">
                                            {
                                                post.fields.contentDetails ? (
                                                    <Markdown options={{
                                                        overrides: {
                                                            Code: {
                                                                component: Code
                                                            }
                                                        }
                                                    }}>
                                                        {post.fields.contentDetails}
                                                    </Markdown>
                                                ) : null
                                            }

                                            <div className="last-update">
                                                <h5>{post.fields.lastUpdate}</h5>
                                                <div className="separator"></div>
                                            </div>
                                        </div>

                                        <div className="block-quote">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                            </div>
                                            <blockquote>
                                                <h3>Visual Studio Code Extension !</h3>
                                                <p>Bản thân mình khi mới bắt rất mông lung. Quá trình tự học ban đầu phải nói là cực kỳ gian nan và gặp nhiều khó khăn. Mọi thứ phải tự mày mò <a href="#">trên Internet</a>, nhưng khổ cái là mỗi người chia sẻ đều theo 1 kiểu khác nhau. Ai cũng cho quan điểm kiến thức của họ đúng <a href="#">Now it's time to take</a> 1 kiểu khác nhau 1 kiểu khác nhau the next step by subscribing to my newsletter and following.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            <Footer />
            <ScorllTop />
        </div>
    );
}

export default PostDetails;