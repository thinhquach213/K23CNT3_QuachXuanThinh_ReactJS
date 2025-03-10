import React, { Component } from 'react';

export default class QxtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qxtID: '',
      qxtStudentName: '',
      qxtAge: '',
      qxtGender: 'Nam',
      qxtBirthday: '',
      qxtBirthPlace: 'HN',
      qxtAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderQxtStudent !== this.props.renderQxtStudent) {
      if (this.props.renderQxtStudent) {
        this.setState({ ...this.props.renderQxtStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          qxtID: '',
          qxtStudentName: '',
          qxtAge: '',
          qxtGender: 'Nam',
          qxtBirthday: '',
          qxtBirthPlace: 'HN',
          qxtAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.isAddingNew) {
      this.props.onQxtHandleSaveNew({ ...this.state, qxtID: `SV${Date.now()}` }); // Tạo mã SV tự động
    } else {
      this.props.onQxtHandleUpdate(this.state);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>
            {!this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="qxtID" value={this.state.qxtID} readOnly />
                </div>
              </div>
            )}
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="qxtStudentName" value={this.state.qxtStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="qxtAge" value={this.state.qxtAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="qxtGender" value={this.state.qxtGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="qxtBirthday" value={this.state.qxtBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="qxtBirthPlace" value={this.state.qxtBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="qxtAddress" value={this.state.qxtAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}