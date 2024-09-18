import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from '../../assets/Components/Sidebar/Sidebar'
import { datetimeToObject } from '../../assets/Components/Helpers';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [featuredBlog, setFeaturedBlog] = useState([]);
    const catColor = {};
    catColor.technology = '#4682B4';
    catColor.design = '#C70039'
    catColor.socialMedia = '#F48B7C'

    // Fetch a featured post from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/featured`);
                setFeaturedBlog(res.data[0]);
            }
            catch (err) { /* empty */ }
        };

        fetchData();
    }, []);

    // Fetch an array of posts from the API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/`);
                setBlogs(res.data);
            }
            catch (err) { /* empty */ }
        };

        fetchBlogs();
    }, []);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    }

    // Create HTML to display blog cards with data from the API
    const getBlogs = () => {
        // Empty arrays to hold HTML
        const list = [];
        const result = [];

        // Map each blog post in the blogs array to a div card, unless it is the featured post
        blogs.map(blogPost => {
            if (!blogPost.featured) {
                const date = datetimeToObject(blogPost.date_created);
                return list.push(
                    <div className="blog-card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="transition"></div>
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2" style={{color: catColor[blogPost.category]}}>{capitalizeFirstLetter(blogPost.category)}</strong>
                            <h3 className="mb-0">{blogPost.title}</h3>
                            <div className="mb-1 text-body-secondary">{date.month} {date.day} {date.year}</div>
                            <p className="card-text mb-auto">{blogPost.excerpt}</p>
                            <Link to={`/blog/${blogPost.slug}`} className="icon-link gap-1 icon-link-hover stretched-link"></Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img style={{width: '250px', height: '250px', objectFit: 'cover'}} src={blogPost.thumbnail} alt='thumbnail' />
                        </div>
                    </div>
                );
            }
        });

        // Incrementally place the blog cards in a column within the bootstrap grid system
        for (let i = 0; i < list.length; i++) {
            result.push(
                <div key={`blogcard_${i}`} className='row mb-2'>
                    <div key={`blogelem_${i}`} className='col'>
                        {list[i]}
                    </div>
                    {/* <div className='col-md-6'>
                        {list[i + 1] ? list[i + 1] : null}
                    </div> */}
                </div>
            )
        }

        return list;
    };

    // Return the complete HTML document for the Blog page
    return (
        <div className="container mt-3">
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.excerpt}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-body-emphasis fw-bold">Continue reading...</Link>
                    </p>
                </div>
            </div>

            <div className="row g-5">
                <div className='col-md-8'>
                    {getBlogs()}
                </div>
                <div className="col-md-4">
                    {Sidebar()}
                </div>
            </div>
        </div>
    );

};

export default Blog;
