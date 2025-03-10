import React from 'react';

const QxtStudentDetail = ({ student, onClose }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Thông tin chi tiết</h3>
        <p><strong>Mã sinh viên:</strong> {student.qxtID}</p>
        <p><strong>Họ tên:</strong> {student.qxtStudentName}</p>
        <p><strong>Tuổi:</strong> {student.qxtAge}</p>
        <p><strong>Giới tính:</strong> {student.qxtGender}</p>
        <p><strong>Ngày sinh:</strong> {student.qxtBirthday}</p>
        <p><strong>Nơi sinh:</strong> {student.qxtBirthPlace}</p>
        <p><strong>Địa chỉ:</strong> {student.qxtAddress}</p>
        <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
};

export default QxtStudentDetail;