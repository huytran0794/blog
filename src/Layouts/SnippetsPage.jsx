import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import SnippetsItem from '../Components/SnippetsItem';
import FooterBanner from '../Components/FooterBanner';
import Footer from '../Components/Footer';
import ScorllTop from '../Components/ScorllTop';

function SnippetsPage(props) {
    const pageTitle = {
        snippetsTitle: {
            title: "Snippets tổng hợp",
            subTitle: "Tổng hợp các đoạn code ngắn hữu ích cho lập trình viên"
        }
    }

    return (
        <div className='snippets-page'>
            <Header />
            <SnippetsItem pageTitle={pageTitle.snippetsTitle}/>
            <FooterBanner />
            <Footer />
            <ScorllTop />
        </div>
    );
}

export default SnippetsPage;