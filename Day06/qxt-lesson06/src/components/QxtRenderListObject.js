import React, { Component } from 'react';

class QxtRenderListObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qxtStudents: [
                { qxtId: 1, qxtName: "Quách Thịnh", qxtAge: 20 },
                { qxtId: 2, qxtName: "Nguyen Gia Duy", qxtAge: 30 },
                { qxtId: 3, qxtName: "Nguyen Duy Khanh", qxtAge: 40 },
                { qxtId: 4, qxtName: "Nguyen Duy Manh", qxtAge: 50 },
            ],
        };
    }

    render() {
        let { qxtStudents } = this.state;

        // Hiển thị danh sách dưới dạng danh sách `<ul>`
        let qxtElement = qxtStudents.map((qxtItem) => (
            <li key={qxtItem.qxtId}>
                {qxtItem.qxtId} - {qxtItem.qxtName} ({qxtItem.qxtAge} tuổi)
            </li>
        ));

        // Hiển thị danh sách dưới dạng bảng
        let qxtRenderElement = qxtStudents.map((qxtItem) => (
            <tr key={qxtItem.qxtId}>
                <td>{qxtItem.qxtId}</td>
                <td>{qxtItem.qxtName}</td>
                <td>{qxtItem.qxtAge}</td>
                <td>
                    <button className='btn btn-success mx-1'>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        ));

        return (
            <div className='container mt-3'>
                <h2>Danh sách sinh viên (Dạng danh sách)</h2>
                <ul>{qxtElement}</ul>

                <hr />

                <h2>Danh sách sinh viên (Dạng bảng)</h2>
                <table className='table table-bordered table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qxtRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QxtRenderListObject;
