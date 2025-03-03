import React from 'react';

export default function QxtRenderArray() {
    const qxtNumbers = [10, 20, 30, 40, 50];

    // Sửa lỗi: Thêm return vào arrow function
    const qxtElement = qxtNumbers.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <div className='alert alert-success'>
            <ul>{qxtElement}</ul> 
        </div>
    );
}
