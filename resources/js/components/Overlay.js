import React from 'reactn';
import Logo from './../../../uploads/images/coverwrrc.jpeg';
import Blog from "./Blog";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import firebase from "firebase";
var Blur = require('react-blur').default;
import { RiVoiceprintLine, RiMusic2Line } from "react-icons/ri";
import BannerCarousel from "./ui/bannerCarousel";
import FbPage from "./fbPage";
import FbComments from "./fbComments";


class Overlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: "http://radioregionecampania.it:8000/tester",
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
                this.setState({
                    title: playable.data()['Title'],
                    src: "http://radioregionecampania.it:8000/tester",
                    live: false,
                    image: playable.data()['Image']
                })
            })
        })


    }

    switchSrc(post) {
        this.setState({src: 'uploads/records/' + post.rec, image: post.img, title: post.title})
    }


    render() {
        return (
            <div>



                <Blur img={Logo} blurRadius={10} enableStyles>
                    <div className="site-blocks-cover overlay" data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-6 col-xs-12 text-center" data-aos="fade-up" data-aos-delay="400">
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

                <div data-aos="fade" style={{marginTop: '5%'}}>
                    <div className="container site-section-heading">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <FbPage />
                            </div>

                            <div className="col-md-1"/>

                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <FbComments />
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade" style={{marginTop: '5%'}}>
                    <div className="container site-section-heading">
                        <h2 className="text-center mb-5">Partnership</h2>
                        <div className="row justify-content-center">

                            <div className="col-md-7 col-lg-7 ">
                                <BannerCarousel />
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
