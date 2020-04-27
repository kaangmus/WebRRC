import React, { Component } from 'react';
import ManagePost from "./../components/Admin/ManagePost";
import InsertPost from "../components/Admin/InsertPost";


class Admin extends Component {


    render() {
        return (
            <div>
                <InsertPost />
                <ManagePost/>

            </div>
        );
    }
}

export default Admin;
