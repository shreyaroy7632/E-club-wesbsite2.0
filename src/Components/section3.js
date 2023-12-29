import React from "react";
import './section3.css';
import Card2 from "./Cards";

import "./section3.css"
const Section3 = () => {
       return(
       <>
       <p className="recent">
        Club Activities
       </p>
       <div className="horizontal23">
       
       <Card2
        imageUrl="project.jpg"
        heading="Projects"
        description="Every year Electronics club coducts projects during summer under Science and Techonology Council."
      />
      <Card2
        imageUrl="workshop.jpg"
        heading="Workshops"
        description="Various workshops are organised over the year to give a hands-on experience in various fields."
      />
      <Card2
        imageUrl="techkriti.jpg"
        heading="Techkriti"
        description="The club participates in the annual Technological and Entrepreneurial festival of IIT Kanpur."
      />
      
      <Card2
        imageUrl="takneek.jpg"
        heading="Takneek"
        description="A competition in which all the halls participate with one aim in mind, winning the coveted Takneek trophy."
      /> 
      <Card2
        imageUrl="wintercamp.png"
        heading="Winter Camp"
        description="Various workshops are organised over the year to give a hands-on experience in various fields."
      />
      <Card2
        imageUrl="lectures.jpg"
        heading="Lectures"
        description="Electronics club conducts lectures round the year covering various topics of electronics."
      />

       </div>
      
       </>
       )
}
export default Section3;