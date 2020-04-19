import React from 'reactn';
import Player from "./Player";
import Logo from './../../../uploads/images/coverwrrc.jpeg';
import Blog from "./Blog";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Overlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            src: "http://radioregionecampania.it:8000/home?type=.mp3",
            live: true
        }
        this.switchToPlay = this.switchToPlay.bind(this);
        this.switchSrc = this.switchSrc.bind(this)
    }

    switchToPlay() {
        this.setState({
            src: this.props.switchSrc,
            live: false
        })
    }

    switchSrc(src) {
        this.setState({src}, () => {
            console.log('switch src to' + this.state.src)})
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${Logo})`}}
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
                                    onError={() => this.switchToPlay()}
                                    onEnded={() => {if (!this.state.live) {
                                        this.switchToPlay()
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
