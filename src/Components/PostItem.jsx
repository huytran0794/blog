import React, { useState, useEffect, useRef } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams, Link } from 'react-router-dom';
import APIs from '../APIs/APIs';
import jsIcon from '../Assets/imgs/js.png';
import cssIcon from '../Assets/imgs/css.png';
import reactIcon from '../Assets/imgs/react.png';
import pythonIcon from '../Assets/imgs/python.png';
import gitIcon from '../Assets/imgs/git.png';

function PostItem({ pageTitle }) {
    const [posts, setPosts] = useState({});
    const [skip, setSkip] = useState(0);
    const { collection } = useParams();
    const previousCollection = useRef();
    const [page, setPage] = useState(1);

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#4b50e6',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    useEffect(() => {
        let correctSkip = skip;
        let currentPage = page;
        const checkFilter = () => {
            if(previousCollection.current !== collection) {
                previousCollection.current = collection;
                correctSkip = 0;
                currentPage = 1;
            }
        }
        const getAllPost = async () => {
            checkFilter();
            await APIs().getEntries({
                content_type: 'posts',
                query: collection ? collection : '',
                skip: correctSkip,
                limit: 6,
            }).then((entries) => {
                setPosts(entries)
                setPage(currentPage)
                
            })
        }

        getAllPost();
        
    }, [skip, collection]);

    const handlePageChange = (e, page) => {
        setPage(page);
        setSkip((6 * page) - 6);
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    const removeVietnameseTones = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }

    const hasPostItems = () => {
        return posts.hasOwnProperty("items") && posts.items.length > 0
    }

    return (
        <>
            <div className='categories-section section'>
                <div className="container">
                    <ul className="collections-shelf-list">
                        <li className="collection-chip"><img src={jsIcon} alt="js" /><Link to="/posts/Javascript-collection">Javascript</Link></li>
                        <li className="collection-chip"><img src={cssIcon} alt="js" /><Link to="/posts/CSS">CSS/SCSS</Link></li>
                        <li className="collection-chip"><img src={reactIcon} alt="js" /><Link to="/posts/ReactJS">ReactJS</Link></li>
                        <li className="collection-chip"><img src={pythonIcon} alt="js" /><Link to="/posts/Python">Python</Link></li>
                        <li className="collection-chip"><img src={jsIcon} alt="js" /><Link to="/posts/Algorithm">Algorithm</Link></li>
                        <li className="collection-chip"><img src={gitIcon} alt="js" /><Link to="/posts/Git">Git</Link></li>
                    </ul>
                </div>
            </div>

            {
                hasPostItems() ? (
                    <div className='post-section section'>
                        <div className="container">
                            {
                                pageTitle ? (
                                    <div className="page-title">
                                        <h3 className="title">{pageTitle.title}</h3>
                                        <p>{pageTitle.subTitle}</p>
                                    </div>
                                ) : null
                            }

                            <ul className="post-list">
                                {
                                    posts.items.map((item, index) => {
                                        return (
                                            <li className="post-item" key={item.sys.id}>
                                                <div className="post-image">
                                                    <img src={item.fields.miniThumb.fields.file.url} alt="image" />
                                                </div>

                                                <div className="content-wrap">
                                                    <div className="post-meta">
                                                        <div className="meta-content">
                                                            <div className="tracking-wider">
                                                                <h5 className='by'>{item.fields.authorName}</h5>
                                                                <div className="separator"></div>
                                                                <h5>{item.fields.readingTime}</h5>
                                                            </div>
                                                            <h2 className="title"><a href={`/post/${removeVietnameseTones(item.fields.title.replace(/ /g, "-"))}-${item.sys.id}`} className="inherit">{item.fields.title}</a></h2>
                                                        </div>
                                                    </div>
                                                    <div className="description">
                                                        <p>{item.fields.desc}</p>
                                                    </div>

                                                    <div className="link">
                                                        <a href="#">Read more</a>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="pagination">
                                <ThemeProvider theme={theme}>
                                    <Pagination onChange={handlePageChange} color="primary" count={Math.ceil(posts.total / 6)} page={page}/>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

export default PostItem;