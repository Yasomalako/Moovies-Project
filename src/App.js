import './App.css';
import {BrowserRouter } from "react-router-dom";
import Header from './components/fiuters/header/Header';
import Router from './Router';
import Footer from './components/fiuters/footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
