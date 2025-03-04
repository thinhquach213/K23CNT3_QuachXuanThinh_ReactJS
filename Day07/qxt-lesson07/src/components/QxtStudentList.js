import React, { Component } from "react";
import QxtStudent from "./QxtStudent";

class QxtStudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingStudent: null, // Lưu sinh viên đang sửa
        };
    }

    qxtHandleView = (qxtStudent) => {
        this.props.onQxtHandleView(qxtStudent);
    };

    qxtHandleEdit = (qxtStudent) => {
        this.setState({ editingStudent: qxtStudent });
    };

    qxtHandleSave = () => {
        this.props.onQxtHandleUpdate(this.state.editingStudent);
        this.setState({ editingStudent: null }); // Ẩn form sau khi lưu
    };

    qxtHandleChange = (event) => {
        let updatedStudent = { 
            ...this.state.editingStudent, 
            [event.target.name]: event.target.value 
        };
        this.setState({ editingStudent: updatedStudent });
    };

    render() {
        let { renderQxtStudents } = this.props;
        let { editingStudent } = this.state;

        let qxtElementStudent = renderQxtStudents.map((qxtItem, index) => {
            return (
                <QxtStudent 
                    key={index} 
                    renderQxtStudent={qxtItem} 
                    onQxtHandleView={this.qxtHandleView}
                    onQxtHandleEdit={this.qxtHandleEdit} 
                />
            );
        });

        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {qxtElementStudent}
                        </tbody>
                    </table>
                </div>

                {/* Form chỉnh sửa sinh viên */}
                {editingStudent && (
                    <div className="edit-form">
                        <h3>Chỉnh sửa sinh viên</h3>
                        <input 
                            type="text" 
                            name="qxtStudentName" 
                            value={editingStudent.qxtStudentName} 
                            onChange={this.qxtHandleChange} 
                        />
                        <input 
                            type="number" 
                            name="qxtAge" 
                            value={editingStudent.qxtAge} 
                            onChange={this.qxtHandleChange} 
                        />
                        <button onClick={this.qxtHandleSave}>Lưu</button>
                    </div>
                )}
            </div>
        );
    }
}

export default QxtStudentList;
