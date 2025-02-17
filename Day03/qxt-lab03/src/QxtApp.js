import QxtClassComp from "./component/QxtClassComp";
import QxtFuncComp from "./component/QxtFuncComp";
import QxtJsexpression from "./component/QxtJsexpression";


function QxtApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>Reject JS Lesson03 - Quach Xuan Thinh</h1>
      <QxtJsexpression/>

      <hr/>
      {/* Su dung Functioncomponents */}
      <QxtFuncComp/>
      {/*su dung class components*/}
      <QxtClassComp/>
    </div>
  );
}

export default QxtApp;
