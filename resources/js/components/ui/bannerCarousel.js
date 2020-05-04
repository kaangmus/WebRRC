import React, {Component} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from '../../../images/banner1.png'
import img2 from '../../../images/banner2.png'
class BannerCarousel extends Component {
    render() {
        return (

                <Carousel
                    autoPlay={3000}
                    stopAutoPlayOnHover
                    infinite>
                    <img onClick={() => window.open('https://www.facebook.com/Studio-Odontoiatrico-Castaldo-1505004786417059') } className="img-fluid" src={img1} />
                    <img onClick={() => window.open('https://www.facebook.com/Streetdance-FSV-394427487946405')} className="img-fluid" src={img2} />

                </Carousel>

        );
    }
}

export default BannerCarousel;
