import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import APIs from '../APIs/APIs';
import Header from '../Components/Header';
import ListSearch from '../Components/ListSearch';
import Footer from '../Components/Footer';

function SearchPage(props) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState(undefined);
    const { param } = useParams();
    const keyword = param.split("=")[1];

    const removeVietnameseTones = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }

    useEffect(() => {
        const getAllPost = async () => {
            await APIs().getEntries().then((entries) => {
                const data = entries.items.filter((item) => removeVietnameseTones(item.fields.title.toLowerCase()).includes(keyword) || removeVietnameseTones(item.fields.desc.toLowerCase()).includes(keyword));
                setPosts(data.length ? data : "not found" )
            })
        }

        getAllPost();
    }, [keyword])
    
    return (
        <div className='search-page'>   
            <Header />
            <ListSearch data={posts}/>
            <Footer />
        </div>
    );
}

export default SearchPage;