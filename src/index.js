import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Clock from './components/Clock';
import registerServiceWorker from './registerServiceWorker';
import Scoreboard from "./components/Scoreboard";
import { BrowserRouter, Route } from 'react-router-dom';
// import Scoreboard from "./Scoreboard";
// import ScoreBoardItem from './components/score_board_item';
// import { ScoreBoardList } from './components/score_board_list';



// const App = () => {
//     return <div>
//         <ScoreBoardItem/>
//     </div>
// }


// let View = (
//     <BrowserRouter>
//         <Route path="/" component={App} />
//         <Route path="/scoreboard" component={Scoreboard} />
//     </BrowserRouter>
// );

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/scoreboard" component={Scoreboard} />
        </div>
    </BrowserRouter>, document.getElementById('root')
);

// ReactDOM.render(View, document.getElementById('root'));
// ReactDOM.render(<Clock/>, document.getElementById('clock'));
// ReactDOM.render(<Scoreboard/>, document.getElementById('board'));
// ReactDOM.render(<Scoreboard />, document.getElementById('root'));
registerServiceWorker();
