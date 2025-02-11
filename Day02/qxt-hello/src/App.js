import logo from './logo.svg';
import './App.css';
import QxtCompA  from './components/QxtCompA';

function App() {
  return (
    <div className="App">
      <h1>Quach Xuan Thinh - k23CNT - ReactJS</h1>
      <hr/>
      {/* su dung component QxtCompA */}
      <QxtCompA />
      <QxtCompA qxt-name="Quach Xuan Thinh " qxt-address="25 Vu Ngoc Phan" />
    </div>
  );
}

export default App;
