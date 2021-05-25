import React from 'react';
import fbg from '../../../images/fbg.png'
const Tab3 = () => {
    return (
        <>
            <div className="row p-5">
                <div className="col-md-4 col-sm-4 col-12 mt-2">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={fbg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-12 mt-2">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={fbg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-12 mt-2">
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={fbg} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tab3;