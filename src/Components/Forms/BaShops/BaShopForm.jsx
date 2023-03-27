import React from 'react'
import "./BaShops.css"

function BaShopForm() {


    return (
        <div className='container bg-light'>
            <h3>BA Shops</h3>
            <hr />

            <div className='row'>
                <div className='col-md-4'></div>

                <div className='col-md-4 bg-white'>

                    <div className='line'></div>

                    <button type="button" class="btn btn-success mt-2">lookup</button>
                    <h6 className='text-primary mt-3'>Please select City</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>select City</option>
                            <option value="1">Karachi</option>
                            <option value="2">Islamabad</option>
                            <option value="3">Hyderabad</option>
                            <option value="3">Peshawar</option>
                        </select>
                    </div>

                    <h6 className='mt-4 text-primary'>Please select Area</h6>
                    <div className="input-group mb-3">

                    <select class="form-select" aria-label="Select option">
                            <option selected>Select Area</option>
                            <option value="1">Karachi</option>
                            <option value="2">Islamabad</option>
                            <option value="3">Hyderabad</option>
                            <option value="3">Peshawar</option>
                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>Please select Outlet</h6>
                    <div className="input-group mb-3">

                    <select class="form-select" aria-label="Select option">
                            <option selected>Select Outlet</option>
                            <option value="1">Karachi</option>
                            <option value="2">Islamabad</option>
                            <option value="3">Hyderabad</option>
                            <option value="3">Peshawar</option>
                        </select>
                    </div>





                    <h6 className='mt-4 text-primary'>Please select Employee</h6>
                    <div className="input-group mb-3">

                    <select class="form-select" aria-label="Select option">
                            <option selected>Select Employee</option>
                            <option value="1">local</option>
                            <option value="2">VIP</option>
                           
                        </select>
                    </div>

                    <div className='mt-5 pb-5'>
                        <button type="button" class="btn btn-primary mx-2">SAVE</button>
                        <button type="button" class="btn btn-danger">CANCEL</button>
                    </div>

                </div>

                <div className='col-md-4'></div>



            </div>



        </div>
    )
}

export default BaShopForm