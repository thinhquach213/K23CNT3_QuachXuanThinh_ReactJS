import React, { Component } from 'react';

class QxtClassComp extends Component {
    constructor(props) {
        super(props);
        // khởi tạo state
        this.state = {
            fullName: "Thinh Thinh",
            age: 19,
            phone: "0941234867"
        };
    }
    // ham su ly su kien
    changeInfo = (ev)=>{
        // cap nhat state
        this.setState({
            fullName:"Quach Xuan Thinh "
        });
    }
    // Nếu bạn có hàm changeInfo, hãy định nghĩa nó ở đây
    changeInfo = () => {
        // Ví dụ: cập nhật state
        this.setState({
            fullName: "Updated Name"
        });
    };

    render() {
        let users = this.props.renderUsers;
        console.log('');
        console.log(users);
        console.log();
        
        return (
            <div className="alert alert-success">
                <h2>Trình bày dữ liệu từ state</h2>
                <p>info state (fullName): {this.state.fullName}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>
                <hr />
                <button className="btn btn-primary" onClick={this.changeInfo}>
                    Change info
                </button>
                <hr/>
                <h3>Lay Du lieu tu Props</h3>
                <p>Name: {this.props.renderName}</p>
            
                <p>Fullname:{ users ?users.fullName:''}</p>
            </div>
        );
    }
}

export default QxtClassComp;
