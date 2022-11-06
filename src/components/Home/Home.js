import React from 'react';
import justLogo from '../pictures/just-logo.png';
import './Home.css'


const Home = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="home-title">
                            <img src={justLogo} alt="" />
                            <h2 className=''>Welcome To Digipplus</h2>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div className="col">
                        <div className="annous">
                            <h4>Annoucements</h4>
                        </div>
                    </div>
                </div>
                <div  className="row">
                    <div className="col">
                        <div className="annous-text py-3">
                            <h4 >Annoucements</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* Action area */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="action-area">
                            <h6>Work Action</h6>
                            <button className="btn">View Intern Data</button>
                            <h6>Internship</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* solution area */}
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="solution py-5">
                            <h5>Solution Writin</h5>
                            <h6>write slution</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;