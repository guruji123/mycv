import React, {Component} from 'react';
import Homepage from '../images/Homepage.JPG';
import Features from '../images/Features.JPG';
import Onlinepooja from '../images/Onlinepooja.JPG';
import Pricing from '../images/Pricing.JPG';
import Proj3 from '../images/Proj3.jpg';
import Proj4 from '../images/Proj4.jpg';
import { BrowserRouter, Switch,  Route, Link } from 'react-router-dom';
import './Project.css';

class Project extends Component {
    render () {
    return(
        <div className="container">
            <h1>Projects</h1>
                <div className="card-deck ">
                    <h4 className="d-flex m-4 p-4">Project 1</h4>
                    <div className="col-sm  p-4 m-4  ">
                    <img className="img-fluid " height="300px" src={Homepage} />
                    <figcaption className="figure-caption">Homepage</figcaption>
                    </div>

                    <div className="col-sm p-4 m-4  ">
                    <img className="img-fluid " src={Features}  />
                    <figcaption className="figure-caption">Features</figcaption>
                    </div>

                    <div className="col-sm p-4 m-4 ">
                    <img className="img-fluid " src={Onlinepooja} />
                    <figcaption className="figure-caption">Onlinepooja</figcaption>
                    </div>

                    <div className="col-sm p-4 m-4 ">
                    <img className="img-fluid " src={Pricing} />
                    <figcaption className="figure-caption">Pricing</figcaption>
                    </div>
                </div>
                
                <div className="d-flex-inline">
                <div >
                        <h4 className="m-4 p-4">Project 2</h4>
                        <p className="col- m-4 p-4"><a href="https://codepen.io/Prashant1996/details/yLLwqmL"><i><abbr title="https://codepen.io/Prashant1996/details/yLLwqmL"> Product Landing Link</abbr></i></a></p>
                </div>
                <div>
                    <h4 className="m-4 p-4">Project 3</h4>
                    <div className="col- p-4 m-4 ">
                    <img className="img-"height="120px"  src={Proj3} />
                    <figcaption><a target="-blank" href="https://friends-party.netlify.app">https://friends-party.netlify.app</a></figcaption>
                    </div>
                </div>
                <div>
                    <h4 className="m-4 p-4">Project 4</h4>
                    <div className="col-sm p-4 m-4">
                    <h6><em>My Todo App</em></h6>
                    <img className="img- " height="100px"   src={Proj4} alt="TodoApp" />
                    <figcaption><a target="-blank" href="https://to-do-li-st.netlify.app">https://to-do-li-st.netlify.app</a></figcaption>
                    
                </div>
                <div>
                <h4 className="m-4 p-4">Project 5</h4>
                    <div className="col-sm p-4 m-4">
                    <h6><em>Shopping-Cart</em></h6>
                    <figcaption><a target="-blank" href=" https://github.com/guruji123/shopping-cart"> https://github.com/guruji123/shopping-cart</a></figcaption>
                </div>
                </div>
                    </div>
                    </div>
                    </div>
        );
    }
}


export default Project  