import React from 'react';
import Html5 from '../images/Html5.png';
import CSS3 from '../images/CSS3.png';
import Bootstrap from '../images/Bootstrap.jpg';
import Jquery from '../images/Jquery.png';
import Js from '../images/Js.png';
import react from '../images/react.png';
import Redux from '../images/Redux.png';
import nodejs from '../images/nodejs.png';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const Keyskills = () => {
    return(
        <div className="container">
        <h1>Key Skills</h1>
        <div className="row m-3 ">
        <div className="col- col-sm col-md">
        <img src={Html5} height="80px" width= "70px" />
        <Progress  percent={88} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={CSS3} height="80px" width= "70px" />
        <Progress percent={85} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={Bootstrap} height="80px" width= "70px" />
        <Progress percent={80} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={Js} height="80px" width= "70px" />
        <Progress percent={75} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={Jquery} height="80px" width= "70px" />
        <Progress percent={70} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={react} height="80px" width= "70px" />
        <Progress percent={85} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={Redux} height="80px" width= "70px" />
        <Progress percent={75} status="success" />
        </div>
        
        <div className="col-sm">
        <img src={nodejs} height="80px" width= "70px" />
        <Progress percent={65} status="success" />
        </div>
        </div>
        </div>
        
        
    )
}

export default Keyskills;