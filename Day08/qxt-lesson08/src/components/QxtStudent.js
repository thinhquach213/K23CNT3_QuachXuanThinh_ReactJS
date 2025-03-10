import React, { Component } from 'react';

export default class QxtStudent extends Component {
  render() {
    let { renderQxtStudent, qxtIndex, onQxtHandleView, onQxtHandleEdit, onQxtHandleDelete } = this.props;

    return (
      <tr>
        <td>{qxtIndex}</td>
        <td>{renderQxtStudent.qxtID}</td>
        <td>{renderQxtStudent.qxtStudentName}</td>
        <td>{renderQxtStudent.qxtAge}</td>
        <td>{renderQxtStudent.qxtGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onQxtHandleView(renderQxtStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onQxtHandleEdit(renderQxtStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onQxtHandleDelete(renderQxtStudent.qxtID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}
