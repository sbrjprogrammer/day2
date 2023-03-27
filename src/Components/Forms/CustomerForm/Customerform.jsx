import React from 'react'
import "./CustomerForm.css"

function CustomerForm() {


    return (
        <div className='container-fluid mt-5 bg-light'>
            <h5>Customer Class</h5>
            <hr />

            <div className='row'>

                <div className='line'></div>


                <div className='row'>
                    <div className='col-md-6'>

                        <button type="button" class="btn btn-success btn-sm mt-5 mx-1 fs-5">lookup</button>
                        <button type="button" class="btn btn-danger btn-sm mt-5 mx-1 fs-5">Danger</button>
                        <button type="button" class="btn btn-warning btn-sm mt-5 fs-5">Import Data</button>
                    </div>
                </div>


                <div className='col-md-6 bg-white'>



                    <h6 className='text-primary mt-5'>Customer Code</h6>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Customer Code " aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <h6 className='mt-4 text-primary'>Distributor</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Tariq Aziz</option>
                            <option value="2">Testing</option>
                            <option value="2">Abc</option>

                        </select>
                    </div>




                    <h6 className='mt-4 text-primary'>Customer Type</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Bakery Shops</option>
                            <option value="2">Chemical</option>
                            <option value="2">Enginerring</option>
                            <option value="2">Cosmetic</option>

                        </select>
                    </div>




                    <h6 className='mt-4 text-primary'>Customer Visit Type</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Week</option>


                        </select>
                    </div>

                    <h6 className='mt-4 text-primary'>Customer Sub Channel</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>


                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>AREA</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Afghan colony</option>
                            <option value="2">Bahudurabad</option>
                            <option value="2">Dhoraji</option>
                            <option value="2">Landhi</option>
                            <option value="2">Korangi</option>

                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>Phone</h6>
                    <div className="input-group mb-3">

                        <input type="Number" className="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <h6 className='mt-4 text-primary'>Url</h6>
                    <div className="input-group mb-3">

                        <input type="url" className="form-control" placeholder="URL" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <h6 className='mt-4 text-primary'>Billing Address</h6>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <h6 className='mt-4 text-primary'>Contact Person</h6>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Contact-Person" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <h6 className='mt-4 text-primary'>Payment Mode</h6 >
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name='method' type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Cash</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" name='method' type="checkbox" id="inlineCheckbox2" defaultValue="option1" />
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Credit</label>
                        </div>
                    </div>


                    <div className='mt-5 pb-5'>
                        <button type="button" class="btn btn-primary mx-2">SAVE</button>
                        <button type="button" class="btn btn-danger">CANCEL</button>
                    </div>

                </div>




                <div className='col-md-6 bg-white'>


                    <h6 className='text-primary mt-5'>Customer Name</h6>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Customer Name " aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <h6 className='mt-4 text-primary'>Customer Category</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Baby shop Bakery</option>
                            <option value="2">Cosmetic</option>
                            <option value="2">genral Store</option>
                            <option value="2">Kiryana</option>
                            <option value="2">Testing</option>

                        </select>
                    </div>



                    <h6 className='mt-4 text-primary'>Customer Class</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="2">C</option>
                            <option value="2">D</option>
                            <option value="2">D</option>

                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>Customer Channel</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Agra Taj</option>
                            <option value="2">Akhtar Colony</option>
                            <option value="2">Defence Clifton</option>
                            <option value="2">Defence phase 2</option>
                            <option value="2">Impress Market</option>

                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>Town</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Korangi Town</option>
                            <option value="2">Landhi</option>
                            <option value="2">Kemari</option>
                            <option value="2">Shahfaisal</option>
                            <option value="2">Malir</option>
                            <option value="2">Baldia</option>
                            <option value="2">New Town</option>

                        </select>
                    </div>


                    <h6 className='mt-4 text-primary'>Shift</h6>
                    <div className="input-group mb-3">

                        <select class="form-select" aria-label="Select option">
                            <option selected>Please select</option>
                            <option value="1">Day</option>
                            <option value="1">Night</option>


                        </select>
                    </div>




                    <h6 className='mt-4 text-primary'>Fax</h6>
                    <div className="input-group mb-3">

                        <input type="Number" className="form-control" placeholder="fax" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>





                    <h6 className='mt-4 text-primary'>Email Address</h6>
                    <div className="input-group mb-3">

                        <input type="email" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>


                    <h6 className='mt-4 text-primary'>Delivery Address</h6>
                    <div className="input-group mb-3">

                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>



                    <h6 className='mt-4 text-primary'>Discount%</h6>
                    <div className="input-group mb-3">

                        <input type="Number" className="form-control" placeholder="Discount" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Inactive
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Alternative week
                            </label>
                        </div>
                    </div>


                    <div className="mb-3 mt-3">
                        <label htmlFor="formFile" className="form-label">Choose File</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>




                </div>


            </div>



        </div>
    )
}

export default CustomerForm