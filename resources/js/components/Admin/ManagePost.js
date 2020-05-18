import React, { Component } from 'react';
import { FirestoreCollection } from 'react-firestore';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import PostAdmin from "./PostAdmin";
import firebase from "firebase";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class ManagePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 3,
            loader: false
        };
        this.removePost = this.removePost.bind(this);
        this.setLivePost = this.setLivePost.bind(this);
    }


    removePost(id) {
        firebase.firestore().collection('blog').doc(id).delete().then(() => {
        }).catch(err => {
            console.log(err)
        })
    }


    setLivePost(src, id) {
        this.setState({loader: true}, () => {
            axios.get('/api/shellPwd/' + src).then(response => {
                this.setState({
                    res: response.data
                }, () => {
                    firebase.firestore().collection('live').doc('fRyNSFBYXLcVFnU58f1A').set({
                        LiveRec: id
                    }).then(res => {
                    }).catch(err => {
                        console.log(err)
                    })
                })
            }).catch(err => {
                console.log(err.response.data);
            })
        })
        this.setState({loader: false}, () => NotificationManager.success('AutoDj aggiornato'))



    }

    render() {
        return (
            <div>

                <div className="site-section bg-dark">
                    <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
                         data-aos="fade-up">
                        <h2 className="mb-5 text-white">Rimuovi o modifica live</h2>
                    </div>
                    <div className="container text-center">
                        <Loader
                            type="Audio"
                            color="black"
                            height={100}
                            width={100}
                            visible={this.state.loader}
                        />
                        {this.state.loader === false && <div className="row no-gutters">
                            <FirestoreCollection
                                path="blog"
                                sort="Date:desc"
                                render={({ isLoading, data }) => {
                                    return isLoading ? (
                                        <div className="col-md-12 text-center">
                                            <Loader
                                                type="Audio"
                                                color="white"
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
                        </div>}


                    </div>

                </div>
                <NotificationContainer/>

            </div>

        );
    }
}

export default ManagePost;
