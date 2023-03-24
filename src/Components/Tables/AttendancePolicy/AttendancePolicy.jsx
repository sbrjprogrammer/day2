import React from 'react'
import "./attendancepolicy.css"

function AttendancePolicy() {
  return (
    <div className='Table-Container'>

    
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Employee Type</th>
          <th scope="col">Min Login</th>
          <th scope="col">Max Login</th>
          <th scope="col">Min Logout</th>
          <th scope="col">Min Late</th>
          <th scope="col">Max Late</th>
          <th scope="col">Min HalfDay</th>
          <th scope="col">Max HalfDay</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
            <td></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

  
  </div>
  )
}

export default AttendancePolicy