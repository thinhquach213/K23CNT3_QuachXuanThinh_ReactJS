import axios from 'axios';
import React, { useState } from 'react';
 
export default function QxtCreateMockAPI() {

    // Khởi tạo state
    const [qxtFullName, setQxtFullName] = useState('');
    const [qxtAge, setQxtAge] = useState(0);
    const [qxtActive, setQxtActive] = useState(true);

    // api post
    const qxtCreateUser = "https://67d8d4b300348dd3e2a85cf3.mockapi.io/k23cnt3_quachxuanthinh/qxt_user";

    // khi submit form
    const qxtHandleSubmit = (event) => {
        event.preventDefault(); 
        let qxtNewUser = { qxtFullName, qxtAge, qxtActive };
        console.log(qxtNewUser);
        
        // ghi dữ liệu vào api
        axios
            .post(qxtCreateUser, qxtNewUser)
            .then((qxt_response) => {
                console.log(qxt_response.data);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error("There was an error creating the user!", error);
            });
    }

    return (
        <div className="alert alert-info">
            <h2>Thêm Mới Users</h2>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="qxtFullName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="qxtFullName"
                        id="qxtFullName"
                        placeholder="Enter full name"
                        onChange={(ev) => setQxtFullName(ev.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="qxtAge" className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="qxtAge"
                        id="qxtAge"
                        placeholder="Enter age"
                        onChange={(ev) => setQxtAge(ev.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="qxtActive"
                            id="qxtActive_hd"
                            value={true}
                            checked={qxtActive === true}
                            onChange={() => setQxtActive(true)}
                        />
                        <label className="form-check-label" htmlFor="qxtActive_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="qxtActive"
                            id="qxtActive_kh"
                            value={false}
                            checked={qxtActive === false}
                            onChange={() => setQxtActive(false)}
                        />
                        <label className="form-check-label" htmlFor="qxtActive_kh">Khóa</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={qxtHandleSubmit}>Create</button>
            </form>
        </div>
    )
}
