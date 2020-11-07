import React from 'react'

export default function Contact() {
    return (
  <div className="container">
    <div className="row justify-content-center justify-content-sm-start">
      <div className="col-sm-11 bg-light about-me">
        <h2>Contact</h2>
        <hr/>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="name" className="form-control" id="name" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Message"></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
          
        </div>
      </div>
    </div>
    )
}
