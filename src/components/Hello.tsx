import * as React from 'react';
import { func, number } from 'prop-types';

export interface HelloProps{
    compiler: string;
    framework: string;
}

export class HelloComponents extends React.Component<HelloProps, {}> {
    render(){
        return <h1>Hello from {this.props.compiler}, and test from {this.props.framework}</h1>
    }
}

// 联合类型
export function paddingLeft(value: string, padding: number | string): string{
    if(typeof padding == 'number'){
        return Array(padding + 1).join(" ") + value;
    }
    if(typeof padding == 'string'){
        return padding + value;
    }
    throw new Error(`excepted string or number, got ${padding}`);
    
}



paddingLeft('Hello', 7);

export function print(value: any): void{
    console.log(value);
}

export interface Dog{
    eat(food: string): void;
    age(): number;
}