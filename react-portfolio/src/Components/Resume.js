import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <br /> <em className="date">{education.graduated}</em><span>&bull;</span><em className="date">{education.gpa}</em></p>
        <p>{education.description}</p></div>
      })
     

      var skills = this.props.data.skills.map((skills)=>{
        var className = skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      


      <div className="row skills">
      <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {skills}
               </div>
            </div>
         </div>
         
      </div>
   </section>
    );
  }
}

export default Resume;
