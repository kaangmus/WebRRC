import React, {Component} from 'react';

class FbComments extends Component {
    render() {
        return (
            <div>
                <div className="fb-comments"
                     data-mobile={true}
                     data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5"
                     data-width="100px"/>
            </div>
        );
    }
}

export default FbComments;
