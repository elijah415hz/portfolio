import React from 'react'

export default function Portfolio() {
    return (
        <div className="container">
        <div className="row justify-content-center justify-content-sm-start">
          <div className="col-sm-11 bg-light about-me portfolio-box">
            <h2>Portfolio</h2>
            <hr/>
    
    
            <img src="/images/homepageScreenshot.png" alt="screenshot" className="project-pic img-thumbnail"/>
            <h3>We-patch</h3>
            <p>
              A web application that gardening enthusiasts that lack space, to people willing to share their excess space.
              Owners of extra garden space can list their patches on We-patch, prospective gardeners can then find these
              patches via an intuitive map interface and connect with the owner. The site also gives an option to list a
              compost so that neighbors can drop off their excess yard waste and share cured compost.
              Created in collaboration with <a href="http://github.com/JSK321">JSK321,</a> <a href="http://github.com/Shunpintseng">Shunpintseng,</a> <a href="http://github.com/ckomodo">ckomodo,</a> and <a href="http://github.com/Petar85">Petar85</a> 
            </p>
            <div className="flex-line">
              <span className="git-link">
                <a href="https://github.com/elijah415hz/we-patch">
                  <i className="fa fa-github"></i>
                  <span> See code on Github</span>                </a>
              </span>
              <span className="git-link">
                <a href="https://we-patch.herokuapp.com/">
                  View project
                </a>
              </span>
            </div>
    
            <img src="/images/elected_officials.png" alt="screenshot" className="project-pic img-thumbnail"/>
            <h3>My Elected Officials</h3>
            <p>
              An interactive web application that displays elected officials based on a user entered address. Designed with
              Materialize and jQuery, it is an exploration into API requests.
              Created in collaboration with <a href="http://github.com/asmarcd">asmarcd,</a> <a href="http://github.com/BrandonP321">BrandonP321,</a> <a href="http://github.com/Stefj12">Stefj12,</a> and <a href="http://github.com/natewinter">natewinter.</a>
            </p>
            <div className="flex-line">
              <span className="git-link">
                <a href="https://github.com/elijah415hz/election-dashboard">
                  <i className="fa fa-github"></i>
                  <span> See code on Github</span>                </a>
              </span>
              <span className="git-link">
                <a href="https://elijah415hz.github.io/election-dashboard/">
                  View project
                </a>
              </span>
            </div>
            <img src="/images/weatherThumbnail.png" alt="screenshot" className="project-pic img-thumbnail"/>
            <h3>Weather Dashboard</h3>
            <p>
              A weather dashboard using Open Weather Map to gather and display current weather and five day forecast for any
              location. Uses Geocode.io for autocomplete functionality and for converting the user's input into coordinates
              to be passed to Open Weather Map's One Call endpoint.
            </p>
            <div className="flex-line">
              <span className="git-link">
                <a href="https://github.com/elijah415hz/06-weather-dashboard">
                  <i className="fa fa-github"></i>
                  <span> See code on Github</span>                </a>
              </span>
              <span className="git-link">
                <a href="https://elijah415hz.github.io/06-weather-dashboard/">
                  View project
                </a>
              </span>
            </div>
    
    
            <img src="/images/passwordGeneratorPreview.png" alt="screenshot" className="project-pic img-thumbnail"/>
            <h3>Password Generator</h3>
            <p>
              Password Generator generates randomized passwords based on user inputs. After selecting the length and
              character types to include, the user is presented with a secure password.
            </p>
            <div className="flex-line">
              <span className="git-link">
                <a href="https://github.com/elijah415hz/03-password-generator">
                  <i className="fa fa-github"></i>
                  <span> See code on Github</span>
                </a>
              </span>
              <span className="git-link">
                <a href="https://elijah415hz.github.io/03-password-generator/">
                  View project
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}
