import React, { Component } from "react";
import QxtControl from "./components/QxtControl";
import QxtStudentList from "./components/QxtStudentList";
import QxtForm from "./components/QxtForm";

class QxtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qxtStudents: [
        { qxtId: "SV001", qxtStudentName: "Quách Xuân Thịnh", qxtAge: 46, qxtGender: "Nam", qxtBirthday: "25/05/1979", qxtBirthPlace: "HN", qxtAddress: "Tòa VCN, 25 Vũ Ngọc Phan" },
        { qxtId: "SV002", qxtStudentName: "Chu Nguyên Chương", qxtAge: 188, qxtGender: "Nữ", qxtBirthday: "25/05/1179", qxtBirthPlace: "HP", qxtAddress: "Trung Quốc" },
        { qxtId: "SV003", qxtStudentName: "Tần Thủy Hoàng", qxtAge: 55, qxtGender: "Nam", qxtBirthday: "25/05/1079", qxtBirthPlace: "TpHCM", qxtAddress: "Trung Quốc" },
        { qxtId: "SV004", qxtStudentName: "Hoàng Thùy Linh", qxtAge: 55, qxtGender: "Nam", qxtBirthday: "25/05/1079", qxtBirthPlace: "TpHCM", qxtAddress: "Hồ Chí Minh" },
      ],
      qxtStudent: "",
    };
  }

  // Xem chi tiết sinh viên
  qxtHandleView = (qxtStudent) => {
    this.setState({ qxtStudent });
  };

  // Cập nhật thông tin sinh viên
  qxtHandleUpdate = (updatedStudent) => {
    this.setState((prevState) => ({
      qxtStudents: prevState.qxtStudents.map((student) =>
        student.qxtId === updatedStudent.qxtId ? updatedStudent : student
      ),
    }));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Quách Xuân Thịnh - K23CNT3 - Mini Project1</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <QxtControl />
                <QxtStudentList
                  renderQxtStudents={this.state.qxtStudents}
                  onQxtHandleView={this.qxtHandleView}
                  onQxtHandleUpdate={this.qxtHandleUpdate} // ✅ Truyền xuống
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              <QxtForm renderQxtStudent={this.state.qxtStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default QxtApp;
