import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">About Radios</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur
                                    reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut
                                    veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-6 mb-lg-0">

                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Follow Us</h3>

                                    <div>
                                        <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;
