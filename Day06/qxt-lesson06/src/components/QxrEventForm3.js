import React, { Component } from 'react';

export default class QxtEventForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vtdGioiTinh: "Nam", // Giá trị mặc định
        };
    }

    // Hàm xử lý thay đổi giới tính
    qxtHandleChange = (event) => {
        this.setState({
            vtdGioiTinh: event.target.value, // Cập nhật state khi chọn giới tính
        });
    };

    // Hàm xử lý sự kiện submit form
    qxtHandleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn reload trang
        alert(`Giới tính của bạn là: ${this.state.vtdGioiTinh}`);
    };

    render() {
        return (
            <div className="alert alert-success">
                <h2>Form Input - Radio</h2>
                <form onSubmit={this.qxtHandleSubmit}>
                    <div>
                        <label>Giới tính:</label>

                        {/* Radio button Nam */}
                        <input
                            type="radio"
                            name="qxtGioiTinh"
                            id="qxtNam"
                            className="mx-2"
                            value="Nam"
                            checked={this.state.vtdGioiTinh === 'Nam'}
                            onChange={this.qxtHandleChange}
                        />
                        <label htmlFor="qxtNam">Nam</label>

                        {/* Radio button Nữ */}
                        <input
                            type="radio"
                            name="qxtGioiTinh"
                            id="qxtNu"
                            className="mx-2"
                            value="Nữ"
                            checked={this.state.vtdGioiTinh === 'Nữ'}
                            onChange={this.qxtHandleChange}
                        />
                        <label htmlFor="qxtNu">Nữ</label>

                        {/* Radio button Khác */}
                        <input
                            type="radio"
                            name="qxtGioiTinh"
                            id="qxtKhac"
                            className="mx-2"
                            value="Khác"
                            checked={this.state.vtdGioiTinh === 'Khác'}
                            onChange={this.qxtHandleChange}
                        />
                        <label htmlFor="qxtKhac">Khác</label>
                    </div>

                    <button type="submit" className="btn btn-success mt-3">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
