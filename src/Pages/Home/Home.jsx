import React from 'react'
import Bar1 from '../../Components/charts/Bar/Bar'
import "./home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Circel from '../../Components/charts/circle/Circel'
import CompanyForm from '../../Components/Forms/CompanyForm/CompanyForm'
import Table from '../../Components/Tables/Table'


function Home() {
    return (

        <div style={{backgroundColor:"#ECF0F5"}}>
          <Navbar />
        <div className='parent'>
        
         
            <h3 className='m-5'>Dashboard</h3>
            <div className='row m-5 justify-content-center'>
            
                <div className='col-md-3 col-sm-2 ms-4 recordbox'>
                    <h6 className='mt-2'>Current Month Total Order </h6> 
                    <h1 className='text-center mt-3'>8</h1>
                </div>

                <div className='col-md-3 col-sm-2 ms-4 recordbox  bg-primary'>
                    <h6 className='mt-2'>Current Month order Amount </h6> 
                    <h1 className='text-center mt-3'>PKR 171,970</h1>
                </div>

                <div className='col-md-3 col-sm-2 ms-4   recordbox  bg-info'>
                    <h6 className='mt-2'>Current Month total order </h6> 
                    <h1 className='text-center mt-3'>5</h1>
                </div>

               
                
            </div>
            


            <div className='row m-5 justify-content-center'>
            

            <div className='col-md-3 col-sm-2 ms-4 recordbox  bg-primary '>
                    <h6 className='mt-2'>Current Month total order delivered Amount </h6> 
                    <h1 className='text-center mt-3'>5</h1>
                </div>
            <div className='col-md-3 recordbox ms-4 bg-danger'>
                <h6 className='mt-2'>Today's total order </h6> 
                <h1 className='text-center mt-3'>0</h1>
            </div>

            <div className='col-md-3 recordbox ms-4 bg-warning'>
                <h6 className='mt-2'>Today Order Amount </h6> 
                <h1 className='text-center mt-3'>PKR 0</h1>
            </div>

            
        </div>


      <div className='row mt-5 justify-content-center'>
      <div className='col-md-5 col-sm-12 chart-container' style={{backgroundColor:"#F0F8FF"}}>
        <h4 >Sales data</h4>
        <hr />
      <Bar1/>
      </div>


      <div className='col-md-3 col-sm-12 chart-container justify-content-center' >
      <h4 >Tops data</h4>
        <hr />
        <Circel/>
      </div>
      </div>



        <div className='row mt-5 justify-content-center'>
            <div className='col-md-3 chart-container mt-5  '>
                <h4>Top category</h4>
                <hr />
            <Circel/>
            </div>

            <div className='col-md-3 chart-container mt-5 '>
            <h4>Top category</h4>
            <hr />
            <Circel/>
            </div>


            <div className='col-md-3 chart-container mt-5 '>
                <h4>Top custome category</h4>
                <hr />
            <Circel/>
            </div>
        </div>


        <div className='row mt-4 justify-content-center'>
            <div className='col-md-5 chart-container'>
                <h4>Top 10 Customer</h4>
             <Table/>

            </div>
            <div className='col-md-5 chart-container'>
                <h4>Top 10 distributor</h4>
            <Table/>

            </div>

        </div>

        </div>
        
        </div>
    )
}

export default Home
