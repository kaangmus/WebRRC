import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import firebase from "firebase";
import Post from "./ui/Post";
import img from './../../../uploads/images/img_1.jpg';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '...',
            img: img,
            date: null,
            isUploading: false,
            progress: 0,
            visible: false
        }
        this.changeDate = this.changeDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    changeDate(date) { this.setState({ date }) }

    createPost(){
        firebase.firestore().collection('blog').add({
            Title: this.state.title,
            Date: this.state.date,
            Visible: this.state.visible
        }).then(() => {

        }).catch(err => {
            console.log(err)
        });

        this.setState({
            title: '...',
            date: null,
            visible: false
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.createPost();
    }

    changeVisibility() {
        if (this.state.visible) {
            this.setState({visible: false})
        } else {
            this.setState({visible: true})
        }
    }

    render() {
        return (
            <div>
                <div className="site-blocks-cover inner-page-cover overlay" data-aos="fade"
                     data-stellar-background-ratio="0.5" data-aos="fade">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">

                                <h2 className="text-white h1">Aggiungi una registrazione</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-md-6 col-lg-6 mb-5">

                                <form action="#" className="p-5 bg-white" onSubmit={this.handleSubmit}>

                                    <div className="row form-group">
                                        <div className="col-md-12 mb-3 mb-md-0">
                                            <label className="font-weight-bold" htmlFor="fullname">Titolo</label>
                                            <input type="text"
                                                   id="fullname"
                                                   onChange={this.handleChange}
                                                   name="title"
                                                   value={this.state.title}
                                                   className="form-control"
                                                   placeholder="Full Name"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Data</label>
                                            <br/>
                                            <DatePicker
                                                onChange={this.changeDate}
                                                value={this.state.date}
                                                format="d-MM-y"
                                            />
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Visibile</label>
                                            <input type="checkbox"
                                                   id="subject"
                                                   onChange={this.changeVisibility}
                                                   name="visible"
                                                   checked={this.state.visible}
                                                   className="form-control"
                                            />
                                        </div>
                                    </div>


                                    <div className="row form-group">
                                        <div className="col-md-4">
                                            <input type="submit" value="Aggiungi"
                                                   className="btn btn-primary  py-2 px-4 rounded-0"/>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <Post
                                title={this.state.title}
                                date={this.state.date}
                                img={this.state.img}
                            />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;
