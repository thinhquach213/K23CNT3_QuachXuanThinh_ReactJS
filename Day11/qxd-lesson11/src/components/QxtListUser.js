import React from 'react'

export default function QxtListUser({ renderQxtUsers }) {

    const qxtElements = renderQxtUsers.map((qxtItem, index) => {
        return(
        <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{qxtItem.id}</td>
                <td>{qxtItem.qxtFullName}</td>
                <td>{qxtItem.qxtUserName}</td>
                <td>{qxtItem.qxtPass}</td>
            </tr>
        </>)
    })
    return (
        <div>
            <h2>Danh sách tài Khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {qxtElements}
                </tbody>
            </table>
        </div>
    )
}
