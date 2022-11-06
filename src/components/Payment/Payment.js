import React from 'react';
import './Payment.css'

const Payment = () => {
    return (
        <div>
             <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 py-3">
                        <div className="jobs">
                            <h5>PAYMENT NVIGATION</h5>
                            <button>INVOICES</button>
                            <p>MY BANK DETAILS</p>
                        </div>
                    </div>
                    <div className="col-md-6 py-3">
                        <div className="payment">
                           <p>Payment Date: Oct, 25, 2022, 11:07 a.m Amouint Paid: &#x20B9;3150</p>
                           <p>Payment Made For Project</p>
                           <p>KM10 Math Text Book Solution</p>
                           <p>KM12 Math Text Book Solution</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-3">
                       <div className="payment-text">
                        <p>Lifetime Earning</p>
                        <h6> &#x20B9;3150</h6>
                        <p>This Month Earning
                        </p>
                        <h6>&#x20B9; 0</h6>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;