import logo from './logo.svg';
import DeckBox from './components/deck-box'
import Home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    var style = {
        backgroundColor: "gray",
        color: "white",
        height: "100px",
        textAlign: 'center'
    }

    var footer = {
        backgroundColor: "gray",
        color: "white",
        height: "100px",
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '0'
    }
    return (
        <div className="App-page">
            <div style= {style}>Header</div>
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
