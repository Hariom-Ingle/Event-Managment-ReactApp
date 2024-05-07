import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full flex'>
            <div className='w-1/5 p-0' id='sidebar'>
                <h2 className='px-2'>Filter Options</h2>
                <div className='border-b pb-3'>
                    <label htmlFor='citySelect' className='pt-5 p-2 font-bold'>Select City:</label>
                    <div className='input-group pt-3 px-3'>
                        <i className='bi bi-geo-alt'></i>
                        <input type='search' list='city' className='form-control rounded focus:outline-none search-field' id='filtercity' onKeyUp={() => filterCitys()} placeholder='Search' aria-label='Search' aria-describedby='search-addon' />
                        <datalist id='city'>
                            <option value='Akola'></option>
                            <option value='Yavatmal'></option>
                            <option value='Nagpur'></option>
                            <option value='Amravati'></option>
                        </datalist>
                    </div>
                </div>
                <div className='categorys border-b'>
                    <label className='py-3 px-2 font-bold' htmlFor='Category'>Category</label>
                    <div>
                        <option className='sort-option px-4 py-2' onClick={() => sortServices('All')}>All</option>
                        {/* Your PHP-generated options go here */}
                    </div>
                </div>
            </div>

            <Container>
                <div className='flex flex-wrap w-4/5'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
