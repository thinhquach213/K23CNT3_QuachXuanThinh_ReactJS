import React, { Component } from 'react';
import QxtControl from './components/QxtControl';
import QxtStudentList from './components/QxtStudentList';
import QxtForm from './components/QxtForm';
import QxtStudentDetail from './components/QxtStudentDetail';

class QxtApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qxtStudents: [ 
        { qxtID: "SV001", qxtStudentName: "Phạm Tuấn Anh", qxtAge: 19, qxtGender: "Nam", qxtBirthday: "05/11/2005", qxtBirthPlace: "QN", qxtAddress: "Yên Xá" },
        { qxtID: "SV002", qxtStudentName: "Nguyễn Trọng Hưng", qxtAge: 19, qxtGender: "Nam", qxtBirthday: "04/09/2005", qxtBirthPlace: "HN", qxtAddress: "Hai Bà Trưng" },
        { qxtID: "SV003", qxtStudentName: "Nguyễn Hữu Tuấn", qxtAge: 19, qxtGender: "Nam", qxtBirthday: "04/09/2005", qxtBirthPlace: "HD", qxtAddress: "Hải Dương" },
        { qxtID: "SV004", qxtStudentName: "Nguyễn Gia Duy", qxtAge: 20, qxtGender: "Nam", qxtBirthday: "13/01/2005", qxtBirthPlace: "HD", qxtAddress: "Yên Xá" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false, 
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.qxtStudents });
  }

  onQxtHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  filterStudents = () => {
    const { qxtStudents, searchKeyword } = this.state;
    const filtered = qxtStudents.filter(student =>
      student.qxtStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  onQxtHandleView = (qxtStudent) => {
    this.setState({
      selectedStudent: qxtStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  onQxtHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  onQxtHandleEdit = (qxtStudent) => {
    this.setState({ selectedStudent: qxtStudent, showDetail: false, isAddingNew: false });
  };

  onQxtHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.qxtStudents.filter(student => student.qxtID !== studentID);
      return { qxtStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  onQxtHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.qxtStudents.map(student => 
        student.qxtID === updatedStudent.qxtID ? updatedStudent : student
      );
      return { qxtStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  onQxtHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  onQxtHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      qxtStudents: [...prevState.qxtStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Quach Xuan Thinh - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <QxtControl 
                  onQxtHandleAddNew={this.onQxtHandleAddNew} 
                  onQxtHandleSearch={this.onQxtHandleSearch} 
                />
                <QxtStudentList
                  renderQxtStudents={this.state.filteredStudents} 
                  onQxtHandleView={this.onQxtHandleView} 
                  onQxtHandleEdit={this.onQxtHandleEdit}
                  onQxtHandleDelete={this.onQxtHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <QxtStudentDetail 
                  student={this.state.selectedStudent} 
                  onClose={this.onQxtHandleCloseDetail} 
                />
              ) : (
                <QxtForm 
                  renderQxtStudent={this.state.selectedStudent} 
                  onQxtHandleUpdate={this.onQxtHandleUpdate} 
                  onQxtHandleSaveNew={this.onQxtHandleSaveNew} 
                  isAddingNew={this.state.isAddingNew} 
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default QxtApp;
