import React, { useState } from 'react'

export default function QxtUseState() {
    // Khởi Tạo state 
    const [qxtCount, setQxtCount] = useState(0);

    // Khởi tạo state là 1 mảng
    const qxtArr = [1, 2, 3, 4, 5, 6];
    const [qxtArray, setQxtArray] = useState(qxtArr);

    // Khởi Tạo state với mảng object
    const qxtStudents = [
        { qxtId: "SV001", qxtName: "Vũ Đức", qxtAge: 20 },
        { qxtId: "SV002", qxtName: "Phạm Quân", qxtAge: 23 },
    ];
    const [qxtStudentList, setQxtStudentList] = useState(qxtStudents);

    // Hmaf xử lý sự kiện khi thêm mới phần tử vào mảng
   const qxtHandleAddList=()=>{
       setQxtArray([
         ...qxtArray,
        parseInt(Math.random()*100),
       ]) 
    }

    // hàm sử lý sk sinh viên
    const qxtHandleAddNewStudent=()=>{
        let qxtStudent = {
            qxtId:"SV003",
            qxtName:"Vũ Nguyễn",
            qxtAge:30,
        };
        // thêm vào state qxtStudentList
        setQxtStudentList([
            ...qxtStudentList,
            qxtStudent
        ])
    }
    return (
        <div className='alert alert-danger'>
            <h2>UseState Demo</h2>
            <hr />
            <div>
                <h3>Count: {qxtCount}</h3>
                <button onClick={()=>setQxtCount(qxtCount + 1)}>Tăng +</button>
                <button onClick={()=>setQxtCount(qxtCount - 1)}>Giảm -</button>
            </div>
                <hr/>
            <div>
                <h3>Array: {qxtArray.toString()}</h3>
                <button onClick={qxtHandleAddList}>Thêm Phần tử +</button>
            </div>
            <hr/>
            <div >
                <h3>Danh sách sinh viên: </h3>
                <table className='table table-bordered '> 
                    <thead className='bg-white'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            qxtStudentList.map((qxtStudent, index) => {
                                return <>
                                    <tr>
                                        <td>{qxtStudent.qxtId}</td>
                                        <td>{qxtStudent.qxtName}</td>
                                        <td>{qxtStudent.qxtAge}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                    <tfoot>
                        <button onClick={qxtHandleAddNewStudent}>Thêm mới sinh viên</button>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
