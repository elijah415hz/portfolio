import React from 'react'

export default function Project(props) {
    return (
        <div>
            <br></br>
            <h3>{props.title}</h3>
            <img src={props.img} alt="screenshot" className="project-pic img-thumbnail"/>
             {props.description}
            <div className="flex-line">
              <span className="git-link">
                <a href={props.repo} target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                  <span> See code on Github</span></a>
              </span>
              <span className="git-link">
                <a href={props.deployed} target="_blank" rel="noreferrer">
                  View project
                </a>
              </span>
            </div>
        </div>
    )
}
