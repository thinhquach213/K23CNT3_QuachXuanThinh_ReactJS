import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function QxtReadApiLocal() {
    // khởi tạo
    const [qxtListUser, setQxtListUser] = useState([])
    // đọc dữ liệu từ API local và set cho qxtListUser
    const apiUrl = "http://localhost:3001/users"
    
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((qxtResponse)=>{
                setQxtListUser(qxtResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {qxtListUser.map((qxtItem, index) => (
                        <tr key={index}>
                            <td>{qxtItem.fullName}</td>
                            <td>{qxtItem.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}