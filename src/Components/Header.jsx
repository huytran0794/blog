import React, { useState } from 'react';
import logo from '../Assets/imgs/logo.png';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import searchIcon from '../Assets/imgs/search.svg';
import { useNavigate } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    background: "#1f303a",
    borderRadius: "13px",
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1, 1.5, 0),
        color: "#fff",
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '170px'
        },
    }
}));

function Header(props) {
    let navigate = useNavigate();
    let body = document.querySelector("body");
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const handleMobileMenu = () => {
        if (openMobileMenu) {
            body.style.cssText = "";
            setOpenMobileMenu(false)

        } else {
            body.style.cssText = `overflow: hidden; position: fixed;`;
            setOpenMobileMenu(true);
        }

        setOpenSubmenu(false);
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 992) {
                setOpenMobileMenu(false);
                setOpenSubmenu(false);
                body.style.cssText = "";
            }
        })
    }, [])

    const handleSearch = (e) => {
        if (e.key == "Enter") {
            if(e.target.value) {
                navigate(`/search/title=${e.target.value}`)
            }
        }
    }

    return (
        <div id='header' className={`header ${openMobileMenu ? "mobile-menu-active" : ""}`}>
            <div className="container">
                <div className="header-logo">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>

                <div className="header-action">
                    <div className="header-menu">
                        <div className="close-mobile-menu" onClick={handleMobileMenu}>
                            <svg id="Capa_1" enableBackground="new 0 0 189.524 189.524" height="512" viewBox="0 0 189.524 189.524" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path clipRule="evenodd" d="m121.564 67.959c1.851 1.85 1.851 4.85 0 6.701l-46.904 46.904c-1.85 1.851-4.85 1.851-6.701 0-1.85-1.851-1.85-4.85 0-6.701l46.905-46.905c1.85-1.849 4.85-1.849 6.7.001z" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m67.959 67.959c1.85-1.85 4.85-1.85 6.701 0l46.905 46.904c1.851 1.851 1.851 4.851 0 6.702-1.851 1.85-4.85 1.85-6.701 0l-46.905-46.905c-1.85-1.85-1.85-4.85 0-6.701z" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m94.762 180.048c47.102 0 85.286-38.183 85.286-85.286 0-47.102-38.183-85.286-85.286-85.286-47.102 0-85.286 38.184-85.286 85.286s38.184 85.286 85.286 85.286zm0 9.476c52.335 0 94.762-42.427 94.762-94.762 0-52.336-42.427-94.762-94.762-94.762-52.336 0-94.762 42.426-94.762 94.762 0 52.335 42.426 94.762 94.762 94.762z" fillRule="evenodd" /></g></g></svg>
                        </div>

                        <ul className='list-menu'>
                            <li className='item'><NavLink to="/snippets">Snippets</NavLink></li>
                            <li className='item'><NavLink to="/">Bài viết</NavLink></li>
                            <li className='item'><a href="https://www.youtube.com/channel/UCvhF2Z30xTnFNtynhC1WSbw">Kênh Youtube</a></li>
                            <li className="item parent-item" onClick={() => setOpenSubmenu(!openSubmenu)}>
                                <a className='link-has-submenu' href="#">
                                    <span>Khoá học</span>
                                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                <div className={`sub-menu ${openSubmenu ? "active" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 32 12"
                                        className="submenu-arrow">
                                        <path d="M 0 12 C 8 12 9.6 0 16 0 C 22.4 0 24 12 32 12 Z" />
                                    </svg>

                                    <ul className='list'>
                                        <li><a href="/snippets">Khoá học DevOps (For backend developer)</a></li>
                                        <li><a href="#">Data Analyst Bootcamp – Bộ khóa học toàn diện dành cho người mới</a></li>
                                        <li><a href="#">Khoá học Đầu tư và phát triển dự án Blockchain (App/Game)</a></li>
                                        <li><a href="#">Khoá học Lập Trình Solidity Ethereum Blockchain</a></li>
                                        <li><a href="#">Khoá học Lập trình Blockchain NFT Marketplace, Web3</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className='item'><NavLink to="/member">Dành cho học viên</NavLink></li>
                            <li className='item'><NavLink to="/contact">Liên hệ</NavLink></li>

                        </ul>
                    </div>

                    <div className="header-search">
                        <Search onKeyDown={handleSearch}>
                            <div className="search-icon">
                                <img style={{ width: "18px" }} src={searchIcon} alt="" />
                            </div>
                            <StyledInputBase
                                placeholder="Tìm kiếm"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>

                    <div className="open-mobile-menu" onClick={handleMobileMenu}>
                        <svg height="512" viewBox="0 0 16 16" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_31" data-name="31"><path d="m15.5 4h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z" /><path d="m15.5 9h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z" /><path d="m15.5 14h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z" /></g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;