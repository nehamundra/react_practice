import React, { Component } from 'react';

class Course extends Component {
    render () {
        console.log(this.props.data)
        
        return (
            <div>
                <h1>{this.props.data?this.props.data.title:null}</h1>
                <p>You selected the Course with ID: {this.props.data?this.props.data.id:null}</p>
            </div>
        );
    }
}

export default Course;