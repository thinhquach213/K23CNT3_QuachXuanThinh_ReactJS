import React, { Component } from "react";

class QxtEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qxtSelectCheckBox: ["Apple"], // Trái cây mặc định đã chọn
    };
  }

  // Hàm xử lý khi chọn checkbox
  qxtHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.qxtSelectCheckBox];

    // Nếu chọn checkbox, thêm vào mảng; nếu bỏ chọn, loại bỏ khỏi mảng
    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter((option) => option !== value);

    console.log("selected:", selected, "selectedOptions:", selectedOptions);

    this.setState({
      qxtSelectCheckBox: selectedOptions,
    });
  };

  // Hàm xử lý khi form được submit
  qxtHandleSubmit = (event) => {
    event.preventDefault();
    const { qxtSelectCheckBox } = this.state;
    console.log("Fruits selected:", qxtSelectCheckBox);
    
    alert("Selected fruits: " + qxtSelectCheckBox.join(", "));
  };

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form onSubmit={this.qxtHandleSubmit}>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.qxtSelectCheckBox.includes("Apple")}
              onChange={this.qxtHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.qxtSelectCheckBox.includes("Banana")}
              onChange={this.qxtHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.qxtSelectCheckBox.includes("Orange")}
              onChange={this.qxtHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default QxtEventForm4;
