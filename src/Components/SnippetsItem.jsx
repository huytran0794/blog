import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams, Link } from 'react-router-dom';
import APIs from '../APIs/APIs';
import jsIcon from '../Assets/imgs/js.png';
import cssIcon from '../Assets/imgs/css.png';
import reactIcon from '../Assets/imgs/react.png';
import pythonIcon from '../Assets/imgs/python.png';
import gitIcon from '../Assets/imgs/git.png';

function SnippetsItem({ pageTitle }) {
    const [snippets, setSnippets] = useState({});
    const { collection } = useParams();
    const [skip, setSkip] = useState(0);

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
        const getAllPost = async () => {
            await APIs().getEntries({
                content_type: 'snippets',
                query: collection ? collection : '',
                skip: skip,
                limit: 6,
            }).then((entries) => {
                setSnippets(entries)
            })
        }
        getAllPost()
    }, [skip, collection]);

    console.log(collection)

    const handlePageChange = (e, page) => {
        setSkip((6 * page) - 6);
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    const removeVietnameseTones = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }

    return (
        <>
            <div className='categories-section section'>
                <div className="container">
                    <ul className="collections-shelf-list">
                        <li className="collection-chip"><img src={jsIcon} alt="js" /><Link to="/snippets/Javascript-collection">Javascript</Link></li>
                        <li className="collection-chip"><img src={cssIcon} alt="js" /><Link to="/snippets/CSS">CSS/SCSS</Link></li>
                        <li className="collection-chip"><img src={reactIcon} alt="js" /><Link to="/snippets/ReactJS">ReactJS</Link></li>
                        <li className="collection-chip"><img src={pythonIcon} alt="js" /><Link to="/snippets/Python">Python</Link></li>
                        <li className="collection-chip"><img src={jsIcon} alt="js" /><Link to="/snippets/Algorithm">Algorithm</Link></li>
                        <li className="collection-chip"><img src={gitIcon} alt="js" /><Link to="/snippets/Git">Git</Link></li>
                    </ul>
                </div>
            </div>
            {
                snippets.hasOwnProperty("items") ? (
                    <div className='snippets-section section'>
                        <div className="container">
                            <div className="page-title">
                                <h3 className="title">{pageTitle.title}</h3>
                                <p>{pageTitle.subTitle}</p>
                            </div>

                            <ul className="post-list snippets-list">
                                {
                                    snippets.items.map((item, index) => {
                                        return (
                                            <li className="post-item" key={item.sys.id}>
                                                <div className="post-meta">
                                                    <div className="thumb">
                                                        <img src={item.fields.miniThumb.fields.file.url} alt="thumb" />
                                                    </div>

                                                    <div className="meta-content">
                                                        <h2 className="title"><a href={`blog/${removeVietnameseTones(item.fields.title.replace(/ /g, "-"))}-${item.sys.id}`} className="inherit">{item.fields.title}</a></h2>
                                                        <p className="meta-categories">{item.fields.categories.join(", ")}</p>
                                                    </div>
                                                </div>
                                                <div className="description">
                                                    <p>{item.fields.desc}</p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="pagination">
                                <ThemeProvider theme={theme}>
                                    <Pagination onChange={handlePageChange} color="primary" count={Math.ceil(snippets.total / 6)}/>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
}

export default SnippetsItem;