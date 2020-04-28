import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>

                <div className="site-wrap">

                    <div className="site-navbar mt-4">
                        <div className="container py-1">
                            <div className="row align-items-center">
                                <div className="col-8 col-md-8 col-lg-4">
                                    <h1 className="mb-0"><a href="/" className="text-white h2 mb-0"><strong>Web Radio Regione Campania<span
                                        style={{color: '#258FA5'}}>.</span></strong></a></h1>
                                </div>
                                <div className="col-4 col-md-4 col-lg-8">
                                    <nav className="site-navigation text-right text-md-right" role="navigation">

                                    </nav>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default Navbar;
