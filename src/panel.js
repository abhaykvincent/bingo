import React from 'react';

class Panel extends React.Component{
    randomNumberChange(){
        this.props.randomNumber();
    }
    render(){
        const numbers = this.props.numbers;
        numbers[0]=12;
        console.log(this.props.current);
        return (
            <section id="panel">
                <div className="randomNumber">{this.props.current}</div>
                <button  onClick={this.randomNumberChange.bind(this)}>Start</button>
                <button  onClick={this.randomNumberChange.bind(this)}>Roll</button>
            </section>
        )
    }
}
export default Panel;