import React, { useState } from 'react'

import { AiFillEdit,AiTwotoneDelete } from "react-icons/ai";

function BAShops() {
    let [data,setdata]=useState([])
   let [items,setItem]= useState({})
    let[edit,setEdit]=useState(false)
    let [update,setupdate]=useState({})

  console.log(update)

    const submit=(e)=>{
        
        setdata([...data,items])

    }

    const removeItem=(index)=>{
        let arr = [...data]
        arr.splice(index,1)
        setdata(arr)

    }

    const updateItem=(index)=>{
           
            let arr = [...data]
        
            arr[index]=update
            setdata(arr)
            setEdit(!edit)

            
    }
   



  return (
    <section className="bg-light p-5">
    <h3 className="pb-2"></h3>
    <div className="table-responsive" id="no-more-tables">
        
      <table className="table bg-white">
        <thead className="bg-primary text-light">
          <tr>
          <th scope="col">#</th>
          <th scope="col">Employee Type</th>
          <th scope="col">Min Login</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          
         
          </tr>
        </thead>
        <tbody>

       <tr>
            <td data-title=""></td>
            <td data-title=""><input type="text" onChange={(e)=>setItem({...items,employeetype:e.target.value})} /></td>
            <td data-title=""><input type="text" onChange={(e)=>setItem({...items,MinLogin:e.target.value})} /></td>


            <td data-title=""><AiFillEdit/></td>
            <td><AiTwotoneDelete/> </td>
           
          </tr>

        {data.map((value,index)=>{
            return <tr key={index}>
                <td data-title="">{index}</td>
              <td data-title="">
                    {edit?( <input type="text"  onChange={(e)=>setupdate({...update,employeetype:e.target.value})} />):(<>{value.employeetype}</>)}

              </td>
               <td data-title="">{edit?( <input type="time" value={update.employeetype} onChange={(e)=>setupdate({...update,MinLogin:e.target.value})} />):(<>{value.MinLogin}</>)}</td>
  

              <td data-title=""><button class="btn btn-primary btn-sm" onClick={()=>updateItem(index)}> {edit?( <button type="submit" onClick={()=>updateItem(index)} class="btn btn-primary btn-sm fs-6">Update</button>):(<AiFillEdit/>)}</button></td>
              <td data-title=""><button onClick={()=>removeItem(index)}><AiTwotoneDelete/></button> </td>
             
            </tr>
        })}

          
        </tbody>
      </table>

      <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
     


      
      

      <br />
      
    </div>
  </section>
  )
}

export default BAShops