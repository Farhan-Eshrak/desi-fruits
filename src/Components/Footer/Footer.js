import React from 'react';
import Subscription from './Subsciption/Subscription';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg pt-2'>
            <div className="container mt-5 p-3">
                <div className="row">
                    <div className="col-md-4 col-12 col-sm-6">
                        <h3>Aamer Mela</h3> <br />
                        <p>
                            <h6>Address:Rajshahi</h6>
                            <h6>Phone: +880 123 456</h6>
                            <h6>Email: amermela@gmail.com</h6>
                        </p>
                    </div>
                    <div className="col-md-4 col-12 col-sm-6">
                        <h4>Useful Links</h4>
                        <p>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-12">
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12 col-12">
                                    <ul>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                        <li>lorem</li>
                                    </ul>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className="col-md-4 col-12 col-sm-6">
                        <h4>Join our newsletter now</h4> <br />
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <p>
                            <Subscription />
                        </p> <br />
                        <p className='d-flex'>
                            <Link to='' className='socialLinks'><div className="mx-2"><FaFacebook /></div></Link>
                            <Link to='' className='socialLinks'> <div className="mx-2"><FaInstagram /></div></Link>
                            <Link to='' className='socialLinks'> <div className="mx-2"><FaTwitter /></div></Link>
                        </p>
                    </div>
                </div>
                <hr />
                <p>
                    Copyright ©{new Date().getFullYear()} All rights reserved | telHunt
                </p>

            </div>
        </div>
    );
};

export default Footer;