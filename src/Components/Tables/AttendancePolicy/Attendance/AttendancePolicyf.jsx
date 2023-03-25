import React, { useState } from 'react'
import "./AttendancePolicy.css"
import { AiFillEdit,AiTwotoneDelete } from "react-icons/ai";

function AttendancePolicyf() {
    let [data,setdata]=useState([])
   let [items,setItem]= useState({})
    let[edit,setEdit]=useState(false)
    let [update,setupdate]=useState({})
    let [id,setid]=useState(null)

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

    const ButtonId=(index)=>{
            setid(index)
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
            <td data-title="">Enter Data</td>
            <td data-title=""><input type="text" onChange={(e)=>setItem({...items,employeetype:e.target.value})} /></td>
            <td data-title=""><input type="time" onChange={(e)=>setItem({...items,MinLogin:e.target.value})} /></td>
            <td data-title=""><input type="time" onChange={(e)=>setItem({...items,MaxLogin:e.target.value})} /></td>
            <td data-title=""><input type="time" onChange={(e)=>setItem({...items,MinLogout:e.target.value})}/></td>

            <td data-title=""><input type="time"onChange={(e)=>setItem({...items,MinLate:e.target.value})} /></td>


            <td data-title=""><input type="time" onChange={(e)=>setItem({...items,MaxLate:e.target.value})} /></td>
            <td data-title=""><input type="time"onChange={(e)=>setItem({...items,MinHalfday:e.target.value})} /></td>
            <td data-title=""><input type="time" onChange={(e)=>setItem({...items,Maxhalfday:e.target.value})} /></td>
           
            <td data-title=""><AiFillEdit/></td>
            <td><AiTwotoneDelete/> </td>
           
          </tr>

        {data.map((value,index)=>{
            return <tr key={index}>
                <td data-title="">{index}</td>
              <td data-title="">
                    {edit && id===index?( <input type="text"  onChange={(e)=>setupdate({...update,employeetype:e.target.value})} />):(<>{value.employeetype}</>)}

              </td>
               <td data-title="">{edit && id===index?( <input type="time"  onChange={(e)=>setupdate({...update,MinLogin:e.target.value})} />):(<>{value.MinLogin}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,MaxLogin:e.target.value})} />):(<>{value.MaxLogin}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,MinLogout:e.target.value})} />):(<>{value.MinLogout}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,MinLate:e.target.value})} />):(<>{value.MinLate}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,MaxLate:e.target.value})}  /> ):(<>{value.MaxLate}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,MinHalfday:e.target.value})} />):(<>{value.MinHalfday}</>)}</td>
              <td data-title="">{edit && id===index?( <input type="time" onChange={(e)=>setupdate({...update,Maxhalfday:e.target.value})} />):(<>{value.Maxhalfday}</>)}</td>
              <td data-title="">
                <button class="btn btn-primary btn-sm" onClick={()=>ButtonId(index)}>
                     {edit && id===index?( <button type="submit" onClick={()=>updateItem(index)} class="btn btn-primary btn-sm fs-6">Update</button>)
                     :(<AiFillEdit />)}</button>
                
                
                </td>
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

export default AttendancePolicyf