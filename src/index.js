import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './components/Clock';
// import GraderContainer from './containers/GraderContainer'
import registerServiceWorker from './registerServiceWorker';
import Scoreboard from "./components/Scoreboard";
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/scoreboard" component={Clock} />
        </div>
    </BrowserRouter>, document.getElementById('clock')
);

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/scoreboard" component={Scoreboard}  />
        </div>
    </BrowserRouter>, document.getElementById('root')
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
registerServiceWorker();
