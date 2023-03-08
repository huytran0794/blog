import React from 'react';
import PropTypes from 'prop-types';
import Videos from '../Components/Videos';
import Header from '../Components/Header';
import PostItem from '../Components/PostItem';
import Footer from '../Components/Footer';
import FooterBanner from '../Components/FooterBanner';
import ScorllTop from '../Components/ScorllTop';
import { useDispatch, useSelector } from 'react-redux';

function PostPage(props) {
    const dispatch = useDispatch();
    const loaderStatus = useSelector((state) => {
        console.log('state');
        console.log(state);
    });
    const pageTitle = {
        postTitle: {
            title: "Tất cả bài viết",
            subTitle: "Chia sẻ kiến thức lập trình từ cơ bản đến nâng cao"
        }
    }
    return (
        <div className='post-page'>
            <Header />
            {loaderStatus()}
            <PostItem pageTitle={pageTitle.postTitle}/>
            <FooterBanner />
            <Footer />
            <ScorllTop />
        </div>
    );
}

export default PostPage;