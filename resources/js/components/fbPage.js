import React, {Component} from 'react';

class FbPage extends Component {
    render() {
        return (
            <div className="text-center">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWeb-Radio-Regione-Campania-103449527993974%2F%3Fepa%3DSEARCH_BOX&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=194721887735996"
                    width="340" height="450" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0"
                    allowTransparency="true" allow="encrypted-media"/>
            </div>
        );
    }
}

export default FbPage;
