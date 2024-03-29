import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import Carousel from 'react-bootstrap/Carousel'
import Updates from '../layout/Updates'
class Home extends Component{
    render(){

        return (
            <div className="container1" >
                <Updates/>
                    <div className="row" >
                        <div className="col-xs-12 col-lg-4 col-sm-6 thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/accommodation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-building" ></i>
                                    <h5>Accommodation</h5>
                                </div>     
                            </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            
                            
                            <div className="middle zoom">
                            <Link to="/darshan">
                                <div className="center-vh c1" >
                                    <i className="fa fa-users" ></i>
                                    
                                    <h5>Darshan</h5>
                                </div>  
                            </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/food">
                                <div className="center-vh c1" >
                                    <i className="fa fa-cutlery " ></i>
                                    <h5>Food</h5>
                                </div>  
                                </Link>   
                            </div> 
                            
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/transportation">
                                <div className="center-vh c1" >
                                    <i className="fa fa-train" ></i>
                                    <h5>Transportation</h5>
                                </div>     
                                </Link>
                            </div> 
                            
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to="/emergency">
                                <div className="center-vh c1" >
                                    <i className="fa fa-ambulance" ></i>
                                    <h5>Emergency</h5>
                                </div>  
                                </Link>   
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/coordinator'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-street-view" ></i>
                                        <h5>Coordinators</h5>
                                    </div>
                                        
                                </Link>     
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/volunteer'>
                                    <div className="center-vh c1" >
                                        <i className="fa fa-male" ></i>
                                        <h5>Volunteers</h5>
                                    </div>  
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to='/maps'>
                                <div className="center-vh c1" >
                                    <i className="fa fa-map" ></i>
                                    <h5>Map</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/info">
                                <div className="center-vh c1" >
                                    <i className="fa fa-info-circle" ></i>
                                    <h5>Info/Schedule</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/VCC">
                                <div className="center-vh c1" >
                                    <i className="fa fa-handshake-o " ></i>
                                    <h5>VCC</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                        
                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                            <Link to="/ashram">
                                <div className="center-vh c1" >
                                    <i className="fa fa-user " ></i>
                                    <h5>Ashram</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>

                        <div className="col-xs-12 col-lg-4 col-sm-6  thumb outer-div">
                            <div className="middle zoom">
                                <Link to="/faq">
                                <div className="center-vh c1" >
                                    <i className="fa fa-question-circle" ></i>
                                    <h5>FAQ</h5>
                                </div>     
                                </Link>
                            </div> 
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home