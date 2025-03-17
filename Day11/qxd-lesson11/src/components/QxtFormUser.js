import React, { useState } from 'react'

export default function QxtFormUser({onQxtAddNew}) {
    const [id, setQxtId] = useState('')
    const [qxtFullName, setQxtFullName] = useState('')
    const [qxtUserName, setQxtUserName] = useState('')
    const [qxtPass, setQxtPass] = useState('')

     const qxtHandleSubmit = (ev) =>{
        ev.preventDefault()
        console.log(id,qxtFullName,qxtUserName,qxtPass);
        
        onQxtAddNew({id,qxtFullName,qxtUserName,qxtPass})
    }
  return (
    <div>
        <form>
            <p>Mã Sinh Viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setQxtId(ev.target.value)}/>
            </p>
            <p>Họ Và Tên:
                <input type='text'  name='qxtFullName' value={qxtFullName} onChange={(ev)=>setQxtFullName(ev.target.value)}  />
            </p>
            <p>Tài Khoản:
                <input type='text'  name='qxtUserName' value={qxtUserName} onChange={(ev)=>setQxtUserName(ev.target.value)} />
            </p>
            <p>Mật Khẩu:
                <input type='password'   name='qxtPass' value={qxtPass}  onChange={(ev)=>setQxtPass(ev.target.value)} />
            </p>

            <p>
                <button name='qxtSave' onClick={qxtHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}