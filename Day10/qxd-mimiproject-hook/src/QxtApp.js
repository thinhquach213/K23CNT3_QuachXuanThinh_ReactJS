import React from 'react';
import QxtTodoList from './components/QxtTodoList'; // Importing the Todo list
import QxtThemeToggle from './components/QxtThemeToggle'; // Importing the Theme Toggle
import QxtThemeContext from './context/QxtThemeContext'; // Importing the Theme Context


function App() {
  return (
    <QxtThemeContext>
      <div>
        <h1>Mini Project: Quản lý công việc (To-Do List) với Hooks trong ReactJS</h1>
        <h4>
          Dự án này giúp bạn thực hành sử dụng{' '}
          <span className="highlight">useState</span>,{' '}
          <span className="highlight">useEffect</span>,{' '}
          <span className="highlight">useReducer</span>,{' '}
          <span className="highlight">useContext</span>,{' '}
          <span className="highlight">useRef</span> để tạo 1 ứng dụng quản lý công việc (To-Do List) đơn giản
        </h4>
        <hr />
        <h1>Quản lý công việc</h1>
        <QxtThemeToggle /> {/* Theme toggle button */}
        <QxtTodoList /> {/* Todo list */}
      </div>
    </QxtThemeContext>
  );
}

export default App;
