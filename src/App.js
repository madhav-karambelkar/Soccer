import React, { Component }  from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from "./component/MainComponent";
class App extends Component
{
  render()
  {
    return(
      <BrowserRouter>
        <div className="App backcl">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
