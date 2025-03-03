import React, { Component } from 'react';

export default class QxtEventForm5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qxtName: "Quách Thịnh ",
            qxtAge: 20,
            qxtGender: "Male",
            qxtCourse: "CSS3"
        };
    }

    // Hàm xử lý sự kiện thay đổi input
    qxtHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    // Hàm xử lý sự kiện submit
    qxtHandleSubmit = (event) => {
        event.preventDefault();
        alert(
            this.state.qxtName + "\n" +
            this.state.qxtAge + "\n" +
            this.state.qxtGender + "\n" +
            this.state.qxtCourse
        );

        // Chuyển dữ liệu lên component cha
        this.props.onQxtHandleSubmit(this.state);
    };

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info</h2>

                <div>
                    <label htmlFor='qxtName'>Student Name:</label>
                    <input
                        type='text'
                        name='qxtName'
                        id='qxtName'
                        value={this.state.qxtName}
                        onChange={this.qxtHandleChange}
                        className='mx-2 text-center'
                    />
                </div>

                <div>
                    <label htmlFor='qxtAge'>Student Age:</label>
                    <input
                        type='number'
                        name='qxtAge'
                        id='qxtAge'
                        value={this.state.qxtAge}
                        onChange={this.qxtHandleChange}
                        className='mx-2 text-center'
                    />
                </div>

                <div>
                    <label>Student Gender:</label>
                    <input
                        type='radio'
                        name='qxtGender'
                        id='qxtMale'
                        className='mx-2'
                        value='Male'
                        checked={this.state.qxtGender === 'Male'}
                        onChange={this.qxtHandleChange}
                    />
                    <label htmlFor='qxtMale'>Male</label>

                    <input
                        type='radio'
                        name='qxtGender'
                        id='qxtFemale'
                        className='mx-2'
                        value='Female'
                        checked={this.state.qxtGender === 'Female'}
                        onChange={this.qxtHandleChange}
                    />
                    <label htmlFor='qxtFemale'>Female</label>

                    <input
                        type='radio'
                        name='qxtGender'
                        id='qxtNone'
                        className='mx-2'
                        value='None'
                        checked={this.state.qxtGender === 'None'}
                        onChange={this.qxtHandleChange}
                    />
                    <label htmlFor='qxtNone'>None</label>
                </div>

                <div>
                    <label>Chọn khóa học:</label>
                    <select
                        name='qxtCourse'
                        id='qxtCourse'
                        className='mx-2 text-center'
                        value={this.state.qxtCourse}
                        onChange={this.qxtHandleChange}
                    >
                        <option value="HTML3">HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="Bootstrap5">Bootstrap5</option>
                    </select>
                </div>

                <button onClick={this.qxtHandleSubmit} className='btn btn-primary'>
                    Submit
                </button>
            </div>
        );
    }
}
