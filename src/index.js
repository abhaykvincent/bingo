import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component{
    render(){
        const board = this.props.board;
        const boardStructure = board.map((cell, cellNum) => {
                return (
                    <div class="cell" key={cellNum}>
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
            player: "A"
        }
    }
    render(){
        return (
            <div id="templateHome">
                <Board board={this.state.board}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);