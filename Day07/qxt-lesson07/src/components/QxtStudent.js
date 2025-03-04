import React, { Component } from "react";

class QxtStudent extends Component {
    qxtHandleView = (qxtStudent) => {
        this.props.onQxtHandleView(qxtStudent);
    };

    qxtHandleEdit = () => {
        this.props.onQxtHandleEdit(this.props.renderQxtStudent);
    };

    render() {
        let { renderQxtStudent, index } = this.props;

        return (
            <tr>
                <td>{index}</td>
                <td>{renderQxtStudent.qxtId}</td>
                <td>{renderQxtStudent.qxtStudentName}</td>
                <td>{renderQxtStudent.qxtAge}</td>
                <td>{renderQxtStudent.qxtGender}</td>
                <td>
                    <div className="template-demo">
                        <button 
                            type="button" 
                            className="btn btn-danger btn-icon-text" 
                            onClick={() => this.qxtHandleView(renderQxtStudent)}
                        >
                            Xem
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-warning btn-icon-text"
                            onClick={this.qxtHandleEdit} // Gọi hàm chỉnh sửa
                        >
                            Sửa
                        </button>
                        <button type="button" className="btn btn-success btn-icon-text">
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default QxtStudent;
