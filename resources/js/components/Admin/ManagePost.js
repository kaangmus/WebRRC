import React, { Component } from 'react';
import { FirestoreCollection } from 'react-firestore';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import PostAdmin from "./PostAdmin";
import firebase from "firebase";

class ManagePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 3
        };
        this.removePost = this.removePost.bind(this);
        this.setLivePost = this.setLivePost.bind(this);
    }


    removePost(id) {
        firebase.firestore().collection('blog').doc(id).delete().then(() => {
            console.log('deleted');
        }).catch(err => {
            console.log(err)
        })
    }


    setLivePost(id) {
        firebase.firestore().collection('live').doc('fRyNSFBYXLcVFnU58f1A').set({LiveRec: id}).then(() => {
            console.log('updated');
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>

                <div className="site-section bg-light">
                    <div className="container">


                        <div className="row no-gutters">
                            <FirestoreCollection
                                path="blog"
                                sort="Date:desc"
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

                                            <PostAdmin key={post.id}
                                                       id={post.id}
                                                       title={post.Title}
                                                       date={post.Date.toDate()}
                                                       img={post.Image}
                                                       record={post.Record}
                                                       getRec={this.retrieveRecord}
                                                       description={post.Description}
                                                       removeId={this.removePost}
                                                       setLive={this.setLivePost}
                                            />
                                        ))
                                    );
                                }}
                            />
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default ManagePost;
