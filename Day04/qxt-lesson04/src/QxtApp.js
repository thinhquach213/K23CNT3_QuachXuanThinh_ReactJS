import QxtClassComp from "./components/QxtClassComp";
import QxtFuncComp from "./components/QxtFuncComp";
import QxtFuncCompObj from "./components/QxtFuncCompObj";


function QxtApp() {
  //object 
  const users = {
    fullname:'Chanh Van Doanh ',
    age: 20,
    phone: '028509534'
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - State</h1>
      <hr />
      <div className="alert alert-danger">
        <QxtFuncComp 
          name="Quach THinh" 
          address="25 Vu Ngoc Phan" 
          company="Devmaster" 
        />
        <hr />
        <QxtFuncComp 
          name="Mai Binh An" 
          address="K23CNNT3" 
          company="Fit-ntu" 
        />
      </div>
      <div className="alert alert-info">
        <QxtFuncCompObj  renderInfo={users}/>
      </div>
        <QxtClassComp />
        {/* chuyen du lieu*/}
        <QxtClassComp name="K23CNT3" renderUsers= {users} />
    </div>
  );
}

export default QxtApp;
