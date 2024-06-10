import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios, { Axios } from 'axios'

const ViewAll = () => {
    const [data, changedata] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                changedata(response.data)
            })
            .catch()
            .finally()
    }
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{value.userId}</td>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.completed}</td>
                                        </tr>
                                    }
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll