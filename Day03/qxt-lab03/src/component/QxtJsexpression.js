import React from 'react'

export default function QxtJsexpression() {
    // bien
    const name="Quach Xuan Thinh";

    const user = {
        fistName:"Thinh",
        lastName:"Quach"
    }
    //ham
    const fullName=(user)=>{
        return  user.fistName + ' ' + user.lastName 
    }
    // element
    const element = (
        <div>
            {/* bieu thuc jsx */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3> Wellcome to, {name}</h3>
        </div>
    );
    // ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Wellcome to {name}</h3>
        }else{
            return <h3> Wellcome to  Fit-NTU - K23CNT3 </h3>
        }
    }
  return (
    <div>
        <h1> QXT - JSX Expression </h1>
        {/* su dung bien element */}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Quach Xuan Thinh")}
    </div>
  )
}
