import React from 'react';
import QxtLogincomp from './QxtLogincomp';
import QxtLogoutCom from './QxtLogoutCom'; // Sửa lỗi thiếu import

export default function QxtLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var QxtLoginControl = isLoggedIn ? <QxtLogincomp /> : <QxtLogoutCom />;

    return (
        <div>
            {QxtLoginControl}
        </div>
    );
}
