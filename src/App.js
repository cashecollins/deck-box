import logo from './logo.svg';
import DeckBox from './components/deck-box'
import Home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    var footer = {
        backgroundColor: "black",
        color: "white",
        height: "100px",
        textAlign: 'center',
        width: '100%',
    }
    return (
        <div className="App-page">
            <div className="App-header">
                <div>Options</div>
                <div>Deck Box</div>
                <div>Login</div>
            </div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/deck-box" component={DeckBox} />
            </Switch>
            <div style= {footer}>Footer</div>
        </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //     <Switch>
    //         <Route path="/deck-box" component={DeckBox} />
    //     </Switch>
    //   <DeckBox value={1}>x</DeckBox>
    // </div>
  );
}

export default App;
