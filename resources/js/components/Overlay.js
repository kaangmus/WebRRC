import React, {Component} from 'react';
import Player from "./Player";
import Logo from './../../../uploads/images/coverwrrc.jpeg';

class Overlay extends Component {
    render() {
        return (
            <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${Logo})`}}
                 data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">
                            <h1>Listen &mdash; On-Air Now</h1>
                            <p className="mb-4"><span className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>


                            <Player />


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Overlay;
