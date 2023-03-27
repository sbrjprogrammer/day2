import React from 'react'
import "./Instagram.css"

function InstagramForm() {


  return (
    <div className='container mt-5 bg-light'>
        <h5>Customer Class</h5>
        <hr />
      
        <div className='row'>
            <div className='col-md-3'></div>

            <div className='col-md-6 bg-white'>
                
                <div className='line'></div>

                <button type="button" class="btn btn-success mt-5">lookup</button>
            <h5 className='text-primary mt-5'>CustomerClassID</h5>
            <div className="input-group mb-3">
           
        <input type="text" className="form-control" placeholder="Class ID" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <h5 className='mt-4'>CustomerClass</h5>
            <div className="input-group mb-3">
           
        <input type="text" className="form-control" placeholder="Customer Class" aria-label="Username" aria-describedby="basic-addon1" />
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

export default InstagramForm