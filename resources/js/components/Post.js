import React, {Component} from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200"
                 onClick={() => {this.props.getRec(this.props.record)}}>
                <div className="unit-9">
                    <div className="image" style={{backgroundImage: `url(${this.props.img})`}}/>
                    <div className="unit-9-content">
                        <h2>{this.props.title}</h2>
                        <span><Moment format="DD MMM YYYY">{this.props.date !== null && this.props.date}</Moment></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
