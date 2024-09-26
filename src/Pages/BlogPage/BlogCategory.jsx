import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../assets/Components/Sidebar/Sidebar';
import './Blog.css'

const BlogCategory = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const category = id === undefined ? '' : id;
        setCurrentCategory(capitalizeFirstLetter(category));

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };

        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog?category=${category}`);
                setBlogs(res.data);
            }
            catch (err) {
              // Error?
            }
        };

    fetchData();
    }, [id]);

    const capitalizeFirstLetter = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1);
        return '';
    }

    const getCategoryBlogs = () => {
        let list = [];
        let result = [];

        blogs.map(blogPost => {
            return list.push(
                <div className="blog-card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="transition"></div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">{capitalizeFirstLetter(blogPost.category)}</strong>
                        <h3 className="mb-0">{blogPost.title}</h3>
                        <div className="mb-1 text-body-secondary">{blogPost.month} {blogPost.day}</div>
                        <p className="card-text mb-auto">{blogPost.excerpt}</p>
                        <Link to={`/blog/${blogPost.slug}`} className="icon-link gap-1 icon-link-hover stretched-link"></Link>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img style={{width: '250px', height: '250px', objectFit: 'cover'}} src={blogPost.thumbnail} alt='thumbnail' />
                    </div>
                </div>
            );
        });

        for (let i = 0; i < list.length; i++) {
            result.push(
                <div key={`categorycard_${i}`} className='row mb-2'>
                    <div className='col'>
                        {list[i]}
                    </div>
                    {/* <div className='col-md-6'>
                        {list[i+1] ? list[i+1] : null}
                    </div> */}
                </div>
            )          
        }

        return result;
    };
    
    return (
        <div className='container mt-3'>
            <div className='border-bottom py-1 mb-3'>
                <h3 className='display-4 text-center'>{currentCategory} Category</h3>
            </div>
            <div className="row g-5">
                <div className='col-md-8'>
                    {getCategoryBlogs()}
                </div>
                <div className="col-md-4">
                    {Sidebar()}
                </div>
            </div>
        </div>
    )
};

export default BlogCategory;