import React, { Component } from 'react'
import './login.css'

export default class Header extends Component {
    render() {
        return (
            <div>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top"style={{backgroundColor:	"white",fontFamily:"serif",padding: "2px 3%",opacity: "1"}}>
                
                <a className="navbar-brand " href=""><img src="https://gowthamikethavarapu.github.io/eventManagement/logo.png" style={{width:"250px" , height:"80px" }} /></a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            
               <ul className="navbar-nav ml-auto" style={{fontSize: "20px"}} >
                <li className="nav-item ">
                    <a className="nav-link" href="./index.html"><strong>Home</strong></a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./price.html"><strong>packages</strong></a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./blog.html"><strong>blog</strong></a>  
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="./about.html"><strong>about us</strong></a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./contactus.html"><strong>contact us</strong></a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./signup.html"><strong>signup</strong></a>  
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="./login.html"><strong>login</strong></a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./addtocart.html"><strong>cart</strong></a>  
                </li>
                </ul>
              </div>
            </nav>
        </header>
        

        <div className = "login form" >
        <form>
          <img src="https://gowthamikethavarapu.github.io/eventManagement/images.png" />
          <h1>Login</h1>
          <input type = "email" class = "input-box" placeholder="Username" />
          <input type = "password" class = "input-box" placeholder="Password" />
          <p>Forgot password ?</p>
          <button type ="button" class = "login-btn">Login</button>
          <p>Not a member ?<a href="#">Sign-in</a></p>
      </form>
  </div>
              </div>
        );
    }
}
