import React from 'react';
import fbg from '../../../images/fbg.png'
const RecentBlogs = () => {
    return (
        <>
            <div className="mt-2">
                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div class="row g-0">
                        <div class="col-md-4 p-2 mt-5">
                            <img style={{ width: '100px', height: '100px' }} src={fbg} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div class="row g-0">
                        <div class="col-md-4 p-2 mt-5">
                            <img style={{ width: '100px', height: '100px' }} src={fbg} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div class="card mb-3" style={{ maxWidth: "1000px" }}>
                    <div class="row g-0">
                        <div class="col-md-4 p-2 mt-5">
                            <img style={{ width: '100px', height: '100px' }} src={fbg} alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentBlogs;