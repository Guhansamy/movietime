import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes,Route, Outlet } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Outlet />
      {/* <Body />
      <Contact /> */}
    </div>
  );
}

export default App;
