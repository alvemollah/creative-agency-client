import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="my-4">
                            Let us handle your <br />
                            project, professionally.
                        </h1>
                        <small>
                            With well written codes, we build amazing apps for all <br />
                            platforms, mobile and web apps in general.
                        </small>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <input className="form-control mt-2" type="email" name="" placeholder="Your email address" id="" />
                            <input className="form-control mt-2" type="text" name="" placeholder="Your name/ Company name" id="" />
                            <textarea className="form-control mt-2" name="" placeholder="Your message" id="" cols="30" rows="10"></textarea>
                            <button className="btn brand-btn mt-2">Send</button>
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <small><strong>copyright Orange labs 2020</strong></small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;