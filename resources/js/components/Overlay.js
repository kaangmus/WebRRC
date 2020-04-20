import React from 'reactn';
import Logo from './../../../uploads/images/coverwrrc.jpeg';
import Blog from "./Blog";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import firebase from "firebase";

class Overlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: "http://radioregionecampania.it:8000/home?type=.mp3",
            live: true,
            image: Logo
        }
        this.loadNotLive = this.loadNotLive.bind(this);
        this.switchSrc = this.switchSrc.bind(this)
    }

    loadNotLive() {

        firebase.firestore().collection('live').doc('fRyNSFBYXLcVFnU58f1A').get().then(res => {
            firebase.firestore().collection('blog').doc(res.data()['LiveRec']).get().then(playable => {
                console.log(playable.data())
                this.setState({
                    src: playable.data()['Record'],
                    live: false,
                    image: playable.data()['Image']
                }, () => {
                    console.log(this.state.image)})
            })
        })


    }

    switchSrc(post) {
        this.setState({src: post.rec, image: post.img}, () => {
            console.log('switch src to' + this.state.src )})
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${this.state.image})`}}
                     data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">
                                <h1>Listen &mdash; On-Air Now</h1>
                                <p className="mb-4"><span className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </p>

                                <AudioPlayer
                                    autoPlay={false}
                                    loop={true}
                                    src={this.state.src}
                                    showSkipControls={false}
                                    showJumpControls={false}
                                    onPlay={() => console.log("onPlay")}
                                    onError={() => this.loadNotLive()}
                                    onEnded={() => {if (!this.state.live) {
                                        this.loadNotLive()
                                    }}}

                                    // other props here
                                />


                            </div>
                            <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">


                            </div>

                        </div>
                    </div>
                </div>

                <Blog
                    onSwitchSource={this.switchSrc}
                />
            </div>

        );
    }
}

export default Overlay;
