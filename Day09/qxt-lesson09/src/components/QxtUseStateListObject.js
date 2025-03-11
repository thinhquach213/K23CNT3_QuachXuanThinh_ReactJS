import React, { useEffect, useState } from 'react'

export default function QxtUseStateListObject() {
    // Mock data
    const listStudent = [
        { qxtId: 1, qxtName: "Quách Xuân Thịnh", qxtAge: 20 },
        { qxtId: 2, qxtName: "Nguyễn Gia Duy", qxtAge: 22 },
        { qxtId: 3, qxtName: "Dặng Phương Nam", qxtAge: 25 },
        { qxtId: 4, qxtName: "Vũ Tiến Bắc", qxtAge: 30 }
    ];

    // State hook for students
    const [QxtStudents, setQxtStudents] = useState(listStudent);
    
    // State hook for the student to edit
    const [editStudent, setEditStudent] = useState(null);

    // UseEffect to monitor the editStudent and update the list when editing
    useEffect(() => {
        if (editStudent) {
            setQxtStudents(prevStudents =>
                prevStudents.map(student => 
                    student.qxtId === editStudent.qxtId 
                    ? { ...student, qxtName: editStudent.qxtName, qxtAge: editStudent.qxtAge }
                    : student
                )
            );
        }
    }, [editStudent]);

    // Function to handle the "Sửa" (Edit) button click
    const handleEdit = (student) => {
        const newName = prompt('Edit student name:', student.qxtName);
        const newAge = prompt('Edit student age:', student.qxtAge);

        if (newName && newAge) {
            setEditStudent({ ...student, qxtName: newName, qxtAge: newAge });
        }
    };

    // Render list of students with actions
    let qxtrenderElement = QxtStudents.map((qxtItem, index) => {
        return (
            <tr key={index}>
                <td>{qxtItem.qxtId}</td>
                <td>{qxtItem.qxtName}</td>
                <td>{qxtItem.qxtAge}</td>
                <td>
                    <button
                        className='btn btn-success mx-2'
                        onClick={() => handleEdit(qxtItem)}
                    >
                        Sửa
                    </button>
                    <button className='btn btn-danger mx-2'>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>QxtID</th>
                        <th>QxtName</th>
                        <th>QxtAge</th>
                        <th>QxtAction</th>
                    </tr>
                </thead>
                <tbody>
                    {qxtrenderElement}
                </tbody>
            </table>
        </div>
    );
}
