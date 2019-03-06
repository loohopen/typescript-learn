import * as React from 'react';

import { Board } from './Board';
import { number } from 'prop-types';

export interface GameState{
    history: Array<Object>;
    stepNumber: number;
    xIsNext: boolean;
}
export class Game extends React.Component<{}, GameState>{
    state = {
        history: [
            {squares: [
                '', '', '',
                '', '', '',
                '', '', ''
            ]}
        ],
        stepNumber: 0,
        xIsNext: true
    }

    handleClick(i: number): void{

        // 不可变原则，因为减少了比对数据树是否变更的时间， 如果是可变，就得对
        // 对象里的值一一做比对， 而不可变原则则只需判断对象整体是否被替换了，
        // 则可判断出数据树是否变更了

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currunt = history[history.length -1];
        const _squares = [...currunt.squares];
        if(calculateWinner(_squares) || _squares[i]) return;
        
        _squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            stepNumber: history.length,
            history: [...history, {squares: _squares}],
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step: number){
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 == 0 ? true : false
        });
    }

    render(){
        let status: string;
        const history = this.state.history;
        const currunt = history[this.state.stepNumber];
        const winner = calculateWinner(currunt.squares);
        const moves = history.map((step: Object, move: number) => {
            const desc = move ? `move #${move}` : 'Game Start';
            return (
                <li key={move}>
                    <a href="#" onClick={() =>this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })

        if(winner){
            status = 'winner: ' + winner;
        }else{
            status = `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board  squares={currunt.squares}
                            onClickEvent={(i: number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <div>history list</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export function calculateWinner(squares: string[]): string{
    let winLines: Array<Array<number>> = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i = 0; i < winLines.length; i++){
        const [a, b, c] = winLines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}