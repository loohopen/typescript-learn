import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloComponents, ShopList } from './components/Hello';
import { Game } from './components/Game';

ReactDOM.render(
    <div>
        <HelloComponents compiler="Hopen" framework="Loo"></HelloComponents>
        <ShopList name="Mark" />
        <Game />
    </div>,
    document.getElementById('app')
);
