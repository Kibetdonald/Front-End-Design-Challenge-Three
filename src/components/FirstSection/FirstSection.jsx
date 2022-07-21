import React from 'react'
import './FirstSection.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FirstSection() {
  return (
    <div className="FirstSection">
    <div className="row">
        <div className="col-md-6">
           <div className="LeftContainer">
           <p className="TextOne">So you, want to travel to</p>
            <p className="TextTwo">SPACE</p>
            <br/>
            <p className="TextThree">Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of it. 
                Well sit back, and relax because we'll give you a truly out of this world
                experience!
            </p>
       
           </div>
        </div>
        <div className="col-md-6">
          <div className="Explore">
          <p className="exploreText">Explore</p>
          </div>
        </div>
    </div>
    </div>
  )
}
