import React from 'react';
import Department from './Department/Department';
import Saleoff from './SaleOff/Saleoff';
import ShopTabs from './ShopTabs/ShopTabs';
import Footer from '../Footer/Footer'
const Shop = () => {
    return (
        <>
            <section className="container mt-3 p-5">
                <div className="row">
                    <div className="col-md-4 col-sm-3 col-12">
                        <h3>Department</h3> <br />
                        <Department />
                    </div>
                    <div className="col-md-8 col-sm-9 col-12">
                        <div className=""> <h4>Sale off</h4></div>
                        <Saleoff />
                    </div>
                </div>
            </section>
            <br />
            <section className=" mt-5">
                <ShopTabs />
            </section>
            <section className="">
                <Footer/>
            </section>
        </>
    );
};

export default Shop;