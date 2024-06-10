import React,{useState}  from 'react'
import Nav from './Nav'
import axios from 'axios'
const AddPeople=()=> {
    const [data,setData]=useState(
        {
            "userid":" ",
            "id":" ",
            "title":" ",
            "completed":" "
           
        }
    )
    const inputHandler =(event)=>{
        setData({ ...data, [event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("https://jsonplaceholder.typicode.com/todos",data).then(
            (response)=>{

                console.log(response.data)
            }

        )
    }

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">UserId</label>
                                <input type="text" className="form-control"  userid='userid' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control"  id='id' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control"  title='title' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">completed</label>
                                <input type="text" className="form-control"  completed='completed' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPeople