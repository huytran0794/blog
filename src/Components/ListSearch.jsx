import React from 'react';
import Error from './Error';

function ListSearch({ data }) {
    const removeVietnameseTones = (str) => {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    }

    return (
        <div className='search-section'>
            <div className="container">
                {data === "not found" ? <Error /> : null}

                {Array.isArray(data) ? (
                    <div className='search-list'>
                        <h1 style={{ marginBottom: "35px", fontSize: "32px" }}>Tìm thấy: {data.length} kết quả</h1>
                        <ul className='list-item'>
                            {
                                data.map((item, index) => {
                                    return (
                                        <li className='result-item' key={item.sys.id}>
                                            <div className="title-wrap">
                                                <h2 className='title'>{item.fields.title}</h2>
                                                <h5>{item.fields.readingTime}</h5>
                                            </div>

                                            <div className="meta-wrap">
                                                <p className='author-name'>{item.fields.authorName}</p>
                                                <p>|</p>
                                                <p className='author-name'>{item.fields.categories.join(", ")}</p>
                                            </div>
                                            <p className='description'>{item.fields.desc}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                ) : null
                }
            </div>
        </div>
    );
}

export default ListSearch;