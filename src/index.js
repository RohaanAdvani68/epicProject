import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/ListComponent.js';
import './Components/ListItem.js';
import './Components/ButtonComponent.js';

//classes referenced by course ID in the dictionary classData
var classData={
  100:{name:"Intro to AI", professor:"Rubenstein", dept:"EECS", course:348, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:30",endTime:"13:50", location:"Tech AUD"},
  200:{name:"Game Design", professor:"Forbus", dept:"EECS", course:370, isDiscussion:false, Discussions:[], Days:["T","Th"], startTime:"14:00",endTime:"15:50", location:"Tech LR5"},
  300:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:false, Discussions:[310,320,330], Days:["T","Th"], startTime:"11:00",endTime:"12:20", location:"Tech L211"},
  310:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Kresge 2335"},
  320:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
  330:{name:"Intro to Islam", professor:"Ingram", dept:"REL", course:250, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Kresge 2335"},
  400:{name:"Social Psychology", professor:"Bodenhousen", dept:"Psych", course:204, isDiscussion:false, Discussions:[], Days:["M","W"], startTime:"14:00",endTime:"15:20", location:"Annenburg 104"},
  500:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:false, Discussions:[510,520], Days:["T","Th"], startTime:"11:00",endTime:"12:20", location:"Tech LR2"},
  510:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
  520:{name:"Intro to Philosophy", professor:"Jeffers", dept:"PHIL", course:110, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Locy 110"},
  600:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:false, Discussions:[610,620,630], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech AUD"},
  610:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"16:00",endTime:"16:50", location:"Tech L261"},
  620:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["Th"], startTime:"15:00",endTime:"15:50", location:"Tech L261"},
  630:{name:"Data Structures", professor:"Horswill", dept:"EECS", course:214, isDiscussion:true, Discussions:[], Days:["T"], startTime:"16:00",endTime:"16:50", location:"Tech L261"},
  700:{name:"Intro to Sociology", professor:"Rawlins", dept:"SOCIO", course:110, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech LR2"},
  800:{name:"Intro to Psychology", professor:"Broaders", dept:"PSYCH", course:110, isDiscussion:false, Discussions:[], Days:["M","W","F"], startTime:"12:00",endTime:"12:50", location:"Tech AUD"},
};


ReactDOM.render(
  document.getElementById('root')
);


/*
function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
  if(this.state.xIsNext)
  {
    squares[i] = 'X';
    this.setState({xIsNext:false})
  }
  else
  {
    squares[i]="O";
    this.setState({xIsNext:true})
  }
  this.setState({squares: squares});
}
  renderSquare(i){
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{} TODO }</ol>
        </div>
      </div>
    );
  }
}

========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
*/
