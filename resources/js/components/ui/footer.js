import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">La Radio</h3>
                                <p>Tanta musica per tutti i gusti , ma anche tanta buona informazione per stare al passo con i tempi.
                                    Ascoltare cose belle insegna a pensare ed agire.

                                </p>
                            </div>


                        </div>
                        <div className="col-lg-6 col-md-6 mb-lg-0">

                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Follow Us</h3>

                                    <div>
                                        <a href="https://www.facebook.com/Web-Radio-Regione-Campania-103449527993974/"
                                           className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;
