import React from 'react';
import './Jobs.css'

const Jobs = () => {
    return (
        <div>
              <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="jobs">
                            <h5>JOBS</h5>
                            <p>Solution Writing</p>
                            <h5>FOR JOBS APPLICATION</h5>
                            <button>SCREEING TASK</button>
                            <h5>APPLICATION STATUS</h5>
                            <p>JOB APPLICATION STATUS</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="solution jobs">
                            <h5 className='pt-3'>K10 Math Text Book Solution</h5>
                            <h6 className='pb-5'>Intern Digipplus</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                    
                    </div>
                    <div className="col-md-3 py-3">
                        <div className=" anous-right-text">
                            <h5>Annoucments</h5>
                            <p>we are working on adding project and Internship Details. so just fill up porfile only</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;