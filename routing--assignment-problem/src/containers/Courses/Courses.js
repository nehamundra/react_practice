import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import './Courses.css';
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],

        selectcourse:null
    }

    selectedCourse=(id)=>{
        this.state.courses.forEach(ele=>{
            if(ele.id===id){
                this.setState({selectcourse:ele})
            }
        })
    }

    render() {

        return (
                <div>
                    <h1>Amazing Udemy Courses</h1>
                    <section className="Courses">
                        {
                            this.state.courses.map(course => {
                                return <Link to={'/Courses/' + course.id} className="Course" 
                                key={course.id} onClick={()=>{this.selectedCourse(course.id)}}>
                                    <article >{course.title}</article>
                                    {/* <Course data={course}/> */}
                                </Link>;
                            })
                        }
                    </section>
                    <Switch>

                        <Route path={'/Courses/:id'} render={(props)=>
                        <Course {...props} data={this.state.selectcourse}/> 
                        }/>

                    </Switch>
                </div>
        );
    }
}

export default Courses;