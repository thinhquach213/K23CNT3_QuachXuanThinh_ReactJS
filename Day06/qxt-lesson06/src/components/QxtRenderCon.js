import React, { Component } from 'react';
import QxtLoginControl from './QxtLoginControl';

class QxtRenderCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    // Hàm xử lý login
    qxtHandleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    // Hàm xử lý logout
    qxtHandleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr />
                
                {/* Truyền state isLoggedIn vào QxtLoginControl */}
                <QxtLoginControl isLoggedIn={this.state.isLoggedIn} />

                <hr />

                {/* Hiển thị nút phù hợp dựa trên trạng thái đăng nhập */}
                {this.state.isLoggedIn ? (
                    <button onClick={this.qxtHandleLogout}>Logout</button>
                ) : (
                    <button onClick={this.qxtHandleLogin}>Login</button>
                )}
            </div>
        );
    }
}

export default QxtRenderCon;
