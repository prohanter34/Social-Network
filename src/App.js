import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';


function App(props) {
  
  return (

    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Navigation />
        <Content state={props.state} dispatch={props.dispatch} />
      </BrowserRouter>
    </div>

  );
}

export default App;
