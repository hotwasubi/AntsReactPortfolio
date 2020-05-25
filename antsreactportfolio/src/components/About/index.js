import React from "react";
import "./style.css";


function About(props) {
    return (
<div className="container">
     <div id="jumbotron"className="jumbotron jumbotron-fluid">

         <div className="container">
             <h1>Hello, I'm <strong>Anthony Colindres</strong></h1>
             <p className="text-align-left">Welcome to my react based Portfolio! We've worked hard to reach this point so please check out my past projects below or reach out if you want to hire me!  . . . please
            </p>
         </div>
     </div>
     {/* row 1 */}
<div id="card" className="row row-cols-4">
    <div className="card" style={{ width: `18rem` }}>
  <div className="card-body">
    <h5 className="card-title">Portfolio v 1.0</h5>
    <p className="card-text">This is my first ever hosted portfolio. Using basic HTML & CSS</p>
    <a href="https://github.com/hotwasubi/portfolio-" className="card-link">Github Repo</a>
    <a href="https://hotwasubi.github.io/portfolio-/" className="card-link">Hosted Page</a>
  </div>
</div>
{/* react emp dir */}
<div className="card" style={{ width: `10rem`  }}>
  <div className="card-body">
    <h5 className="card-title">React Employee Directory</h5>
    <p className="card-text">React based app to cycle through a directory of employees.</p>
    <a href="https://github.com/hotwasubi/reactEmpDir" className="card-link">Github Repo</a>
    <a href="https://hotwasubi.github.io/reactEmpDir/" className="card-link">Hosted Page</a>
  </div>
</div>
{/* pawty time */}
<div class="card" style={{ width: `18rem` }}>
  <div class="card-body">
    <h5 class="card-title">Pawty Time</h5>
    <p class="card-text">My second group project where i was incharge of the Front-End/UI. This App is a dog walking app where a user can signup and register for a walk</p>
    <a href="https://github.com/hotwasubi/pawtyTime" class="card-link">Github Repo</a>
    <a href="https://pawtytime.herokuapp.com/" class="card-link">Hosted Page</a>
  </div>
</div>

</div>

{/* row 2 */}
{/* veg head */}
<div id="card" className="row row-cols-4">
    <div className="card" style={{ width: `18rem` }}>
  <div className="card-body">
    <h5 className="card-title">Veg-Head</h5>
    <p className="card-text">This is my was my first group project. Where I was once again in charge of the Front-End/UI. This app was the first time we used an API. </p>
    <a href="https://github.com/yarocruz/veg-head" className="card-link">Github Repo</a>
    <a href="https://yarocruz.github.io/veg-head/" className="card-link">Hosted Page</a>
  </div>
</div>

<div className="card" style={{ width: `10rem`  }}>
  <div className="card-body">
    <h5 className="card-title">Weather Dashboard</h5>
    <p className="card-text">A weather forecaster using an API that will give you the forecast for the week based upon the City you provide</p>
    <a href="https://github.com/hotwasubi/weatherapi" className="card-link">Github Repo</a>
    <a href="https://hotwasubi.github.io/weatherapi/" className="card-link">Hosted Page</a>
  </div>
</div>




<div class="card" style={{ width: `18rem` }}>
  <div class="card-body">
    <h5 class="card-title">Password Generator</h5>
    <p class="card-text">A simple web app using basic JavaScript to provie a user with a random password</p>
    <a href="https://github.com/hotwasubi/pgenerator" class="card-link">Github Repo</a>
    <a href="https://hotwasubi.github.io/pgenerator/" class="card-link">Hosted Page</a>
  </div>
</div>

</div>



</div>
     

     
    )
}

export default About;