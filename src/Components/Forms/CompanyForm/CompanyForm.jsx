import React from 'react'
import "./companyfrom.css"

function CompanyForm() {


  return (
    <div className='container mt-5 bg-light'>
      <h5>Customer Class</h5>
      <hr />

      <div className='row'>
        <div className='col-md-3'></div>

        <div className='col-md-6 bg-white'>

          <div className='line'></div>

          <button type="button" class="btn btn-success mt-5">lookup</button>
          <h6 className='text-primary mt-5'>CompanyId</h6>
          <div className="input-group mb-3">

            <input type="text" className="form-control" placeholder="CompanyId " aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <h6 className='mt-4 text-primary'>Company name</h6>
          <div className="input-group mb-3">

            <input type="text" className="form-control" placeholder="Company Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>



          
          <h6 className='mt-4 text-primary'>Email Name</h6>
          <div className="input-group mb-3">

            <input type="email" className="form-control" placeholder="Email Name" aria-label="Username" aria-describedby="basic-addon1" />
          </div>




          
          <h6 className='mt-4 text-primary'>Email Address</h6>
          <div className="input-group mb-3">

            <input type="email" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
          </div>


          <h6 className='mt-4 text-primary'>Out Going email Address</h6>
          <div className="input-group mb-3">

            <input type="email" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
          </div>



          <h6 className='mt-4 text-primary'>Port</h6>
          <div className="input-group mb-3">

            <input type="Number" className="form-control" placeholder="Port" aria-label="Username" aria-describedby="basic-addon1" />
          </div>


          <h6 className='mt-4 text-primary'>Time Zone</h6>
          <div className="input-group mb-3">

          <select class="form-select" aria-label="Select option">
          <option value="Pacific/Midway">(GMT-11:00) Midway Island</option>
          <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
          <option value="America/Anchorage">(GMT-09:00) Alaska</option>
          <option value="America/Los_Angeles">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
          <option value="America/Denver">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
          <option value="America/Chicago">(GMT-06:00) Central Time (US &amp; Canada)</option>
          <option value="America/New_York">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
          {/* add more time zones as needed */}
        </select>
          </div>


          <div className='mt-5 pb-5'>
            <button type="button" class="btn btn-primary mx-2">SAVE</button>
            <button type="button" class="btn btn-danger">CANCEL</button>
          </div>

        </div>

        <div className='col-md-3'></div>



      </div>



    </div>
  )
}

export default CompanyForm