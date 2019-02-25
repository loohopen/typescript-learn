import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloComponents } from './components/Hello';

ReactDOM.render(
    <HelloComponents compiler="Hopen" framework="Loo"></HelloComponents>,
    document.getElementById('app')
);
