import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header'
import './Contact.css'
const Contact = () => {
    return (
        <>
            <Header />  <br />
            <section className="container p-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div class="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                            <div class="card-header">Header</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Success card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div class="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                            <div class="card-header">Header</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Success card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div class="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                            <div class="card-header">Header</div>
                            <div class="card-body text-success">
                                <h5 class="card-title">Success card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container p-5">
                <div className="row">

                    <div className="col-md-7 col-sm-12 col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58144.49451616144!2d88.5709962733903!3d24.380228204729786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi!5e0!3m2!1sen!2sbd!4v1621701194400!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div className="col-md-5 col-sm-12 col-12 bg-light p-5">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-lg sbtn">Send Email</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Contact;