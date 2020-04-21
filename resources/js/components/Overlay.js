import React from 'reactn';
import Logo from './../../../uploads/images/coverwrrc.jpeg';
import Blog from "./Blog";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import firebase from "firebase";
var Blur = require('react-blur').default;
import { RiVoiceprintLine, RiMusic2Line } from "react-icons/ri";


class Overlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: "http://radioregionecampania.it:8000/example",
            live: true,
            image: Logo,
            title: "On-Air Now"
        }
        this.loadNotLive = this.loadNotLive.bind(this);
        this.switchSrc = this.switchSrc.bind(this)
    }



    loadNotLive() {

        firebase.firestore().collection('live').doc('fRyNSFBYXLcVFnU58f1A').get().then(res => {
            firebase.firestore().collection('blog').doc(res.data()['LiveRec']).get().then(playable => {
                console.log(playable.data())
                this.setState({
                    title: playable.data()['Title'],
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

                <Blur img={Logo} blurRadius={10} enableStyles>
                    <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
                                    <h1>Listen &mdash; {this.state.title} {this.state.live && <RiVoiceprintLine />} {!this.state.live && <RiMusic2Line />}</h1>
                                    <p className="mb-4"><span className="small">Tanta musica per tutti i gusti , ma anche tanta buona informazione per stare al passo con i tempi .
                                        Ascoltare cose belle insegna a pensare ed agire.</span>
                                    </p>

                                    <AudioPlayer
                                        autoPlay={false}
                                        loop={true}
                                        src={this.state.src}
                                        showSkipControls={false}
                                        showJumpControls={false}
                                        showDownloadProgress={false}
                                        showFilledProgress={false }
                                        onPlay={() => console.log("onPlay")}
                                        onError={() => this.loadNotLive()}
                                        onEnded={() => {if (!this.state.live) {
                                            this.loadNotLive()
                                        }}}
                                    />


                                </div>

                            </div>
                        </div>
                    </div>
                </Blur>

                <div className="bg-primary" data-aos="fade">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3 className="text-center text-white"></h3>
                            <a href="https://www.facebook.com/Web-Radio-Regione-Campania-103449527993974/" className="col-2 text-center py-4 social-icon d-block text-white"><span
                                className="icon-facebook text-white"/></a>
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
