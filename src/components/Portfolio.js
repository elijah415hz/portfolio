import React from 'react'
import homepageScreenshot from "../images/homepageScreenshot.png"
import elected_officials from "../images/elected_officials.png"
import weatherThumbnail from "../images/weatherThumbnail.png"
import passwordGeneratorPreview from "../images/passwordGeneratorPreview.png"
import workoutTracker from "../images/workoutTracker.png"
import employeeDirectory from "../images/employeeDirectory.png"
import Project from './Project'

export default function Portfolio() {
    return (
       
          <div className="col-sm-11 bg-light about-me portfolio-box">
            <h2>Portfolio</h2>
            <hr/>
    
            <Project 
              img={homepageScreenshot}
              title="We-patch"
              description={<p>A web application that gardening enthusiasts that lack space, to people willing to share their excess space.
              Owners of extra garden space can list their patches on We-patch, prospective gardeners can then find these
              patches via an intuitive map interface and connect with the owner. The site also gives an option to list a
              compost so that neighbors can drop off their excess yard waste and share cured compost.
              Created in collaboration with <a href="http://github.com/JSK321">JSK321,</a> <a href="http://github.com/Shunpintseng">Shunpintseng,</a> <a href="http://github.com/ckomodo">ckomodo,</a> and <a href="http://github.com/Petar85">Petar85</a>
              </p>}
              repo="https://github.com/elijah415hz/we-patch"
              deployed="https://we-patch.herokuapp.com/"
            />

            <Project
              img={workoutTracker}
              title="Workout Tracker"
              description={<p>
                A simple interface to help you keep track of your workouts. Built as an exploration in Mongoose and dynamically generating content with jQuery. Workout Tracker is built with full CRUD functionality and a simple, intuitive design.
              </p>}
              repo="https://github.com/elijah415hz/workout-tracker"
              deployed="https://eb-workout-tracker.herokuapp.com/"
            />

            <Project
              img={employeeDirectory}
              title="Employee Directory"
              description={<p>
                An initial dive into React, using class based components to hold state. This simple app relies on randomuser.me for its list of employees, and uses the power of React to give the user the ability to quickly search or sort the employees on the page. Given a real dataset, this app would be a clean and easy way to view any list of information. 
              </p>}
              repo="https://github.com/elijah415hz/employee-directory"
              deployed="https://eb-react-directory.herokuapp.com/"
            />

            <Project
              img={elected_officials}
              title="My Elected Officials"
              description={<p>
                An interactive web application that displays elected officials based on a user entered address. Designed with
                Materialize and jQuery, it is an exploration into API requests.
                Created in collaboration with <a href="http://github.com/asmarcd">asmarcd,</a> <a href="http://github.com/BrandonP321">BrandonP321,</a> <a href="http://github.com/Stefj12">Stefj12,</a> and <a href="http://github.com/natewinter">natewinter.</a>
              </p>}
              repo="https://github.com/elijah415hz/election-dashboard"
              deployed="https://elijah415hz.github.io/election-dashboard/"
            />  
            
            <Project
              img={weatherThumbnail}
              title="Weather Dashboard"
              description={<p>
                A weather dashboard using Open Weather Map to gather and display current weather and five day forecast for any
                location. Uses Geocode.io for autocomplete functionality and for converting the user's input into coordinates
                to be passed to Open Weather Map's One Call endpoint.
              </p>}
              repo="https://github.com/elijah415hz/06-weather-dashboard"
              deployed="https://elijah415hz.github.io/06-weather-dashboard/"
            />
            
            <Project 
              img={passwordGeneratorPreview}
              title="Password Generator"
              description={<p>
                Password Generator generates randomized passwords based on user inputs. After selecting the length and
                character types to include, the user is presented with a secure password.
              </p>}
              repo="https://github.com/elijah415hz/03-password-generator"
              deployed="https://elijah415hz.github.io/03-password-generator/"
            />

          </div>
          
     
    )
}
