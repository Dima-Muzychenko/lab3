import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App() { //це компонента
  return (<div><Header/>
    <h1>Hello, world!</h1>
  </div>);
}

const Header = ()=>{//це також компонента
    return(<div>
        <a href='#s'>Home</a>
    </div>);
}
export default App;

