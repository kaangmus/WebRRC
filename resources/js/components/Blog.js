import React, {Component} from 'react';
import img from './../../../uploads/images/img_1.jpg';
import {FirestoreCollection} from "react-firestore";
import Post from "./ui/Post";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'



class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 2,
        }
    }

    render() {
        return (
            <div className="site-section">

                <div className="pb-5">

                    <div className="container">

                        <div className="row">
                            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                                 data-aos="fade-up">
                                <h2 className="mb-5">Weekly Radio Program</h2>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <FirestoreCollection
                                path="blog"
                                sort="Date:desc"
                                limit={this.state.limit}
                                render={({ isLoading, data }) => {
                                    return isLoading ? (
                                        <div className="col-md-12 text-center">
                                            <Loader
                                                type="Audio"
                                                color="black"
                                                height={100}
                                                width={100}
                                                visible={true}
                                            />
                                        </div>
                                    ) : (

                                        data.map(post => (

                                            post.Visible &&

                                            <Post key={post.id}
                                                  title={post.Title}
                                                  date={post.Date.toDate()}
                                                  img={img}
                                            />
                                        ))
                                    );
                                }}
                            />
                        </div>
                        <div className="col-md-12 text-center" style={{marginTop: '5%'}}>
                            <p onClick={() => {this.setState({limit: this.state.limit + 1})}}>
                                <h3 className="btn btn-primary  py-2 px-4 rounded-0">Meno Recenti</h3>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Blog;
