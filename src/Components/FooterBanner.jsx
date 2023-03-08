import React from 'react';
import PropTypes from 'prop-types';

function FooterBanner(props) {
    return (
        <div className='footer-banner-section section'>
            <div className="container">
                <div className="subscribe__block">
                    <div className="subscribe__block--body">
                        <div className="subscribe__bg">
                            <div className="subscribe__bg--element">
                                <picture>
                                    <source srcSet="https://handmade.company/darkfrontiers/img/index/subscribe/ThumbsUp.webp" type="image/webp" />
                                    <img src="https://handmade.company/darkfrontiers/img/index/subscribe/ThumbsUp.webp" alt="" width={350} height={376} loading="lazy" />
                                </picture>
                            </div>
                            <div className="subscribe__bg--element">
                                <picture>
                                    <source srcSet="https://handmade.company/darkfrontiers/img/index/subscribe/rocket.webp" type="image/webp" />
                                    <img src="https://handmade.company/darkfrontiers/img/index/subscribe/rocket.webp" alt="" width={250} height={250} loading="lazy" />
                                </picture>
                            </div>
                        </div>
                        <div className="subscribe__inner">
                            <h2 className="subscribe__title section-title _super-large">Bạn đã sẵn sàng trở thành <br></br> lập trình viên chuyên nghiệp?</h2>
                            <div className="subscribe__text">
                                Đăng ký để nhận các nội dung mới nhất 🔥
                            </div>
                            <form action="#" className="subscribe__form">
                                <label className="subscribe__form--label">
                                    <input type="email" name="email" placeholder="Nhập email" required className="subscribe__form--input" />
                                </label>
                                <button className="subscribe__submit btn" type="submit">
                                    Ok
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FooterBanner;