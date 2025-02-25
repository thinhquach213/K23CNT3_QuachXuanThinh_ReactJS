import React, { Component } from 'react';

class QxtEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QxtCourse: 'CSS3', // Giá trị mặc định
        };
    }

    // Hàm xử lý sự kiện khi thay đổi khóa học
    qxtHandleChange = (event) => {
        this.setState({
            QxtCourse: event.target.value, // Sửa lỗi chính tả
        });
    };

    // Hàm xử lý sự kiện submit form
    qxtHandleSubmit = (event) => {
        event.preventDefault(); // Sửa lỗi chính tả
        alert("Khóa Học Bạn Chọn: " + this.state.QxtCourse);
    };

    render() {
        return (
            <div className="alert alert-danger">
                <h2>Form Select</h2>
                <form onSubmit={this.qxtHandleSubmit}>
                    <label htmlFor="QxtCourse">
                        <select
                            name="QxtCourse"
                            id="QxtCourse"
                            value={this.state.QxtCourse}
                            onChange={this.qxtHandleChange}
                        >
                            <option value="HTML5">HTML5</option>
                            <option value="CSS3">CSS3</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="JQuery">JQuery</option>
                            <option value="Bootstrap">Bootstrap</option>
                        </select>
                    </label>
                    <button className="btn btn-primary" type="submit">Click here</button>
                </form>
            </div>
        );
    }
}

export default QxtEventForm2;
