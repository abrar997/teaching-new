import React, { Component } from 'react'
import "./ExploreCours.css";

//  img
import img7 from './ExploreCoursImage/7.jpg'


export class ExploreCours extends Component {
constructor(){
    super();
    this.state = {
      course: [
        { img: img7, name: "data scince", number: "770 course" },
        { img: img7, name: "bussiness", number: "770 course" },
        { img: img7, name: "personal evelopment", number: "770 course" },
        { img: img7, name: "language learning", number: "770 course" },
        { img: img7, name: "social science", number: "770 course" },
        { img: img7, name: "graphic deigner", number: "770 course" },
        { img: img7, name: "programming", number: "770 course" },
        { img: img7, name: "information technlogy", number: "770 course" },
        { img: img7, name: "computer science", number: "770 course" },
        { img: img7, name: "artes and humanitis", number: "770 course" },
        { img: img7, name: "halth", number: "770 course" },
      ],
    };
}


    render() {
 const {course}=this.state;
 const courseList=course.map((course,ind)=>{
return (
  <div key={ind} className="item">
    <div className="image col-md-6">
      <img src={course.img} />
    </div>
    <div className="col-md-6 tex">
      <h3>{course.name}</h3>
      <h5>{course.number}</h5>
    </div>
  </div>
);

 })
 
 
 
 

        return (
          <div>
            <section className="ExploreCours" >
              <div className="container">
                <div className="row">
                  <h1>Explore Courses</h1>
               <a>   <div className="cards">
                      {courseList}
</div></a>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default ExploreCours
