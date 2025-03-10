import React, { Component } from 'react';
import QxtStudent from './QxtStudent';

export default class QxtStudentList extends Component {
  render() {
    let { renderQxtStudents, onQxtHandleView, onQxtHandleEdit, onQxtHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderQxtStudents.map((student, index) => (
            <QxtStudent 
              key={student.qxtID} 
              qxtIndex={index + 1} 
              renderQxtStudent={student} 
              onQxtHandleView={onQxtHandleView} 
              onQxtHandleEdit={onQxtHandleEdit}
              onQxtHandleDelete={onQxtHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
