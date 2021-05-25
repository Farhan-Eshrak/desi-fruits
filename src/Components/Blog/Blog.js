import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import BlogCard from './BlogCard/BlogCard';
import BlogCard2 from './BlogCard2/BlogCard2';
import Catagories from './Catagories/Catagories';
import RecentBlogs from './RecentBlogs/RecentBlogs';

const Blog = () => {
    return (
        <>
        <Header/>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-6">
                       <BlogCard2/>
                       <BlogCard2/>
                       <BlogCard2/>
                       <BlogCard2/>
                    </div>

                    <div className="col-md-4 col-sm-12 col-6">
                        <section className='mt-5'>
                            <h5>Catagories</h5> <br />
                            <Catagories/>
                        </section>
                        <section className='mt-5'>
                            <h5>Recent Blogs</h5> <br />
                            <RecentBlogs/>
                        </section>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique officiis inventore, eveniet nobis excepturi provident culpa dolor, laudantium repellat expedita nostrum amet, rem commodi quam quia ab voluptate enim ut! Fugiat, blanditiis aliquam laudantium fuga, nobis ea architecto est laborum quo nam earum similique et eos, cupiditate qui voluptatem esse.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Blog;