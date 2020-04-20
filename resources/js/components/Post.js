import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { MdPlayCircleOutline } from "react-icons/md";

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member">
                    <div className="unit-9">
                        <div className="image" style={{backgroundImage: `url(${this.props.img})`}}/>
                        <div className="unit-9-content">
                            <h2>{this.props.title}</h2>
                            <span><Moment format="DD MMM YYYY">{this.props.date !== null && this.props.date}</Moment></span>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-12 text">
                            <span className="d-block mb-2 text-white-opacity-05">
                                <a href="javascript:void(0)" className="text-white"><MdPlayCircleOutline size="4.5em" onClick={() => {this.props.getRec({rec: this.props.record, img: this.props.img})}}/></a>
                            </span>
                            <p style={{wordBreak: 'break-all' }}>{this.props.description}</p>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default Post;
