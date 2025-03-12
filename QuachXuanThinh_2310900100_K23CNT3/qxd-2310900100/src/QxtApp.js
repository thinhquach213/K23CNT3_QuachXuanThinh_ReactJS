import React, { useState } from "react";
import QxtMemberList from "./components/QxtMemberList";
import QxtMemberAdd from "./components/QxtMemberAdd";

const QxtApp = () => {
  //khởi tạo thành viên
  const [members, setMembers] = useState([
    { id: "230001", fullname: "Trần Hà Linh", username: "Linh", password: "123456" },
    { id: "230002", fullname: "Hoàng Thùy Huyên", username: "Huyên", password: "abcdef" },
    { id: "230003", fullname: "Cẩm Thùy Lan", username: "Lan", password: "qwerty" },
  ]);

//thêm mới
  const addMember = (member) => {
    setMembers([...members, member]);
  };

  // Hàm xóa thành viên theo ID
  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.id === updatedMember.id ? updatedMember : member)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Danh sách thành viên</h1>
      <QxtMemberList members={members} removeMember={removeMember} updateMember={updateMember}/>
      <QxtMemberAdd addMember={addMember}/>
    </div>
  );
};

export default QxtApp;
