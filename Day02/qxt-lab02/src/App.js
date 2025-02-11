import logo from './logo.svg';
import './App.css';
import QxtComplnfor from './components/QxtComplnfor';

function App() {
  return (
    <div className="App">
       <h1>Quach Xuan Thinh - k23CNT - ReactJS</h1>
       <hr/>
        {/* su dung component QxtComplnfor */}
        <QxtComplnfor />
        <QxtComplnfor HoVaTen="Quach Xuan Thinh " MaSV="2532958723523" NgaySinh="12/11/2005" DienThoai="09592852333" TenLop="K23Cnt3"/>
    </div>
  );
}

export default App;
