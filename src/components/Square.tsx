import * as React from 'react';


export interface SquaerProps{
    value: string;
    onClickEvent: Function;
}
export interface SquareState{
    value: string;
}
export class Square extends React.Component<SquaerProps, {}>{
    render(){
        return (
            <button className="square" onClick={() => this.props.onClickEvent()}>
                {this.props.value}
            </button>
        );
    }
}