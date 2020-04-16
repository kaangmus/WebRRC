import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toPlay: "http://radioregionecampania.it:8000/home?type=.mp3",
            live: true
        }
        this.switchToPlay = this.switchToPlay.bind(this);
    }


    switchToPlay() {
        this.setState({
            toPlay: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3",
            live: false
        })
    }


    render() {
        return (
            <div>
                <AudioPlayer
                    autoPlay={false}
                    loop={true}
                    src={this.state.toPlay}
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
        );
    }
}

export default Player;
