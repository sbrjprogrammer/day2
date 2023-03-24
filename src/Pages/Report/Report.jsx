import React from 'react'
import "./report.css"

function Report() {
    return (
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex ">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">


                    <div className="card">
                        <h2>Company Registration</h2>
                        <form className="form-card" onsubmit="event.preventDefault()">


                            <div className="row mt-4">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3  fw-bold">CompanyId</label> <input type="text" id="fname" name="fname" placeholder="Enter your Id"  /> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3 fw-bold">Comapny name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your Company name"  /> </div>
                            </div>


                            <div className="row justify-content-between text-left mt-4">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3 fw-bold"> Email Name</label> <input type="text" id="email" name="email" placeholder="Enter your Email Name"  /> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3 fw-bold">Email Address</label> <input type="text" id="mob" name="mob" placeholder="Enter Your Email Address"  /> </div>
                            </div>


                            <div className="row justify-content-between text-left mt-4">
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3 fw-bold">OutGoing email Address</label> <input type="text" id="job" name="job" placeholder="Enter your Outgoing Email" /> </div>
                                <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3 fw-bold">Port</label> <input type="text" id="job" name="job" placeholder="Enter Your Port" /> </div>
                            </div>


                           


                            <div className="row justify-content-center mt-4">
                                <div className='col-sm-4'></div>
                                <div className="form-group col-sm-2 "> <button type="submit" className="btn-block btn-primary bg-primary text-light">Save</button> </div>
                                <div className="form-group col-sm-2"> <button type="submit" className="btn-block btn-primary bg-primary text-light">Cancel</button> </div>
                                <div className='col-sm-4'></div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
