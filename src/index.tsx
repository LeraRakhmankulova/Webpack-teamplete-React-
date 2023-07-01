import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";

import "./assets/styles/global.scss"

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)