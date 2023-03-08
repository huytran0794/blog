import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function CourseItem({pageTitle}) {
    return (
        <>
            <div className='course-section section'>
                <div className="container">
                    <div className="page-title">
                        <h2 className="title">{pageTitle.title}</h2>
                        <p>{pageTitle.subTitle}</p>
                    </div>

                    <ul className="course-list">
                        <li className='course-item'>
                            <div className="thumb">
                                <img src="https://evon.dev/_next/image?url=%2Fimages%2Fcourse%2Fkhoa-hoc-javascript.jpeg&w=1080&q=75" alt="" />
                            </div>

                            <div className="content">
                                <h2>Data Analyst Bootcamp – Bộ khóa học toàn diện dành cho người mới</h2>
                                <div className="course-item__price">
                                    <span className="sale-price">10,200,000 đ</span>
                                    <span className="regular-price">11,900,000 đ</span>
                                </div>
                                <ul>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Được xây dựng dựa trên Authentication nhu cầu</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Hỗ trợ 24/7, kết nối việc làm sau khóa học.</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Sử dụng Typescript như Fullstack</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>So sánh Cách Apollo quản lý cache vs Redux quản lý</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Unit test & Integration test cho các kỹ sư giỏi</span></li>
                                </ul>

                                <div className="link">
                                    <a href="#">Xem chi tiết
                                        <svg fill='#fff' id="Icons" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Right" d="m64 0c-35.289 0-64 28.711-64 64s28.711 64 64 64 64-28.711 64-64-28.711-64-64-64zm0 120c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56zm26.828-58.828c1.563 1.563 1.563 4.094 0 5.656l-20 20c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l13.172-13.172h-38.344c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344l-13.172-13.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className='course-item'>
                            <div className="thumb">
                                <img src="https://evon.dev/_next/image?url=%2Fimages%2Fcourse%2Fkhoa-hoc-html-css.jpeg&w=1080&q=75" alt="" />
                            </div>

                            <div className="content">
                                <h2>Khoá học ReactJS – Xây dựng chức năng Github với GraphQL</h2>
                                <div className="course-item__price">
                                    <span className="sale-price">10,200,000 đ</span>
                                    <span className="regular-price">11,900,000 đ</span>
                                </div>
                                <ul>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Được xây dựng dựa trên Authentication nhu cầu</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Hỗ trợ 24/7, kết nối việc làm sau khóa học.</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Sử dụng Typescript như Fullstack</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>So sánh Cách Apollo quản lý cache vs Redux quản lý</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Unit test & Integration test cho các kỹ sư giỏi</span></li>
                                </ul>

                                <div className="link">
                                    <a href="#">Xem chi tiết
                                        <svg fill='#fff' id="Icons" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Right" d="m64 0c-35.289 0-64 28.711-64 64s28.711 64 64 64 64-28.711 64-64-28.711-64-64-64zm0 120c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56zm26.828-58.828c1.563 1.563 1.563 4.094 0 5.656l-20 20c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l13.172-13.172h-38.344c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344l-13.172-13.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className='course-item'>
                            <div className="thumb">
                                <img src="https://evon.dev/_next/image?url=%2Fimages%2Fcourse%2Fkhoa-hoc-reactjs.jpeg&w=1080&q=75" alt="" />
                            </div>

                            <div className="content">
                                <h2>Khoá học Lập trình Blockchain Web3 NFT Marketplace, Ethereum Blockchain</h2>
                                <div className="course-item__price">
                                    <span className="sale-price">10,200,000 đ</span>
                                    <span className="regular-price">11,900,000 đ</span>
                                </div>
                                <ul>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Được xây dựng dựa trên Authentication nhu cầu</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Hỗ trợ 24/7, kết nối việc làm sau khóa học.</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Sử dụng Typescript như Fullstack</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>So sánh Cách Apollo quản lý cache vs Redux quản lý</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Unit test & Integration test cho các kỹ sư giỏi</span></li>
                                </ul>

                                <div className="link">
                                    <a href="#">Xem chi tiết
                                        <svg fill='#fff' id="Icons" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Right" d="m64 0c-35.289 0-64 28.711-64 64s28.711 64 64 64 64-28.711 64-64-28.711-64-64-64zm0 120c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56zm26.828-58.828c1.563 1.563 1.563 4.094 0 5.656l-20 20c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l13.172-13.172h-38.344c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344l-13.172-13.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <li className='course-item'>
                            <div className="thumb">
                                <img src="https://evon.dev/_next/image?url=%2Fimages%2Fcourse%2Fkhoa-hoc-html-css-master.png&w=1080&q=75" alt="" />
                            </div>

                            <div className="content">
                                <h2>Khoá học ReactJS – Xây dựng chức năng Github với GraphQL</h2>
                                <div className="course-item__price">
                                    <span className="sale-price">10,200,000 đ</span>
                                    <span className="regular-price">11,900,000 đ</span>
                                </div>
                                <ul>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Được xây dựng dựa trên Authentication nhu cầu</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Hỗ trợ 24/7, kết nối việc làm sau khóa học.</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Sử dụng Typescript như Fullstack</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>So sánh Cách Apollo quản lý cache vs Redux quản lý</span></li>
                                    <li><CheckCircleIcon style={{fontSize: 20, color: "#fff"}}/> <span>Unit test & Integration test cho các kỹ sư giỏi</span></li>
                                </ul>

                                <div className="link">
                                    <a href="#">Xem chi tiết
                                        <svg fill='#fff' id="Icons" enableBackground="new 0 0 128 128" height="512" viewBox="0 0 128 128" width="512" xmlns="http://www.w3.org/2000/svg"><path id="Right" d="m64 0c-35.289 0-64 28.711-64 64s28.711 64 64 64 64-28.711 64-64-28.711-64-64-64zm0 120c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56zm26.828-58.828c1.563 1.563 1.563 4.094 0 5.656l-20 20c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l13.172-13.172h-38.344c-2.209 0-4-1.789-4-4s1.791-4 4-4h38.344l-13.172-13.172c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CourseItem;