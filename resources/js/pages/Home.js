import React, {Component} from 'react';
import Overlay from "../components/Overlay";
import Player from "../components/Player";
import Blog from "../components/Blog";

class Home extends Component {
    render() {
        return (
            <div>
                <Overlay />
                <Blog />
            </div>
        );
    }
}

export default Home;
