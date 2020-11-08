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
                        I am a freelance classical singer turned web developer. I hold a masters degree in vocal
                        performance from New England Conservatory and have spent the last 5 years working as a full time
                        performer. I was born and raised in Seattle, where I now live, but have been living and working
                        in Boston and later New York for the last 8 years. I was lucky enough to fall in love with
                        Seattle girl (in Colorado, but that's another story), so after riding out the peak of the
                        pandemic in New York we moved home to Seattle with our now 10 month old son.
                    </p>
                    <p>
                        For the last few years I've been considering eventually pivoting to working in software
                        development in order to allow me to settle down a bit more. Being successful in the singing
                        business generally means being on the road a lot. Following the loss of all of my gigs due the
                        pandemic, I've chosen to accelerate the timeline of that. So far it's been an incredibly fun
                        challenge to work a different part of my brain that has gotten only occasional use for the last
                        ten years or so. I'm hopeful that I can combine these new skills with the collaborative skills
                        I've honed as a musician to be a unique and effective web developer.
                    </p>
                    <p>
                        I suppose I didn't explain this yet, but my specific corner of expertise is small ensemble
                        choral music. In the 6 years since I graduated from graduate school I have worked my way to the
                        top of this field. In order to be a successful ensemble singer I have to of course have strong
                        musical and technical singing skills (strong to the level of being able to sight read whatever
                        is put in front of me), but more importantly I have to be able to work within a highly cohesive
                        team that I may have never worked with before. In the moment I have to match the color, volume,
                        and musical style of my colleagues, while silmultaneously contributing my own interpretation of
                        the music. I have to interpret from the written music and from the current situation in the room
                        whether I'm following or leading, or a little of both. All in real time. With people I just met
                        10 minutes ago.
                    </p>
                    <p>
                        I hope to be able to incorporate those skills as I learn the workflow of a web development team.
                    </p>
                </div>
            </div>
    )
}
