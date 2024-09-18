// Need to get blog data into the sidebar function, should be an array of objects
// 

import { Link } from "react-router-dom";
import { yearMonthToReadableString } from "../Helpers";
import axios from "axios";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const [archives, setArchives] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/blog/archives`);
                setArchives(res.data);
            }
            catch (err) {
                //Error?
            }
        };

        fetchData();
    }, []);

    // const getRecent = () => {
    //     let list: JSX.Element[] = [];
    //     let result: JSX.Element[]= [];

    //     blogs.map((blogPost, index) => {
    //             return list.push(
    //                 <li key={index.toString()}>
    //                     <Link to={`/blog/${blogPost.slug}`} className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
    //                         {/* <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
    //                         <img className="rounded" width='100%' height='100' style={{objectFit: 'cover'}} src={blogPost.thumbnail} alt="thumbnail"/>
    //                         <div className="col-lg-8">
    //                             <h6 className="mb-0">{blogPost.title}</h6>
    //                             <small className="text-body-secondary">{datetimeToReadableString(blogPost.date_created)}</small>
    //                         </div>
    //                     </Link>
    //                 </li>
    //                 // <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
    //                 //     <div className="col p-4 d-flex flex-column position-static">
    //                 //         <strong className="d-inline-block mb-2 text-primary-emphasis">{capitalizeFirstLetter(blogPost.category)}</strong>
    //                 //         <h3 className="mb-0">{blogPost.title}</h3>
    //                 //         <div className="mb-1 text-body-secondary">{blogPost.month} {blogPost.day}</div>
    //                 //         <p className="card-text mb-auto">{blogPost.excerpt}</p>
    //                 //         <Link to={`/blog/${blogPost.slug}`} className="icon-link gap-1 icon-link-hover stretched-link"></Link>
    //                 //     </div>
    //                 //     <div className="col-auto d-none d-lg-block">
    //                 //         <img width='200' height='250' src={blogPost.thumbnail} alt='thumbnail' />
    //                 //     </div>
    //                 // </div>
    //             );
    //     });

    //     for (let i = 0; i < 3 && i < list.length; i += 1) {
    //         result.push(
    //             <ul className="list-unstyled">
    //                 {list[i]}
    //             </ul>
    //         )
    //     }

    //     return result;
    // };

    // const getArchiveLinks = () => {
        
    // };

    const getArchiveLinks = () => {
        let list = [];

        for (let i = 0; i < archives.length; i++) {
            list.push(
                <Link key={`archivelink_${i}`} to={`/blog/archive/${archives[i][0]}/${archives[i][1]}`}>
                    <button className="btn btn-secondary btn-block m-1 rounded-pill">{yearMonthToReadableString(archives[i][0], archives[i][1])}</button>
                </Link>
            )
        }

        return list;
    }


    const getCategoryLinks = () => (
        <div>
            <Link key="categorylink_1" to="/blog/category/technology"><button className="btn btn-primary rounded-pill m-1 btn-block">Technology</button></Link>
            <Link key="categorylink_2" to="/blog/category/design"><button className="btn btn-primary rounded-pill m-1 btn-block">Design</button></Link>
            <Link key="categorylink_3" to="/blog/category/social-media"><button className="btn btn-primary rounded-pill m-1 btn-block text-nowrap">Social Media</button></Link>
        </div>
    )

    return (
            <div className="position-sticky" style={{top: "6rem"}}>
                <div className="p-4 mb-3 bg-body-tertiary rounded">
                    <h4 className="fst-italic">About</h4>
                    <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                </div>

                <div>
                    <h4 className="fst-italic">Categories</h4>
                    {getCategoryLinks()}
                    {/* {getRecent()} */}
                </div>

                <div>
                    <h4 className="fst-italic">Archives</h4>
                    <div>
                        {getArchiveLinks()}
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;