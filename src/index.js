import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './panel';
import './index.css';
import './style/main.css';

class BoardA extends React.Component{
    render(){
        let numbersList=[];
        const board = this.props.board;
        for(let i=1;i<=25;i++){
            numbersList.push(i)
        }
        for(let i=0;i<25;i++){
            this.props.board[i] = numbersList.splice(Math.random() * (numbersList.length), 1)
        }

        const boardStructure = board.map((cell, cellNum) => {
                return (
                    <div className="cell" key={cellNum}>
                        {cell}
                    </div>
                );
            });
        return (
            <section id="board">
                {boardStructure}
            </section>
        )
    }
}
class BoardB extends React.Component{
    render(){
        let numbersList=[];
        const boardB = this.props.boardB;

        const boardStructure = boardB.map((cell, cellNum) => {
                return (
                    <div className="cell" key={cellNum}>
                        {cell}
                    </div>
                );
            });
        return (
            <section id="board">
                {boardStructure}
            </section>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board : [null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null],
            
            boardB : [null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null,
                    null,null,null,null,null],
                
            player: "A",
            numbers:[],
            numbersList:[],
            current:0,
            possib: [
                [0,1,2,3,4],
                [5,6,7,8,9],
                [10,11,12,13,14],
                [15,16,17,18,19],
                [20,21,22,23,24],
                [0,5,10,15,20],
                [1,6,11,16,21],
                [2,7,12,17,22],
                [3,8,13,18,23],
                [4,9,14,19,24],
                [0,6,12,18,24],
                [4,8,12,16,20],
            ]
        }

        for(let i=1;i<=25;i++){
            this.state.numbers.push(i)
        }

        for(let i=1;i<=25;i++){
            this.state.numbersList.push(i)
        }
        for(let i=0;i<25;i++){
            this.state.boardB[i] = this.state.numbersList.splice(Math.random() * (this.state.numbersList.length), 1)
        }

        for(let i=1;i<=25;i++){
            this.state.numbersList.push(i)
        }
        for(let i=0;i<25;i++){
            this.state.board[i] = this.state.numbersList.splice(Math.random() * (this.state.numbersList.length), 1)
        }
    }
    randomNumber() {
        let randNum =  this.state.numbers.splice(Math.random() * (this.state.numbers.length), 1);
        this.setState({current:randNum});
    }
    render(){
        console.log(this.state.numbers)
        return (
            <div id="bingo">
                <BoardA board={this.state.board} numbers={this.state.numbers}/>
                <BoardB boardB={this.state.board} numbers={this.state.numbers}/>
                <Panel randomNumber={this.randomNumber.bind(this)} current={this.state.current} numbers={this.state.numbers}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);