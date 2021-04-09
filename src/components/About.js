import React from 'react'
import raincoat from '../images/raincoat.jpg'

export default function About() {
    return (
        <div className="col-sm-11 bg-light about-me">
            <h2>About Me</h2>
            <hr />
            <div className="col-12 no-padding">
                <figure className="figure float-left">
                    <img src={raincoat} alt="raincoat" className="raincoat" />
                    <figcaption className="figure-caption">

                    </figcaption>
                </figure>
                <p>
                    I am a freelance classical singer turned web developer. As I singer I worked with some of the best professional choirs in the country, winning a Grammy Award with one of them in 2018. I've been studying software development for the past few years, hoping to eventually pivot into a new career that doesn't require me to be on the road so much. The loss of most of my singing work following the arrival of the pandemic allowed me to start working full time on making this career shift, recently culminating in the completion of the University of Washington's Full-Stack Web Development Bootcamp.
                    </p>
                <p>
                    In my work as both a musician and developer I consider myself to be primarily a craftsman. My job is to know my tools well, and strive for elegance in my use of those tools. I’m still near the beginning of my web-development journey and I have lots to learn, but so far I’ve shown myself to be passionate about my work, curious about everything, and effective at getting the job done.
                    </p>
                <br></br>
                <p>
                    Languages: JavaScript, TypeScript, Python, HTML, CSS<br></br>
                    Libraries / Tools: Git, MongoDB, MySQL, Node, Express, Flask, Pandas, Matplotlib, React
                    </p>
            </div>
        </div>
    )
}
