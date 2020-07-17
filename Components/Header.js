import React from 'react';
import mypic3 from '../images/mypic3.jpg';

const Header = () => {
      return (
        <div className="container ">
        <div className="row d-flex-inline">
        <div className="col-md-4 float-left">
        <img height="210px" width="200px" src={mypic3} alt ="An image" />
        </div>
        <div className="col- col-md-8 float-right">
        <h1>Prashant Bhardwaj</h1>
        <h4 className="ml-2">Front-End Developer</h4>
        <p className="ml-3">I am a Front-End Developer intersted in latest frontend  web technologies. 
        <br></br>
        I have experience of working on various JavaScript frameworks and libraries such as  React Js, Redux,  etc. 
        <br></br>
        I am a confident, hard-working and a very professional individual. 
        <br></br>
        I am looking forward to work with individuals/organnisations working with UI and web technologies to help solve exciting real world problems.
        <br></br>
        
        </p>
        </div>
        
        
        </div>
        </div>
      )
    }


export default Header;