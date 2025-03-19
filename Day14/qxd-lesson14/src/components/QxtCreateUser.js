import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QxtListUser = () => {
    const [qxtListUser, setQxtListUser] = useState([]); // State để lưu danh sách người dùng

    // URL API lấy dữ liệu người dùng
    const qxtAPIOnline = "https://67da684535c87309f52c47da.mockapi.io/qxt_users/qxt_user";

    // Lấy dữ liệu từ API bằng axios
    useEffect(() => {
        axios
            .get(qxtAPIOnline) // Lấy dữ liệu người dùng từ API
            .then((qxt_response) => {
                setQxtListUser(qxt_response.data); // Lưu dữ liệu vào state
            })
            .catch((error) => {
                console.log("Lỗi", error); // Xử lý lỗi khi có sự cố
            });
    }, []); // useEffect chỉ chạy một lần khi component được render lần đầu tiên

    // Hàm xử lý xóa người dùng
    const handleDelete = (id) => {
        axios
            .delete(`${qxtAPIOnline}/${id}`)
            .then(() => {
                setQxtListUser(qxtListUser.filter(user => user.id !== id));
            })
            .catch((error) => {
                console.error("Có lỗi khi xóa người dùng!", error);
            });
    };

    const qxtElementUser = qxtListUser.map((qxtItem) => (
        <tr key={qxtItem.id}>
            <td>{qxtItem.id}</td>
            <td>{qxtItem.qxt_name}</td>
            <td>{qxtItem.qxt_email}</td>
            <td>{qxtItem.qxt_phone}</td>
            <td>
                <span className={`badge ${qxtItem.qxt_active ? 'bg-success' : 'bg-danger'}`}>
                    {qxtItem.qxt_active ? 'Hoạt động' : 'Khóa'}
                </span>
            </td>
            <td>
                <Link to={`/edit-user/${qxtItem.id}`}>
                    <button className="btn btn-warning btn-sm me-2">Edit</button>
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(qxtItem.id)}>Delete</button>
            </td>
        </tr>
    ));

    return (
        <div className="container mt-4">
            <div className="alert alert-info">
                <h2>Danh sách người dùng</h2>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-striped bg-white">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {qxtElementUser}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QxtListUser;
