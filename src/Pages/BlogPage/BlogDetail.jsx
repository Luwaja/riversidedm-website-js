import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { datetimeToObject } from '../components/Helpers';
import Sidebar from '../../assets/Components/Sidebar/Sidebar';
import './Blog.css'

const BlogDetail = () => {
    const [blog, setBlog] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/${id}`);
                setBlog(res.data);
            }
            catch (err) {
                //Error
            }
        };
        fetchData();
    }, [id]);

    const createBlog = () => {
        return { __html: blog.content }
    };

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    }

    // var date = datetimeToObject(blog.date_created);
    return (
        <div className='container mt-3'>
            <div className="row g-5">
                <div className='col-md-8'>
                    <h1 className='display-2'>{blog.title}</h1>
                    <h2 className='text-muted mt-3'>Category: {capitalizeFirstLetter(blog.category)}</h2>
                    {/* <h4>{date.month} {date.day} {date.year}</h4> */}
                    <div id='blog-content' className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
                    <hr />
                    <p className='lead mb-5'><Link to='/blog' className='font-weight-bold'>Back to Blogs</Link></p>
                </div>
                <div className="col-md-4">
                    {Sidebar()}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;