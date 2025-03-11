import React, { useEffect, useState } from 'react'

export default function QxtUseEffect() {
    // state 
    const [qxtCount, setQxtCount] = useState(0)
    // useEffect sử dụng 1 tham số : Được thực hiện Mỗi khi render / re-render
    useEffect(() => {
        console.log("Đây là useEffect 1 tham số");

    });


    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng được gọi duy nhất 1 lần khi render
    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,thứ 2 là mảng rỗng []");

    }, [])

    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối tượng phụ thuộc
    // +> Được gọi mỗi khi thay đổi
    // khởi tạo state là mảng
    const qxtArr = [1, 2, 3, 4, 5, 6];
    const [qxtArray, setQxtArray] = useState(qxtArr);
    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,tham số thứ 2 là mảng các đối tượng phụ thuộc[Array]");

    }, [qxtArray]);

    useEffect(() => {
        console.log("Đây là useEffet 2 tham số,tham số thứ 2 là mảng các đối tượng phụ thuộc [qxtCount]");

    }, [qxtCount])

    const qxtHandleAddList=()=>{
        setQxtArray([
          ...qxtArray,
         parseInt(Math.random()*100),
        ]) 
     }
    return (
        <div className='alert alert-info'>
            <h2>Demo UseEffect </h2>
            <h3>Count: {qxtCount}</h3>
            <button onClick={() => setQxtCount(qxtCount + 1)} > Click Here</button>
            <div>
                <h3>Array: {qxtArray.toString()}</h3>
                <button onClick={qxtHandleAddList}>Thêm Phần tử +</button>
            </div>
        </div>
    )
}
