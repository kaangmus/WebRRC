import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from "firebase";
import axios from "axios";
let data = new FormData();


export default class InsertPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '...',
            description: '',
            img: '',
            date: null,
            isUploading: false,
            progress: 0,
            visible: false,
            file: '',
            imagePreviewUrl: '',
            recordFile: '',
            recordUrl: ''
        }

        this.changeDate = this.changeDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
    }

    changeDate(date) { this.setState({ date }) }

    _handleImageChange(e) {
        e.preventDefault();

        let file = e.target.files[0];
        this.setState({
            file: file,
        }, function () {
            console.log('pic ok!')
        })

    }


    _handleRecordChange(e) {
        e.preventDefault();
        let record = e.target.files[0];
        this.setState({
            recordFile: record
        }, function () {
            console.log('song ok!')
        })

    }


    createPost(post) {
        firebase.firestore().collection('blog').add(post).then(() => {
            console.log("inserted");
            window.location.reload();
        }).catch(err => {
            console.log(err)
        });


    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        data.append('image', this.state.file, this.state.file.fileName);
        data.append('record', this.state.recordFile, this.state.recordFile.fileName);

        axios.post('/api/insertPost', data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}; audio/mp3`,
            }

        }).then(response => {
            console.log(response.data.recordFile)
            let post = {
                Title: this.state.title,
                Date: this.state.date,
                Visible: this.state.visible,
                Image: response.data.imageFile,
                Record: response.data.recordFile,
                Description: this.state.description
            };
            this.createPost(post);

        }).catch(err => {
            console.log(err.response.data.message);
        });


    }

    changeVisibility() {
        if (this.state.visible) {
            this.setState({ visible: false })
        } else {
            this.setState({ visible: true })
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
                                                placeholder="Full Name" />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" htmlFor="email">Data</label>
                                            <br />
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
                                        <div className="col-md-12">
                                            <label className="font-weight-bold" >Immagine</label>
                                            <input className="fileInput"
                                                type="file"
                                                name="image"
                                                onChange={(e) => this._handleImageChange(e)} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold">Registrazione</label>
                                            <input className="fileInput"
                                                type="file"
                                                name="record"
                                                onChange={(e) => this._handleRecordChange(e)} />
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="font-weight-bold">Descrizione</label>
                                            <textarea
                                                onChange={this.handleChange}
                                                name="description"
                                                value={this.state.description}
                                                className="form-control"
                                                placeholder="Aggiungi una descrizione.." />

                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-4">
                                            <input type="submit" value="Aggiungi"
                                                className="btn btn-primary  py-2 px-4 rounded-0" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

